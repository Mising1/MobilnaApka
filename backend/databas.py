import pymongo


class Connect:
    def __init__(self):
        self.client = pymongo.MongoClient('mongodb://localhost:27017/')
        self.myDb = self.client['MobileApp']
        self.products = self.myDb['products']
        self.users = self.myDb['users']

    def select_products(self):
        produkty = []
        for item in self.products.find({}):
            produkty.append({"id": item['_id'], "produkt": item["product"], "cena": item["price"]})

        return produkty

    def select_users(self):
        uzytkownicy = []
        for item in self.users.find({}):
            uzytkownicy.append({"id": item['_id'], "email": item["email"], "password": item["password"]})
        return uzytkownicy


    def close(self):
        self.client.close()
