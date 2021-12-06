import pymongo
from pymongo import MongoClient

client = MongoClient('localhost', 27017)

db = client['HelloWorldDB']

helloworld_collection = db['helloworld']

print('collection: ', helloworld_collection)

for x in helloworld_collection.find():
    print('row: ', x)
