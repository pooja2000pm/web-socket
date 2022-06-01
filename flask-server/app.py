# from http import server
from flask import Flask,request,jsonify
import requests
# import socket
# import threading
from flask_cors import CORS,cross_origin
import ssllansscanner


app = Flask(__name__)

CORS(app)


@app.route("/", methods= ["POST"])
@cross_origin()
def members():
    r = request.get_json()
    print(r)
    hn = r["data"]



    data = ssllansscanner.newScan(hn)
    

    data = requests.get('https://api.ssllabs.com/api/v3/analyze', params = {"host": hn, "publish":"on"})
    print(data)

    
    return data



    # r = requests.get('https://api.ssllabs.com/api/v3/analyze?host=tml.ai&publish=on')
    # return r.text

@app.route("/data", methods= ["GET"])
@cross_origin()
def members2():
    
    
    # data = requests.get('https://api.ssllabs.com/api/v3/analyze?host={r}&publish=on')
    
    return {"data":"hello"}



    # r = requests.get('https://api.ssllabs.com/api/v3/analyze?host=tml.ai&publish=on')
    # return r.text



if __name__ == "__main__":
    app.run(debug=True)
# HEADER = 64
# PORT = 5050
# FORMAT = "utf-8"
# DISCONNECT_MESSAGE = "DISCONNECT"
# SERVER = "20.204.15.174"
# ADDR = (SERVER, PORT)

# client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# client.connect(ADDR)

# def send(msg):
#         message = msg.encode(FORMAT)
#         msg_length = len(message)
#         send_length = str(msg_length).encode(FORMAT)
#         send_length += b'' * (HEADER - len(send_length))
#         client.send(send_length)
#         client.send(message)

# send("hello")
# send(DISCONNECT_MESSAGE)
