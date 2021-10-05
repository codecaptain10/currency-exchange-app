/*Testing Version to functionality */
const valueInput = document.querySelector('.howMuchFrom');
const valueOutput = document.querySelector('.howMuchTo');

function updateValue() {
    valueOutput.value = valueInput.value;
}

valueInput.addEventListener('input', function() {
    console.log(valueInput.value);
    valueOutput.value = valueInput.value;

});