# Developing Metaverse Experiences - Metaverse Classroom

## Introduction
The COVID-19 pandemic has resulted in a widespread shift from in-person meetings to online meetings. 
While video conferencing platforms offer convenience and accessibility from any location, they can be lacking in terms of feedback and engagement, which may lead to decreased participation and performance. 
To address these limitations, our project goal was to develop a virtual meeting environment that closely mimics the experience of real-life meetings and provides opportunities for increased interaction and engagement.


## How to Run
1. Run the whiteboard and student desk web application
```bash
cd webviewer
docker-compose up
```
Alternatively
```bash
cd webviewer
export NODE_OPTIONS=--openssl-legacy-provider # For newer versions of node on Mac/Linux
# set NODE_OPTIONS=--openssl-legacy-provider # For Windows
npm install
npm run build
npm run dev
```



2. Run the facial tracking model
```bash
git clone https://github.com/emilianavt/OpenSeeFace
cd OpenSeeFace
pip install ort-nightly opencv-python pillow numpy # For Python 3.10 and above
# pip install onnxruntime opencv-python pillow numpy # For Python 3.6 - 3.9
python facetracker.py
```
3. See "How to Play!"

## How to Play!

To try out this project, start the project in Unity, start by opening the MainMenu scene. From there, you can log in using either "Teacher" or "teacher" as the username to access the teacher's perspective. If you use any other username, you will be given access to the student's perspective. Note that the password is not checked, so you can use any value to log in.
