describe('Object', function(){

	describe('constructors', function(){
		// define your answers to make tests pass

		it('can be used to produce objects', function(){
			function Person(first, last, age){
				this.first = first;
				this.last = last;
				if (age){
					this.age = age;
				}
			}
			Person.prototype.age = 18;

			var paul = new Person("Paul", "McCartney");
			var john = new Person("John", "Lennon", 40);

			expect(paul.age).toEqual( /* YOUR ANSWER HERE */ );
			expect(john.age).toEqual( /* YOUR ANSWER HERE */ );

			Person.prototype.age = 23;

			expect(paul.age).toEqual( /* YOUR ANSWER HERE */ );
			expect(john.age).toEqual( /* YOUR ANSWER HERE */ );
		});
	});

	describe('cloning', function(){
		function assertEqualUserObjectFields(src, dest){
			['id', 'nationality', 'name', 'email', 'phone'].forEach(function(key){
				expect(src[key] === dest[key]).toEqual(true);
			});
		}

		it('can be cloned with shallowClone operation', function(){
            // implement shallowClone operation
            // which recreates top-level of a data structure

			function shallowClone(data){
				//...
			}

			var users = db.getUsers();
			var clonedUsers = shallowClone(users);
			expect(users === clonedUsers).toEqual(false);
			expect(users == clonedUsers).toEqual(false);
			assertEqualUserObjectFields(users[0], clonedUsers[0]);
			assertEqualUserObjectFields(users[50], clonedUsers[50]);
			assertEqualUserObjectFields(users[100], clonedUsers[100]);
		});

		it('can be cloned with deepClone operation', function(){
            // implement deepClone operation
            // which recreates all (top and each nested) levels of a data structure

			function deepClone(data){
				//...
			}

			var users = db.getUsers();
			var clonedUsers = deepClone(users);
			expect(users == clonedUsers).toEqual(false);
			expect(users === clonedUsers).toEqual(false);
			expect(users[0] === clonedUsers[0]).toEqual(false);
			assertEqualUserObjectFields(users[0], clonedUsers[0]);
			expect(users[0] === clonedUsers[0]).toEqual(false);
			assertEqualUserObjectFields(users[50], clonedUsers[50]);
			expect(users[50] === clonedUsers[50]).toEqual(false);
			assertEqualUserObjectFields(users[100], clonedUsers[100]);
			expect(users[100] === clonedUsers[100]).toEqual(false);
		});
	});

});
