function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length != 13 || isNaN(nid)) {
    return false;
  } else {
	return true;
  }
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (isNaN(num) || num>5) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			let num = (document.getElementById("ticknum").value).trim();
			let selected = (document.getElementById("event").value).trim();
			let price = 0
			if(selected == 1) price = 91.25
			else if(selected == 2) price = 79.88
			else if(selected == 3) price = 83.12
			else price = 100

			let total = price * num
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}