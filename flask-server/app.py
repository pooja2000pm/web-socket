from flask import Flask,request,jsonify
import requests
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
  #  data = requests.get('https://api.ssllabs.com/api/v3/analyze', params = {"host": hn, "publish":"on"})
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
