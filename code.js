// let title=document.querySelector('#input1').value;

const btn = document.querySelector('#add');
const output = document.querySelector('#container2');


// console.log(tit)
// const radioButtons = document.querySelectorAll('input[name="check"]');
// btn.addEventListener('click', () => {
//     let selecteOption;
// for (const radioButton of radioButtons) {
//   if (radioButton.checked) {
//     selecteOption = radioButton.value;
//     break;
//   }
// }
// const tit=document.querySelector('#input1').value;
// console.log(tit)
// console.log(selecteOption)
// let newP=document.createElement('h3');
// newP.innerText=tit;
// console.log(newP)
// if(selecteOption==='true'){
//     newP.style.color='green';
// }else{
//     newP.style.color='red';
// }
// console.log(newP)
// output.append(newP);
// });

// let input=document.getElementById('input1').value;
// console.log(input)
let url = 'http://localhost:3000/task'
btn.addEventListener('click', myFun);
output.innerHTML='';
async function myFun() {
    event.preventDefault();
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
    
    displayData();
}
async function displayData(){
    try {
        
        
        let res=await fetch(url);
        let data= await res.json();
        

        data.forEach(e=>{
            let h3=document.createElement('h3');
            h3.innerText=e.title;
            if(e.status=='true'){
                h3.style.color='green';
            }else{
                h3.style.color='red';
            }
            h3.style.borderColor="black";
            output.append(h3);
        })

        

    } catch (error) {
        console.log(error);
    }
   
}