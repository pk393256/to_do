let id=JSON.parse(localStorage.getItem('id'));
// console.log(id.type)
let change=document.getElementById('btn');
let del=document.getElementById('delete');
change.addEventListener('click',edit);
del.addEventListener('click',remove);
let uri='http://localhost:3000/task';
async function edit(){
    uri=uri+'/'+id;
    // console.log(uri);
    const radioButtons = document.querySelectorAll('input[name="box"]');
    let selecteOption;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selecteOption = radioButton.value;
            break;
        }
    }
if(selecteOption==undefined){
    let res=await fetch(uri,{
        method:'PATCH',
        body:JSON.stringify({
            title:document.getElementById('changeName').value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    
}
else{
    let res=await fetch(uri,{
        method:'PATCH',
        body:JSON.stringify({
            title:document.getElementById('changeName').value,
            status:selecteOption,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    
}

}
async function remove(){
    uri=uri+'/'+id;
    let res=await fetch(uri,{
        method:'DELETE'
        
    })
    window.location.href='/TodoList_JSON_Server/index.html';
    localStorage.removeItem('id');
}