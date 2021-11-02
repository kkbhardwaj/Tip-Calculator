// Increment/Decrement by +/- Button
function tipIncrement() {
  document.getElementById('tipID').stepUp();
}
function tipDecrement() {
  document.getElementById('tipID').stepDown();
}
function peopleIncrement() {
  document.getElementById('peopleID').stepUp();
}
function peopleDecrement() {
  document.getElementById('peopleID').stepDown();
}

class calculateBill{ 
  calculateTipAndTotal() {
      
    const inputBillAmount=parseFloat(document.getElementById('billID').value);
    const inputTipAmount=parseFloat(document.getElementById('tipID').value);
    const inputNoOfPeople=parseFloat(document.getElementById('peopleID').value);
    
    try { // Exception Handling
      //Check if Bill, Tip % and Number of people values are Valid or not
      if((inputBillAmount-inputBillAmount)!=0) throw "Please Enter a valid Amount in Bill"
      if((inputTipAmount-inputTipAmount)!=0) throw "Please Enter a valid value in Tip %"
      if((inputNoOfPeople-inputNoOfPeople)!=0) throw "Please Enter a valid value in No. of people"
      //Check if Bill amount is less than 1
      if(inputBillAmount<=0) throw "Bill Amount cannot be zero or less than zero";
      //Check if Tip % is less than 0 or Greater than 100
      if(inputTipAmount<0) throw "Tip % cannot be less than zero";
      if(inputTipAmount>100) throw "Tip % cannot be greater than 100% ";
      //Check if No. of people is less than 1 or Greater than 9999
      if(inputNoOfPeople<=0) throw "No. of people can not be zero or less than zero";
      if(inputNoOfPeople>9999) throw "No. of people can not be Greater than 9999";
      //Check if No. of people is a decimal 
      if((inputNoOfPeople+inputNoOfPeople)%2!=0) throw "No. of people cannot be decimal";
    }
    catch(err) {
      alert(err);  //Alert Exception
      return;
    }
    
    // Calculation for Tip per perople Amount
    const totalTipAmount=(inputBillAmount*inputTipAmount)/100;
    const tipPerPeople=totalTipAmount/inputNoOfPeople;
    
    // Display Tip per people Amount
    document.getElementById("tipOutputID").innerHTML="$"+(tipPerPeople.toFixed(2));
    var x = document.getElementById("tipOutputID");  
    x.style.fontSize = "35px"; 
        
    // Calculation for Total per people Amount
    const totalBillAmount=parseFloat(totalTipAmount)+parseFloat(inputBillAmount);
    const billAmountPerPeople=parseFloat(totalBillAmount/inputNoOfPeople);
    
    // Display Total per people Amount
    document.getElementById("peopleOutputID").innerHTML="$"+(billAmountPerPeople.toFixed(2));
    var y = document.getElementById("peopleOutputID");   
    y.style.fontSize = "50px";
    y.style.fontWeight = "bold";
  }
    
}
// new object for calculateBill class
calBillObj=new calculateBill();
