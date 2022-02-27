import os
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo


application = Flask(__name__)

application.config["MONGO_URI"] = 'mongodb://' + os.environ['MONGODB_USERNAME'] + ':' + os.environ['MONGODB_PASSWORD'] + '@' + os.environ['MONGODB_HOSTNAME'] + ':27017/' + os.environ['MONGODB_DATABASE'] + '?authSource=admin'

mongo = PyMongo(application)
db = mongo.db


@application.route('/projects')
def projects():
    projects = db.projects.find()

    data = []
    for project in projects:
        item = {
            'id': project['id'],
            'name': project['name'],
            'description': project['description'],
            'images_count': project['images_count'],
            'metadata_size': project['metadata_size'],
        }
        data.append(item)

    return jsonify(
        status=True,
        data=data,
    )


if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("APP_DEBUG", True)
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5000)
    application.run(host='0.0.0.0', port=ENVIRONMENT_PORT, debug=ENVIRONMENT_DEBUG)
