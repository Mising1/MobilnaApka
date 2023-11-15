import json
from bson import json_util
from flask import Flask
from databas import Connect

app = Flask(__name__)
con = Connect()


def json_parse(dane):
    return json.loads(json_util.dumps(dane))


@app.route('/products', methods=['GET'])
def products():
    produkty = con.select_products()

    return json_parse(produkty)


@app.route('/users', methods=['GET'])
def users():
    uzytkownicy = con.select_users()

    return json_parse(uzytkownicy)


app.run()
