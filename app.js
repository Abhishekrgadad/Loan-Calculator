document.getElementById("loan-form").addEventListener("submit",function(e){
    document.getElementById("results").style.display = "none";
        document.getElementById("loading").style.display = "block";
    setTimeout(calculate, 2000);
    e.preventDefault();
});
function calculate(e){
    const amount = document.getElementById("loan_amount");
    const interest = document.getElementById("interest_amount");
    const years = document.getElementById("years");
    const monthlypayment = document.getElementById("monthly_payment");
    const totalpayment = document.getElementById("total_payment");
    const totalinterest = document.getElementById("total_interest");

    const calamount = parseFloat(amount.value);
    const calinterest = parseFloat(interest.value)/ 100 / 12;
    const calyears = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calinterest, calyears);
    const monthly = ( calamount * x * calinterest) / (x-1);
 
    if(isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly * calyears).toFixed(2);
        totalinterest.value = (monthly * calyears - calamount).toFixed(2);

        document.getElementById("results").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }else{
        showAlert("Please Provide the Valid input");
    }
   
     e.preventDefault();

}
function showAlert(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
   const card =  document.querySelector('.card');
   const heading = document.querySelector('.heading');
   card.insertBefore(errorDiv,heading);

   setTimeout(function(){
    document.querySelector(".alert").remove();
    
}, 3000);
}
