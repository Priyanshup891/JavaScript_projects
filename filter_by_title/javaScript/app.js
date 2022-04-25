const filterTShirtInput = document.getElementById('filter-tshirt');

filterTShirtInput.addEventListener('keyup', filterTShirt);

function filterTShirt(){
    const tshirtInputValue = filterTShirtInput.value.toUpperCase();
    const tshirt = document.querySelectorAll('.tshirt');

    for(let i = 0; i < tshirt.length; i++){
        let span = tshirt[i].getElementsByTagName('span')[0];

        if(span.innerHTML.toUpperCase().indexOf(tshirtInputValue) > -1){
            tshirt[i].style.display = '';
        } else {
            tshirt[i].style.display = 'none';
        }
    }
}