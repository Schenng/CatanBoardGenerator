 var app = angular.module('CatanBoardGenerator', []);

	app.controller('MainController', function($scope) {
	 	
	 	//Game Config
	 	$scope.game = {
	 		type: 'normal',
	 		tiles: [],
	 		name: "Board"
	 	}

	 	//Tokens
	 	$scope.normalTokens = {
	 		'A': 5,
	 		'B': 2,
	 		'C': 6,
	 		'D': 8,
	 		'E': 3,
	 		'F': 10,
	 		'G': 9,
	 		'H': 12,
	 		'I': 11,
	 		'J': 4,
	 		'K': 8,
	 		'L': 10,
	 		'M': 9,
	 		'N': 4,
	 		'O': 5,
	 		'P': 6,
	 		'Q': 3,
	 		'R': 11,
	 	}
	 	$scope.expansionTokens = {
	 		'A': 2,
	 		'B': 5,
	 		'C': 4,
	 		'D': 6,
	 		'E': 3,
	 		'F': 9,
	 		'G': 8,
	 		'H': 11,
	 		'I': 11,
	 		'J': 10,
	 		'K': 6,
	 		'L': 3,
	 		'M': 8,
	 		'N': 4,
	 		'O': 8,
	 		'P': 10,
	 		'Q': 11,
	 		'R': 12,
	 		'T': 5,
	 		'V': 9,
	 		'W': 5,
	 		'X': 9,
	 		'Y': 12,
	 		'Za': 3,
	 		'Zb': 2,
	 		'Zc': 6,
	 	}

	 	$scope.generateTiles = function() {
	 		console.log("**** Generate Tiles ****");
	 		if($scope.game.type == 'normal') {
	 			$scope.addTile(4,'wood');
	 			$scope.addTile(4,'sheep');
	 			$scope.addTile(4,'wheat');
	 			$scope.addTile(3,'ore');
	 			$scope.addTile(3,'brick');
	 			$scope.addTile(1,'desert');

	 			$scope.scrambleTiles();

	 			console.log($scope.game);
	 		}
	 		else if ($scope.game.type == 'expansion'){

	 		}
	 		else {

	 		}

	 		$scope.setTiles();
	 	}

	 	$scope.setTiles = function() {
	 		console.log("**** setTiles ****");
	 		for (tile in $scope.game.tiles) {
	 			var tileElement = angular.element( document.querySelector('#tile'+tile) );

	 			if($scope.game.tiles[tile].resource == "wheat"){
	 				tileElement.css('background-color','#FF9800'); 
	 			}
	 			else if($scope.game.tiles[tile].resource == "brick"){
	 				tileElement.css('background-color','#F44336'); 
	 			}
	 			else if($scope.game.tiles[tile].resource == "wood"){
	 				tileElement.css('background-color','#795548'); 
	 			}
	 			else if($scope.game.tiles[tile].resource == "sheep"){
	 				tileElement.css('background-color','#4CAF50'); 
	 			}
	 			else if($scope.game.tiles[tile].resource == "ore"){
	 				tileElement.css('background-color','#607D8B'); 
	 			}
	 			else if($scope.game.tiles[tile].resource == "desert"){
	 				tileElement.css('background-color','#FFF176'); 
	 			}
	 			else {
	 				console.log("Error");
	 			}
	 		}
	 	}

	 	$scope.addTile = function(count,resource) {
	 		for (var x = 0;x<count;x++) {
	 			$scope.game.tiles.push({'resource':resource});
	 		}
	 	}

	 	$scope.scrambleTiles = function() {
	 		console.log("**** Scramble Tiles ****")
		    for (var i = $scope.game.tiles.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = $scope.game.tiles[i];
		        $scope.game.tiles[i] = $scope.game.tiles[j];
		        $scope.game.tiles[j] = temp;
		    }
	 	}

	 	$scope.generatePDF = function () {
	 		console.log("**** Generate PDF ****");
	 		html2canvas(document.getElementById('exportDiv'), {
	            onrendered: function (canvas) {
	                var data = canvas.toDataURL();
	                var docDefinition = {
	                    content: [{
	                        image: data,
	                        width: 500,
	                    }]
	                };
	                pdfMake.createPdf(docDefinition).download($scope.game.name);
	            }
	        });	
	 	}
	 	

	 

	$scope.generateTiles();
	});
