var ProductList = function() {
    var data = this.getData();
    var products = data['products'];
    products.forEach(function(product) {
        product['quantity'] = 0;
    })
    this.categories = data['categories'];
    this.products = products;
    this.container = $('.product_list');
}




ProductList.prototype.getById = function(id) {
    return this.products.filter(function(product) {
        return product['id'] === id;
    });
}

ProductList.prototype.get = function() {
    return this.products;
}

ProductList.prototype.getCategories = function() {
    return this.categories;
}

ProductList.prototype.add = function(id, quantity) {
    this.products.forEach(function(product) {
        if (product['id'] == id) {
            product['quantity'] += +quantity;
            return product;
        }
    })
};



ProductList.prototype.getByCategory = function(catId) {
    return this.get().filter(function(product) {
        return catId === product['category'];
    })
};

ProductList.prototype.render = function() {
    var categories = this.categories;
    var products = this.products;
    this.container.html('');
    var self = this;
    categories.forEach(function(category) {
        var categoryElem = self.container.append('<h2>' + category['title'] + '</h2>');
        var itemContainer = categoryElem.append('<ul>');
        var productsList = self.getByCategory(category['id']);
        productsList.forEach(function(product) {
            if (product['quantity'] > 0) {
                itemContainer
                .append('<li>' + product['title'] + ' ' + product['quantity'] + 'шт.' + '</li>');
            }
        });
        
    })
};







ProductList.prototype.getData = function() {
    return {
   categories: [
      {
         id: 1,
         title: 'Овощи'
      },
      {
         id: 2,
         title: 'Фрукты'
      },
      {
         id: 3,
         title: 'Молочные продукты'
      },
      {
         id: 4,
         title: 'Мясо'
      }
   ],
   products: [
      {
         id: 1,
         title: 'Картофель',
         category: 1
      },
      {
         id: 2,
         title: 'Творог',
         category: 3,
      },
      {
         id: 3,
         title: 'Говядина',
         category: 4
      },
      {
         id: 4,
         title: 'Томаты',
         category: 1
      },
      {
         id: 5,
         title: 'Апельсины',
         category: 2
      },
      {
         id: 6,
         title: 'Свинина',
         category: 4
      },
      {
         id: 7,
         title: 'Молоко',
         category: 3
      },
      {
         id: 8,
         title: 'Яблоко',
         category: 2
      },
   ]
}
}




