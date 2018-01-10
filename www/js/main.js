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
    $(document).on('click', '.num', function() {
      currentValue += $(this).data('num');
    });
    $(document).on('click', '.ops', function() {
      that.mathArray.push(currentValue);
      if ($(this).data('ops') == "times") {
        that.mathArray.push('*');
      } else if ($(this).data('ops') == "divided") {
        that.mathArray.push('/');
      } else if ($(this).data('ops') == "minus") {
        that.mathArray.push('-');
      } else if ($(this).data('ops') == "plus") {
        that.mathArray.push('+');
      }
      currentValue = "";
    });
  }

}

let calc = new Calculator();
