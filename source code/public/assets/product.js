const colorAddBtn = document.querySelector('.product_color_add');
const designAddBtn = document.querySelector('.product_design_add');
const materialAddBtn = document.querySelector('.product_material_add');

const productForm = document.querySelector('.product_form');

const addItem = (inputClass, listClass) => {
    const input = document.querySelector(`.${inputClass}`);
    const value = input.value;
    const name = input.name;
    const li = document.createElement("li");
    li.setAttribute('class', `${name}_list_item`);
    const textNode = document.createTextNode(value);
    li.appendChild(textNode);
    document.querySelector(`.${listClass}`).appendChild(li)
}

const pushItem = (name, array) => {
    for (let i of document.querySelectorAll(`${name}`)) {
        array.push(i.innerText)
    }
}

colorAddBtn.addEventListener('click', () => {
    addItem('product_color', 'product_color_list')
})

designAddBtn.addEventListener('click', () => {
    addItem('product_design', 'product_design_list')
})

materialAddBtn.addEventListener('click', () => {
    addItem('product_material', 'product_material_list')
})


productForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    let colorArr = [];
    let designArr = [];
    let materialArr = [];
    pushItem('.product_color_list_item', colorArr);
    pushItem('.product_design_list_item', designArr);
    pushItem('.product_material_list_item', materialArr);

    const name = document.querySelector('.product_name').value;
    const price = Number(document.querySelector('.product_price').value);
    const color = colorArr;
    const design = designArr;
    const material = materialArr;
    const category = document.querySelector('#product_category').value;
    const images = document.querySelector('.product_images').files;

    const formData = new FormData();
    formData.append('name', name)
    formData.append('price', price)
    formData.append('color', color)
    formData.append('design', design)
    formData.append('material', material)
    formData.append('category', category)
    for (let image of images) {
        formData.append('images', image)
    }

    try {
        const response = await fetch('/products/create' , {
            method: 'POST',
            body: formData
        })
        const json = await response.json()
    } catch (error) {
        console.log(error)
    }

})