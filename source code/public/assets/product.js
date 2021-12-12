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
    const partImages = document.querySelector('.partImages').files;
    const totalImages = document.querySelector('.totalImages').files;
    
    try {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', price)
        formData.append('color', color)
        formData.append('design', design)
        formData.append('material', material)
        formData.append('category', category)
        for (let image of partImages) {
            formData.append('partImages', image)
        }
        for (let image of totalImages) {
            formData.append('totalImages', image)
        }
        const response = await fetch('/products/create' , {
            method: 'POST',
            body: formData
        })
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }

})
//req.files
// [Object: null prototype] {
//     partImages: [
//         {
//           fieldname: 'partImages',
//           originalname: '20181223_200223.jpg',
//           encoding: '7bit',
//           mimetype: 'image/jpeg',
//           destination: 'C:\\Users\\junsb\\OneDrive\\바탕 화면\\Arrt`emis web Project\\source code\\public\\images\\productImage',
//           filename: '20181223_200223.jpg',
//           path: 'C:\\Users\\junsb\\OneDrive\\바탕 화면\\Arrt`emis web Project\\source code\\public\\images\\productImage\\20181223_200223.jpg',
//           size: 671039
//         }
//       ],
//       totalImages: [
//         {
//           fieldname: 'totalImages',
//           originalname: '20181223_200223.jpg',
//           encoding: '7bit',
//           mimetype: 'image/jpeg',
//           destination: 'C:\\Users\\junsb\\OneDrive\\바탕 화면\\Arrt`emis web Project\\source code\\public\\images\\productImage',
//           filename: '20181223_200223.jpg',
//           path: 'C:\\Users\\junsb\\OneDrive\\바탕 화면\\Arrt`emis web Project\\source code\\public\\images\\productImage\\20181223_200223.jpg',
//           size: 671039
//         }
//       ]
//     }

//req.body
//     [Object: null prototype] {
//       product_name: 'landing hoodie',
//       product_color: 'rust black',
//       product_design: 'front logo',
//       product_material: 'cotton 100%',
//       product_price: '500',
//       product_category: 'top'
//     }