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

  calculate() {
    let allValues = "";
    for (let valAndOps of this.mathArray) {
      allValues += valAndOps;
    }
    let result = eval(allValues);
    this.display = result;
    this.render();
  }

  eventHandler() {
    let that = this;
    let currentValue = "";
    let displayValue = "";
		let operator;
		let last;
    $(document).on('click', '.num', function() {
      currentValue += $(this).data('num');
			that.display = currentValue;
      displayValue = currentValue;
			that.render();
    });

    $('#equals').on('click', function() {
      if (currentValue) {
        that.mathArray.push(currentValue);
        that.calculate()
      }
      currentValue = "";
    });

    $(document).on('click', '.ops', function() {
			if (currentValue) {
      	that.mathArray.push(currentValue);
			}

			operator = $(this).data('ops');
			last = that.mathArray[that.mathArray.length-1];
			console.log(last);
			if ( '+-/*'.includes(last) ){
        that.display.slice(-1);
        that.display += operator;
				that.mathArray[that.mathArray.length-1] = operator;
			} else {
				that.mathArray.push(operator);
			}
			that.display = displayValue + operator;

			currentValue = "";
			that.render();

    });
  }

}

let calc = new Calculator();
