#!/bin/bash

echo ******************************************************
echo Starting the replica set
echo ******************************************************

sleep 20 | echo Sleeping
mongosh mongodb://mongodb:27017 replicaSet.js
