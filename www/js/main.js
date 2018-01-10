class Calculator {
	constructor(){
		this.display = "0";
    this.mathArray = [];
		this.render();
    this.eventHandler();
	}

	render() {
		$('.viewer').empty().append(this.display);
	}



  eventHandler() {
    let that = this;
    let currentValue = "";
		let operator;
		let last;
    $(document).on('click', '.num', function() {
      currentValue += $(this).data('num');
			that.display = currentValue;
			that.render();
    });

    $(document).on('click', '.ops', function() {
			if (currentValue) {
      	that.mathArray.push(currentValue);
			}


			operator = $(this).data('ops');
			last = that.mathArray[that.mathArray.length-1];
			console.log(last);
			if ( last == '+' || last ==  '-' || last ==  '*' || last ==  '/' ){
				last = operator;
			} else {
				that.mathArray.push(operator);
			}
			that.display = currentValue + operator;



			currentValue = "";
			that.render();

    });
  }

}

let calc = new Calculator();
