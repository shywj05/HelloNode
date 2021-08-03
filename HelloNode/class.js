class Animal{
	
	constructor(){
		this.age = 0;
	}
	
	getOlder(){
		this.age++;
	}
	
	
}

class Human extends Animal{
	constructor(){
		super()
		this.power_lang = 1;
	}
	
	learn_lang(){
		this.power_lang++;
	}
	personal_lang(power){
		this.power_lang += power;
	}
	
}


var hum = new Human();
console.log(hum.power_lang)
hum.personal_lang(100);
console.log(hum.power_lang)
