const element = document.getElementById("goto");

document.getElementById('Scroll').addEventListener('click',function(){
    element.scrollIntoView(true);

}) 


const allBtn=document.getElementsByClassName('seat-btn')
let count=0
for (const btn of allBtn) {
    btn.addEventListener('click',function(event){
       if(count<4){
        event.target.setAttribute('disabled',false)
        event.target.style.backgroundColor='#1DD100'
        count++

        seatLeft()
        seatCount()
        totalPrice()
        grandTotal()
       }
      
       
    })
    

}



function seatCount(){
    const seat=document.getElementById('sell-seat-no').innerText
    const value=parseInt(seat)
    document.getElementById('sell-seat-no').innerText=value+1
}

function seatLeft(){
    const left=document.getElementById('current-ticket')
    const value=left.innerText
    const value1=parseInt(value)
    document.getElementById('current-ticket').innerText=value1-1
}
function totalPrice(){
    const totalPrice=document.getElementById('total-cost').innerText
    const value=parseInt(totalPrice)
    document.getElementById('total-cost').innerText=value+550
}

document.getElementById('coupon-code-btn').addEventListener('click', function() {
    grandTotal(true);
 
});

function grandTotal(control) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const couponCode = document.getElementById("coupon-code").value;
    let discount=0
    if (control) {
      if (couponCode == "NEW15") {
         discount = convertedTotal * 0.15;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;
      }
      else if (couponCode == "Couple 20") {
        discount = convertedTotal * 0.2;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;
      }
      else {
        alert("Invalid Coupon Code No Discount");
        return;
      }
    } else {
      document.getElementById("grand-total").innerText = convertedTotal;
    }
  }



  function couponApply(){
    const element=document.getElementById('one')
    element.classList.add('hidden')
}
