(function($) {

$(document).ready(function() {

    var productList = new ProductList();
    productList.render();
    var form = document.forms.createForm;
    var productSelect = form.elements.products;
    var products = productList.get();
    var openModalButton = $('#openModalButton');
    var modal = $('.modal');
    openModalButton.click(function() {
        modal.show();
    });
    modal.find('.close').click(function() {
        modal.hide();
    });
    products.forEach(function(product) {
        productSelect.appendChild(new Option(product['title'], product['id']));
    });

    var submitButton = $('#submitButton');
    submitButton.click(function() {
        var productId = productSelect.value;
        var quantity = form.elements.quantity.value;
        if (productId && quantity)  {
        productList.add(productId, quantity);
        modal.hide();
        productList.render();
        }
    });
});



})(jQuery);














var data = {
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