describe('Functional programming', function(){

	var list3 = [3, 6, 12, 24, 36, 39, 51, 63];
	var list5 = [5, 15, 30, 40, 45, 55, 105];

	it('with mapping', function(){
		// use .map function on arrays to make tests pass
		// define multiplyBy3 and multiplyBy5 functions
		// and use them along with .map

		// code should look like: collection.map(fn)

		var multiplyBy3;
		var multiplyBy5;
		var list3times3;
		var list5times5;

		expect(typeof multiplyBy3).toEqual("function");
		expect(multiplyBy3.length).toEqual(1);
		expect(multiplyBy3(3)).toEqual(9);
		expect(typeof multiplyBy5).toEqual("function");
		expect(multiplyBy5.length).toEqual(1);
		expect(multiplyBy5(5)).toEqual(25);
		expect(list3times3).toEqual([9, 18, 36, 72, 108, 117, 153, 189]);
		expect(list5times5).toEqual([25, 75, 150, 200, 225, 275, 525]);
	});

	it('with filtering', function(){
		// reuse functions from previous exercise

		// reuse multiplyBy3 and multiplyBy5 functions from above within .map
		// additionally, define isEven function that returns boolean whether a number is even
		// use it to filter only even numbers (remainder of dividing by 2 is 0) from result arrays

		// code should look like: collection.map(fn).filter(fn)

		var multiplyBy3; // reuse
		var multiplyBy5; // reuse
		var isEven;
		var list3times3filteredEven;
		var list5times5filteredEven;

		expect(typeof isEven).toEqual("function");
		expect(isEven.length).toEqual(1);
		expect(isEven(2016)).toEqual(true);
		expect(isEven(2017)).toEqual(false);
		expect(list3times3filteredEven).toEqual([18, 36, 72, 108]);
		expect(list5times5filteredEven).toEqual([150, 200]);
	});

	it('with reducing', function(){
		// again, reuse functions from previous exercise
		// reuse multiplyBy3, multiplyBy5 and isEven functions from above
		// additionally, define sum function that will reduce a list into a single value
		// use the sum function to sum the lists of multiplied-and-then-filtered elements

		// code should look like: collection.map(fn).filter(fn).reduce(fn)

		var multiplyBy3; // reuse
		var multiplyBy5; // reuse
		var isEven; // reuse
		var sum;
		var list3times3filteredEvenSum;
		var list5times5filteredEvenSum;

		expect(typeof sum).toEqual("function");
		expect(sum.length).toEqual(2);
		expect(sum(2016, 2017)).toEqual(4033);
		expect(list3times3filteredEvenSum).toEqual(234);
		expect(list5times5filteredEvenSum).toEqual(350);
	});

	it('sequentially processing via function pipe', function(){
		// start - is a starting value
		// operations - is a sequence of operations, output of step n is an input of step n+1
		// write the execute function which accepts function sequence and the starting value
		// and returns the value processed by piping via function sequence

		// don't use FOR loops, use functional programming

		// function execute...

		var start = 2;
		var operations = [
			function(a){ return 8 * a - 10; },
			function(a){ return (a - 3) * (a - 3) * (a - 3); },
			function(a){ return a * a + 4; },
			function(a){ return a % 5; }
		];
		var result = execute(operations, start);
		expect(result).toEqual(3);
	});
});
