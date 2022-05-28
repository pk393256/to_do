

const btn = document.querySelector('#add');
const output = document.querySelector('#container2');
let url = 'http://localhost:3000/task'
btn.addEventListener('click', myFun);

async function myFun() {
    // event.preventDefault();
    let input = document.querySelector('#input1').value;
    const radioButtons = document.querySelectorAll('input[name="check"]');
    let selecteOption;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selecteOption = radioButton.value;
            break;
        }
    }
    let res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "title": input,
            "status": selecteOption

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })


}
displayData();
async function displayData() {
    try {

        output.innerHtml = '';
        let res = await fetch(url);
        let data = await res.json();


        data.forEach(e => {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            h3.innerText = e.title;
            if (e.status == 'true') {
                h3.style.color = 'green';
            } else {
                h3.style.color = 'red';
            }
            h3.style.borderColor = "black";
            let button = document.createElement('button');
            button.innerText = 'Edit';
            div.append(h3, button);
            div.style.display = 'flex';
            button.style.height='30px';
            button.style.height='50px';
            // button.style.left='30px';
            button.addEventListener('click',()=>{
                localStorage.setItem('id',JSON.stringify(e.id));
                window.location.href='./edit.html';
            })
            output.append(div);

        })



    } catch (error) {
        console.log(error);
    }

}