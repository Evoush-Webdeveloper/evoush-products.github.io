$(document).ready(function(){
	const navBrand = $('.navbar-brand')
	const brand = $('.brand')
	const main = $('#result')
	const keyAccess = 'EVOUSH.COM'

	navBrand.html(`
		<img src="https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/assets/img/LOGO231.png" class="img-fluid logo-evoush">
	`)
	navBrand.addClass('brand-logo')
	getProduct(keyAccess)
})


function getProduct(keyAccess){
	$.ajax({
		url: `https://evoush-landing-api.herokuapp.com/api/data/evoush/products/${keyAccess}`,
		success: function(res) {
			const products = res.data.data
			ProductView(products)
		}
	})

}

function ProductView(datas){
	datas.map(data => {
		console.log(data)
		main.html(`
			title: ${data.name}
		`)
	})
}