# Demo Project for the LLVM Transformation Pass

## Overview

This project is a complete end-to-end demonstration that integrates a modern React front end with a Django back end to process code using an LLVM Transformation Pass. The system efficiently transforms submitted code and displays both the original and optimized outputs, showcasing performance improvements and the seamless integration of advanced compiler techniques with user-friendly interfaces.

## Installation

### Frontend

Navigate to the "frontend" directory and install dependencies:
```bash
npm install
```

Then, start the development server:
```bash
npm start
```

### Backend

Navigate to the "backend" directory and set up the environment:

```bash
python3 -m venv env source env/bin/activate 
pip install -r requirements.txt 
python manage.py makemigrations 
python manage.py migrate 
python manage.py runserver
```

## Dockerized Setup

You can also run the entire project using Docker. A Dockerfile is provided in the project root.

To build the Docker image:
```bash
sudo docker build -t demo-project .
```

Then, run the Docker container:
```bash
sudo docker run --rm -p 8000:8000 demo-project
```
## Usage

When both the React and Django servers are running, users enter code in C the React interface. This code is sent as a JSON payload to the Django back end, where it undergoes processing via the LLVM Transformation Pass. The back end returns both the original and the transformed output, which the front end displays side by side.
