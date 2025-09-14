const addToLocalStorage = () => {
    const idInput = document.getElementById('strorage_id');
    const id = idInput.value;
    const valueInput = document.getElementById('strorage_value');
    const value = valueInput.value;


    //
    if (id && value) {
    localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}