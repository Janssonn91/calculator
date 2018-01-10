class Calculator {
	constructor(){
		this.display = "0";
		this.render();
	}

	render() {
		$('.viewer').empty().append(this.display);
	}

}

let calc = new Calculator();
