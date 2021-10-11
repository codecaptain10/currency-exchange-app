/*Testing Version to functionality */
const valueInput = document.querySelector('.howMuchFrom');
const valueOutput = document.querySelector('.howMuchTo');

function updateValue() {
    valueOutput.value = valueInput.value;
}

const euro = {
    name: "Euro",
    course: {
        changeTo: {
            euro: 1,
            zloty: 4.15,
            dollar: 2.5,
            pfudn: 3.3
        }
    }
}

valueInput.addEventListener('input', function() {
    console.log(valueInput.value);
    let course = euro.course.changeTo.zloty;
    valueOutput.value = parseInt(valueInput.value) * course;

});