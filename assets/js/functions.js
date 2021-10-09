const allproduct = async(url) => {
    const products = await fetch(url)
    return products.json()
}

function FirstProduct(first){
    CreateElement('div', first, 'first', '#e397a3')
}

function SecondProduct(second){
    CreateElement('div', second, 'second', '#1c6242')
}

function ThirdProduct(third){
    CreateElement('div', third, 'third', 'salmon')
}


function CreateElement(el, data, dom, color){
    // console.log(data)
    const newEl = document.createElement('div')
    newEl.className='container'
    newEl.innerHTML = `
        <img src="${data.image.url}"/>
        <br>
        <div class="middle" style="background-color:${color};">
			<div class="text">${data.seo.title}</div>
		</div>
    `
    document.getElementById(dom).appendChild(newEl)
}

