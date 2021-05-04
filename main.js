// //VARIABLES
// let input = document.getElementById('table-input');
// input.addEventListener('keyup', filterProducts);

// function filterProducts(){
//     let input = document.getElementById('table-input');
//     let filter = input.value.toUpperCase();
//     let table = document.getElementById('table');
//     let tr = table.getElementsByTagName('tr');

//     for(let i = 0; i < tr.length; i++){
//         let td = tr[i].getElementsByTagName('td')[0];
//         let td2 = tr[i].getElementsByTagName('td')[1];
//         if(td){
//             let textValue = td.innerHTML ||td.textContent;
//             if(textValue.toUpperCase().indexOf(filter)> -1){
//                 tr[i].style.display = '';
//             }else{
//                 tr[i].style.display = 'none';
//             }
//         }
//     }
// }

// let filterInput = document.getElementById('table-input');
// filterInput.addEventListener('keyup', filterProducts);
// const login = document.getElementById('login').addEventListener('click', function(){
//     window.open('login.html','popup','width=801,height=800');
//     return false;
// });

//HAMBUGER MENU
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})     


//FUNCTIONS
//filter
function filterProducts(){
    //get value of input
    let filterValue = document.getElementById('table-input').value.toUpperCase();

//get table data
    let tableData = document.getElementById('tables');
    let data = tableData.querySelectorAll('table');
    for(let i = 0; i < data.length; i++){
        let a = data[i].getElementsByTagName('caption')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            data[i].style.display = '';

        } else{
            data[i].style.display = 'none';
        }
    }

    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');
    for(let j = 0; j < tr.length; j++){
        let td = tr[j].getElementsByTagName('td')[0];
        if(td){
            let textValue = td.innerHTML || td.textContent;
            if(textValue.toUpperCase().indexOf(filterValue) > -1){
                tr[j].style.display = '';
            }else{
                tr[j].style.display = 'none';
            }
        }
    }
}
