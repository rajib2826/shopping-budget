
document.getElementById('btn-kitkat').addEventListener('click', function(){
    const quantity = inputFieldValue('kitkat-quantity');
    const kitkatCost = quantity * 200 ;
    // console.log(kitkatCost);
    setInnerText('chocolate', kitkatCost) ;
    document.getElementById('kitkat-quantity').value = '';
    total();
    
})

document.getElementById('btn-rose').addEventListener('click', function(){
    const quantity = inputFieldValue('rose-quantity');
    const roseCost = quantity * 100;
    // console.log(roseCost);
    setInnerText('rose', roseCost);
    document.getElementById('rose-quantity').value = '';
    total();
})
document.getElementById('btn-diary').addEventListener('click', function(){
    const quantity = inputFieldValue('diary-quantity');
    const diaryCost = quantity * 100;
    // console.log(roseCost);
    setInnerText('diary', diaryCost);
    document.getElementById('diary-quantity').value = '';
    total();
})

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function inputFieldValue(id){
  const value = document.getElementById(id).value;
  return parseFloat(value);
}

function total(params){
    const chocolate = document.getElementById('chocolate').innerText;
    const rose = document.getElementById('rose').innerText;
    const diary = document.getElementById('diary').innerText;
    const totalSum =parseFloat(chocolate)  + parseFloat(rose) + parseFloat(diary);
    // document.getElementById('total').innerText = totalSum;
    setInnerText('total', totalSum);
}

document.getElementById('btn-apply').addEventListener('click', function(){
    const promoCode =inputFieldValue('promo-code');
    
    if(promoCode == 1000){
        const total = document.getElementById('total').innerText;
        const sum = total - parseInt(total) * 0.3;
        setInnerText('all-cost', sum); 
        document.getElementById('promo-code').value = '';
    }
    else{
        alert("Wrong Prome Code again with valide code");
        document.getElementById('promo-code').value = '';
    }
});