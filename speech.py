import speech_recognition as sr

r = sr.Recognizer()


mic = sr.Microphone()
with mic as source:
    print("Speak into the mic")
    audio = r.listen(source)
    print("Just a second")
    print(r.recognize_google(audio))