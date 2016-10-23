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
	 		'0': 5,
	 		'1': 2,
	 		'2': 6,
	 		'3': 8,
	 		'4': 3,
	 		'5': 10,
	 		'6': 9,
	 		'7': 12,
	 		'8': 11,
	 		'9': 4,
	 		'10': 8,
	 		'11': 10,
	 		'12': 9,
	 		'13': 4,
	 		'14': 5,
	 		'15': 6,
	 		'16': 3,
	 		'17': 11,
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
	 		$scope.token = [];
	 		var tokenCounter = 0;
	 		for (tile in $scope.game.tiles) {

	 			var tileElement = angular.element( document.querySelector('#tile' + tile));

	 			if($scope.game.tiles[tile].resource == "wheat"){
	 				tileElement.css('background-image','url("resources/wheat.png")'); 
	 				$scope.token[tile] = $scope.normalTokens[tokenCounter];
	 			}
	 			else if($scope.game.tiles[tile].resource == "brick"){
	 				tileElement.css('background-image','url("resources/brick.png")'); 
	 				$scope.token[tile] = $scope.normalTokens[tokenCounter];
	 			}
	 			else if($scope.game.tiles[tile].resource == "wood"){
	 				tileElement.css('background-image','url("resources/wood.png")'); 
	 				$scope.token[tile] = $scope.normalTokens[tokenCounter];
	 			}
	 			else if($scope.game.tiles[tile].resource == "sheep"){
	 				tileElement.css('background-image','url("resources/sheep.png")'); 
	 				$scope.token[tile] = $scope.normalTokens[tokenCounter];
	 			}
	 			else if($scope.game.tiles[tile].resource == "ore"){
	 				tileElement.css('background-image','url("resources/ore.png")'); 
	 				$scope.token[tile] = $scope.normalTokens[tokenCounter];
	 			}
	 			else if($scope.game.tiles[tile].resource == "desert"){
	 				tileElement.css('background-image','url("resources/desert.png")'); 
	 				$scope.token[tile] = 'Desert';
	 				tokenCounter = tokenCounter - 1//Do not increment the tile number
	 			}
	 			else {
	 				console.log("Error");
	 			}
	 			tokenCounter++;
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
	 	
	 	$scope.printDiv = function(divName) {
			  var printContents = document.getElementById(divName).innerHTML;
			  var popupWin = window.open('', '_blank', 'width=750px,height=550px');
			  popupWin.document.open();
			  popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/main.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
			  popupWin.document.close();
			} 

	 

	$scope.generateTiles();
	});
