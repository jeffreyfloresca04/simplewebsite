function ProductDataConsolidator() {
}

ProductDataConsolidator.getProducts = function () 
{
	var t = new TShirtRepository().getAll();
    var p = new PhoneCaseRepository().getAll();

	var products = [];
    
    var id = 1;
	for (var i = 0; i < t.length; i++) {
		products.push({
			id: id,
			name: t[i].name,
			price: t[i].price.toFixed(2),
			type: "T-Shirt"
		});

		id+=1;
	}


	for (var i = 0; i < p.length; i++) {
		products.push({
			id: id,
			name: p[i].name,
			price: p[i].price.toFixed(2),
			type: "Phone Case"
		});

		id+=1;
	}

	return products;
}

