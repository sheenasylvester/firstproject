(function(window){

	'user strict';

	var fullName = "";

	//creates a person initializing firstname, lastname and gender to empty string
	var Person = function(){
		this.firstname = "";
		this.lastname = "";
		this.gender = "";


		//country given private scope within person
		var country = "NoWhere";
		this.getCountry = function(){return country;}
		this.setCountry = function(c){country = c;}
	};


	//prototype allows create methods dynamically in the object
	Person.prototype.setName = function(newFName, newLName){
		this.firstname = newFName;
		this.lastname = newLName;
	}

	Person.prototype.setDetails = function(details){

		if(details.firstname){
			this.firstname = details.firstname;
		}
		if(details.lastname){
			this.lastname = details.lastname;
		}
		if(details.gender){
			this.gender = details.gender;
		}
		if(details.country){
			this.setCountry(details.country);
		}
	};

	Person.prototype.printPerson = function(){
		var str = "";
		str+="Firstname: "+this.firstname;
		str+="Lastname: "+this.lastname;
		str+="Gender: "+this.gender;
		str+="Country: "+this.getCountry();
		return str;
	};

	var p = new Person()
	fn = "Sheena";
	ln = "Syl";
	p.setName(fn, ln);
	window.console.log(JSON.sringify(p));

	var details = {
		"firstname" : "John",
		"lastname" : "Doe",
		"gender" : "Male",
		"country" : "TnT",

	};

	//2nd Example shows use of the set details using the details object
	p2 = new Person()
	p2.setDetails(details);
	console.log(p2.printPerson());


	//console.log(JSON.stringify(Person()));

	var PersonManager = function(){

		this.persons=[]; //create an array to store persons
	};

	PersonManager.prototype.addPerson = function(person){
		if(person instanceof Person){
			window.console.log("Entering Person: "+person.printPerson());
			var id;
				id = this.persons.length;
			this.persons.push(person);
			return id;
		}else{
			window.console.log("No person entered");
		}
	};

	PersonManager.prototype.removePersonById = function(indx){
		if(indx >= 0 && indx < this.persons.length){ //check if id is in valid range
			delete this.person[indx];
			return true;
		}
		return false;
	};

	pManager = new PersonManager();
	pManager.addPerson(p);
	pManager.addPerson(p2);

	window.console.log(pManager.persons.length);
	pManager.removePersonById(0);
	window.console.log(pManager.persons.length);


})(window);