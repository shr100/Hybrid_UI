#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import Flask, request
import speech_recognition as sr

app = Flask(__name__)


@app.route('/postAudio', methods=['POST'])
def post_audio():
    harvard = sr.AudioFile(request.files['wav'])
    r = sr.Recognizer()
    with harvard as source:
        audio = r.record(source)
    return r.recognize_google(audio)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
