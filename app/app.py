import os
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import json
from bson.objectid import ObjectId
import re
import random


application = Flask(__name__)

application.config["MONGO_URI"] = 'mongodb://' + os.environ['MONGODB_USERNAME'] + ':' + os.environ['MONGODB_PASSWORD'] + '@' + os.environ['MONGODB_HOSTNAME'] + ':27017/' + os.environ['MONGODB_DATABASE'] + '?authSource=admin'

mongo = PyMongo(application)
db = mongo.db


@application.route('/projects', methods=['GET'])
def get_projects():
    projects = db.projects.find()

    data = []
    for project in projects:
        item = {
            'id': str(project['_id']),
            'name': project['name'],
            'description': project['description'],
            'images_count': project['images_count'],
            'metadata_size': project['metadata_size'],
        }
        data.append(item)

    return jsonify(data=data)


@application.route('/projects/<id>', methods=['GET'])
def get_project(id):
    project = db.projects.find_one({'_id': ObjectId(id)})

    if not project:
        return "not found", 404

    metadata = db.metadata.find_one({'_id': project['metadata_id']})
    del metadata['_id']

    item = {
        'id': str(project['_id']),
        'name': project['name'],
        'description': project['description'],
        'images_count': project['images_count'],
        'metadata_size': project['metadata_size'],
        'metadata': metadata,
    }

    return jsonify(item)


@application.route('/projects/<id>', methods=['DELETE'])
def delete_project(id):
    project = db.projects.find_one({'_id': ObjectId(id)})

    if not project:
        return "not found", 404

    db.metadata.delete_one({'_id': project['metadata_id']})
    db.projects.delete_one({'_id': project['_id']})

    return jsonify(status=True)


@application.route('/projects', methods=['POST'])
def create_project():
    name = request.form['name']
    description = request.form['description']
    metadata = request.form['metadata']

    projects_col = db['projects']
    metadata_col = db['metadata']

    x_metadata = metadata_col.insert_one(json.loads(metadata))
    x_projects = projects_col.insert_one({
        "name": name,
        "description": description,
        "images_count": random.randint(50, 100),
        "metadata_size": len(metadata),
        "metadata_id": x_metadata.inserted_id,
    })

    return jsonify(
        id=str(x_projects.inserted_id)
    )


@application.route('/projects/<id>/edit', methods=['POST'])
def edit_project(id):
    name = request.form['name']
    description = request.form['description']
    metadata = request.form['metadata']

    projects_col = db['projects']
    metadata_col = db['metadata']

    project = db.projects.find_one({'_id': ObjectId(id)})

    db.metadata.delete_one({'_id': project['metadata_id']})
    db.projects.delete_one({'_id': project['_id']})

    x_metadata = metadata_col.insert_one(json.loads(metadata))
    x_projects = projects_col.insert_one({
        "name": name,
        "description": description,
        "images_count": random.randint(50, 100),
        "metadata_size": len(metadata),
        "metadata_id": x_metadata.inserted_id,
    })

    return jsonify(
        id=str(x_projects.inserted_id)
    )



@application.route('/projects/search', methods=['POST'])
def search_projects():
    query = request.form['query']

    projects = db.projects.find({
        '$or': [
            {'name': {'$regex': '.*' + query + '.*'}},
            {'description': {'$regex': '.*' + query + '.*'}},
        ],
    })

    data = []
    for project in projects:
        item = {
            'id': str(project['_id']),
            'name': project['name'],
            'description': project['description'],
            'images_count': project['images_count'],
            'metadata_size': project['metadata_size'],
        }
        data.append(item)

    return jsonify(data=data)


@application.route('/metadata/search', methods=['POST'])
def search_metadata():
    query = request.form['query']

    metadatas = db.metadata.find()

    data = []

    for metadata in metadatas:
        for k, v in metadata.items():
            if query in str(v) and not isinstance(v, ObjectId):
                data.append({k: str(v)})

    return jsonify(data=data)


if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("APP_DEBUG", True)
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5000)
    application.run(host='0.0.0.0', port=ENVIRONMENT_PORT, debug=ENVIRONMENT_DEBUG)
