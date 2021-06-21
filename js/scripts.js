

function resultado (num1, num2, num3, n1, n2, n3, cum1, cum2, cum3, c1, c2, c3, bum1, bum2, bum3, b1, b2, b3) {
    
  
    let xv1 = parseInt(n1.value);
    let xv2 = parseInt(n2.value);
    let xv3 = parseInt(n3.value);

    let xvalor1 = parseInt(num1.value);
    let xvalor2 = parseInt(num2.value);
    let xvalor3 = parseInt(num3.value);

    
    xvalor1=18 * xv1;
    xvalor2=20 * xv2;
    xvalor3=22 * xv3;

    let resultado1 = xvalor1 + xvalor2 + xvalor3;

    let cv1 = parseInt(c1.value);
    let cv2 = parseInt(c2.value);
    let cv3 = parseInt(c3.value);

    let cvalor1 = parseInt(cum1.value);
    let cvalor2 = parseInt(cum2.value);
    let cvalor3 = parseInt(cum3.value);

    
    cvalor1=30 * xv1;
    cvalor2=50 * xv2;
    cvalor3=80 * xv3;

    let resultado2 = cvalor1 + cvalor2 + cvalor3;

    let bv1 = parseInt(b1.value);
    let bv2 = parseInt(b2.value);
    let bv3 = parseInt(b3.value);

    let bvalor1 = parseInt(bum1.value);
    let bvalor2 = parseInt(bum2.value);
    let bvalor3 = parseInt(bum3.value);

    
    bvalor1=5 * bv1;
    bvalor2=8 * bv2;
    bvalor3=10 * bv3;

    let resultado3 = bvalor1 + bvalor2 + bvalor3;




let resultado  = resultado1 + resultado2 + resultado3;
     document.getElementById('display').value = resultado
}


