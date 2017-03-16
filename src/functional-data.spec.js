describe('Processing data', function(){
	// database is defined in data/data.js file

	describe('using for loop', function(){

		it('is possible, yet inconvenient', function(){
			// calculate total amount of bonus
			// given to all users with nationality equal "DE"
			// whose salary is below 5000
			// where bonus equals 20% of the salary
			var users = db.getUsers();

			// use FOR loops
			var totalBonus = 0;
			for (var i = 0; i < users.length; i++){
				var user = users[i];
				if (user.nationality === 'DE' && user.salary < 5000){
					totalBonus += user.salary * 0.2;
				}
			}

			expect(totalBonus).toEqual(13246);
		});

	});

	describe('using functional programming', function(){

		it('is more readable and more convenient', function(){
			// calculate total amount of bonus
			// given to all users with nationality equal "DE"
			// whose salary is below 5000
			// where bonus equals 20% of the salary
			var users = db.getUsers();

			// use functional programming, assign step by step
			var usersDE = users
				.filter(function(user){
					return user.nationality === 'DE';
				});
			var usersWithSalaryLessThan5000 = usersDE
				.filter(function(user){
					return user.salary < 5000;
				});
			var totalBonus = usersWithSalaryLessThan5000
				.map(function(user){
					return user.salary * 0.2;
				}).reduce(function(aggr, bonus){
					return aggr + bonus;
				}, 0);

			expect(usersDE.length).toEqual(39);
			expect(usersWithSalaryLessThan5000.length).toEqual(18);
			expect(totalBonus).toEqual(13246);
		});

		it('is even better using chaining', function(){
			// do the same as above, but don't use intermediate variables
			// process all steps and assign to final variable
			var users = db.getUsers();

			// use functional programming
			var totalBonus = users
				.filter(function(user){
					return user.nationality === 'DE';
				}).filter(function(user){
					return user.salary < 5000;
				}).map(function(user){
					return user.salary * 0.2;
				}).reduce(function(aggr, bonus){
					return aggr + bonus;
				}, 0);

			expect(totalBonus).toEqual(13246);
		});

	});
});
