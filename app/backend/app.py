from flask import Flask, jsonify, request
import json
import os

app = Flask(__name__)
DATA_FILE = 'data/products.json'

# Load products from file
def load_products():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, 'r') as f:
        return json.load(f)

# Save products to file
def save_products(products):
    with open(DATA_FILE, 'w') as f:
        json.dump(products, f)

# Get all products
@app.route('/api/products', methods=['GET'])
def get_products():
    products = load_products()
    return jsonify(products)

# Add a new product
@app.route('/api/products', methods=['POST'])
def add_product():
    new_product = request.json
    products = load_products()
    new_product['id'] = len(products) + 1
    products.append(new_product)
    save_products(products)
    return jsonify(new_product), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)