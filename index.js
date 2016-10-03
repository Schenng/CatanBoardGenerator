 var app = angular.module('CatanBoardGenerator', []);

	app.controller('MainController', function($scope) {
	 	
	 	//Board Configuration
	 	$scope.board = {
	 		key: null,
	 		type: 'normal',
	 	}
	 	//The tokens for a normal 3-4 game
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
	 	//The tokens for the expansion 5-6 game
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

	 	$scope.generateBoard = function () {
	 		console.log('Board',$scope.board);

	 		//Reset the Deck
	 		$scope.deck = [];

	 		//Build Deck
	 		switch ($scope.board.type) {
	 			case 'normal':
	 				$scope.addToDeck(3,'Brick');
				 	$scope.addToDeck(3,'Ore');
				 	$scope.addToDeck(4,'Wood');
				 	$scope.addToDeck(4,'Sheep');
				 	$scope.addToDeck(4,'Wheat');
	 			break;

	 			case 'expansion':
	 				$scope.addToDeck(4,'Brick');
				 	$scope.addToDeck(4,'Ore');
				 	$scope.addToDeck(6,'Wood');
				 	$scope.addToDeck(6,'Sheep');
				 	$scope.addToDeck(6,'Wheat');
	 			break;

	 			default:
	 			break;
	 		}

	 		//Scramble Deck
			$scope.scrambleDeck($scope.board.key);
	 	}

	 	$scope.addToDeck = function (count,resource) {
	 		for (var x = 0; x<count; x++) {
	 			$scope.deck.push(resource);
	 		}
	 	}

	 	$scope.scrambleDeck = function (key) {
	 		console.log('Scramble Key',key);

	 		var j, x, i;
		    for (i = $scope.deck.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = $scope.deck[i - 1];
		        $scope.deck[i - 1] = $scope.deck[j];
		        $scope.deck[j] = x;
		    }
	 	}

	 	

	});
