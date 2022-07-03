const balance = document.getElementById('btn1');
const order = document.getElementById('btn2');
const promotion = document.getElementById('btn3');
const delivery = document.getElementById('btn4');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');

// using event listener to change background color for balace btn

balance.addEventListener('click', function onClick(event) {
    box1.style.backgroundColor = '#B5F2ED';
    box2.style.backgroundColor = 'white';
    box3.style.backgroundColor = 'white';
    box4.style.backgroundColor = 'white';
});


// changing oder btn backgroundColor
order.addEventListener('click', function onClick(event) {

    box2.style.backgroundColor = '#04D9C3';
    box1.style.backgroundColor = 'white';
    box3.style.backgroundColor = 'white';
    box4.style.backgroundColor = 'white';


});
// changing promotion btn backgroundColor


promotion.addEventListener('click', function onClick(event) {


    box3.style.backgroundColor = '#04C0C2';
    box2.style.backgroundColor = 'white';
    box1.style.backgroundColor = 'white';
    box4.style.backgroundColor = 'white';


});
// changing delivery btn  backgroundColor
 
delivery.addEventListener('click', function onClick(event) {


    box4.style.backgroundColor = '#77CED8';
    box2.style.backgroundColor = 'white';
    box1.style.backgroundColor = 'white';
    box3.style.backgroundColor = 'white';


});
