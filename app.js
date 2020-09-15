class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card border border-dark text-center mb-4 rounded">
                <div class="card-body row">
                    <div class="col-3">
                        <strong>Name</strong>: ${product.name}
                    </div>
                    <div class="col-3">
                        <strong>Price</strong>: ${product.price}
                    </div>
                    <div class="col-3">
                        <strong>Year</strong>: ${product.year}
                    </div>
                    <div class="col-3">
                        <a href="#" class="btn btn-danger" name="delete"><i class="fas fa-trash"></i></a>             
                    </div>                                 
                </div>
            </div>
        `;

        productList.appendChild(element);
    }

    deleteProduct(element) {
        if (element.name == 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            thisui.showMessage('Product successfully deleted!', 'danger');
        }
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2 text-center`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();

    if (name == '' || price == '' || year == '') {
        return ui.showMessage('Complete fields, please', 'warning');
    }

    ui.addProduct(product)
    ui.resetForm();
    ui.showMessage('Product successfully added!', 'success');

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});