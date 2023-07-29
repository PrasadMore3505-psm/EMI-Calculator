emicalculation = () => {
    let p = document.getElementById('p').value;
    let r = document.getElementById('r').value;
    let i = document.getElementById('i').value;

    const interest = (p * (r * 0.01)) / i;
    let payment = ((p / i) + interest).toFixed(2);
    
    let result = document.getElementById('result').innerText = "EMI is "+payment;

    let pi=document.getElementById('p');
    let ri=document.getElementById('r');
    let it=document.getElementById('i');

        pi.value="";
        ri.value="";
        it.value="";
}


