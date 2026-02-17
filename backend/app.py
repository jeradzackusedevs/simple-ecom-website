from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
  {
    "id": 1,
    "name": "Black Hoodie",
    "price": 49.99,
    "image": "https://shopproclub.com/media/catalog/product/cache/61eed81046a68439fa526f0fb7e1517f/2/0/2022-04-13_mo_ecom_cotton_nylon3330.jpg",
    "description": "Premium heavyweight hoodie",
    "sizes": ["Small", "Medium", "Large", "Xtra Large"]
  },
  {
    "id": 2,
    "name": "Street Tee",
    "price": 29.99,
    "image": "https://epiphanythelabel.com/cdn/shop/files/Pray_More_2048x.png?v=1722497589",
    "description": "Soft cotton streetwear tee",
    "sizes": ["Small", "Medium", "Large"]
  },
  {
    "id": 3,
    "name": "Snapback hat",
    "price": 24.99,
    "image": "https://www.carsupplieswarehouse.com/cdn/shop/files/Opticle_Black_and_White_Snapback_Hat_with_White_and_Black_Piping.png?v=1734226711",
    "description": "Adjustable Snapback",
    "sizes": ["One Size fits all"]
  }
]

@app.route("/products")
def get_products():
  return jsonify(products)

from flask import request

@app.route("/contact", methods=["POST"])
def contact():
  data = request.json
  print("New message:")
  print("Name:", data["name"])
  print("Email:", data["email"])
  print("Message:", data["message"])
  return {"status": "Message recieved"}

if __name__ == "__main__":
  app.run(debug=True)