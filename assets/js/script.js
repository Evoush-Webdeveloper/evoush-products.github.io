const url = 'https://evoush-mock-api.herokuapp.com/products'


allproduct(url)
.then(res => {
	const products = res.data.slice().reverse()
	const firsts = products.slice(0, 5)
	const seconds = products.slice(4, 9)
	const thirds = products.slice(9, 13)

	firsts.map(first => {
		// console.log(first)
		FirstProduct(first)
	})

	seconds.map(second => {
		SecondProduct(second)
	})

	thirds.map(third => {
		ThirdProduct(third)
	})

})
.catch(err => {
	console.log(err)
})