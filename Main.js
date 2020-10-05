
var shoppingModule = angular.module("shoppingList", []);

shoppingModule.controller("ShoppingController", function($scope)
{
    $scope.shoppingCarts = ProductDataConsolidator.getProducts();
    $scope.prodTypes = Util.getProdTypes();

    $scope.newProduct = function()
	{
		$scope.showAddForm = true;
		$scope.prodName = "";
		$scope.prodPrice = "";
		$scope.prodType = "";
	}

    $scope.backToMainPage = function()
	{
		$scope.showAddForm = false;
		$scope.showEditForm = false;
	}

	$scope.saveProduct = function()
	{
		if($scope.showAddForm)
		{
			var count = $scope.shoppingCarts.length;
			console.log("Length " + length);
			$scope.shoppingCarts.push({"id": count + 1, "name": $scope.prodName, "price": $scope.prodPrice, "type" : $scope.prodType.Name});
		    $scope.showAddForm = false;
	    }
	}

    $scope.updateProduct = function()
	{
	    if($scope.showEditForm)
	    {
	    	$scope.shoppingCarts.splice($scope.editIndex, 1);
	        $scope.shoppingCarts.splice($scope.editIndex, 0,
	        	{"id": $scope.prodInfo.id, "name": $scope.prodInfo.name, "price": $scope.prodInfo.price, "type" : $scope.prodInfo.type.Name});
	    	$scope.showEditForm = false;
	    }
	}

	$scope.removeProduct = function (x) 
	{
    	$scope.shoppingCarts.splice(x, 1);
    }

    $scope.editProduct = function (x) {
    	 $scope.showEditForm = true;
    	 $scope.editIndex= x;

    	 console.log("Index = " + x);
    	 console.log($scope.shoppingCarts[x].name);
    	 console.log($scope.shoppingCarts[x].price);
    	 console.log($scope.shoppingCarts[x].type);

         var item = $scope.prodTypes.find(item => item.Name === $scope.shoppingCarts[x].type);
    	 $scope.prodInfo = { "id" : $scope.shoppingCarts[x].id,
    	 	                "name" : $scope.shoppingCarts[x].name ,
    	                    "price":  $scope.shoppingCarts[x].price,
    	                    "type" : item};

    	 $scope.showAddForm = false;
    }
});

