// male & female butto click function..............

let maleBtn = document.getElementById('male-btn')
let femaleBtn = document.getElementById('female-btn')

maleBtn.addEventListener('click', function() {
    document.getElementById('display').classList.remove('display-female');
    document.getElementById('display').classList.add('display-male');
});

femaleBtn.addEventListener('click', function() {
    document.getElementById('display').classList.remove('display-male');
    document.getElementById('display').classList.add('display-female');
});

// male BMI calculation..................

let maleHeight = document.querySelector('.maleBMI .height')
let maleWeight = document.querySelector('.maleBMI .weight')
let maleHeightError = document.querySelector('.maleBMI .hError')
let maleWeightError = document.querySelector('.maleBMI .wError')
let calculateBtn1 = document.querySelector('.maleBMI .calculateBtn')
let maleResult = document.querySelector('.maleBMI .result')
let maleDescription = document.querySelector('.maleBMI .description')


calculateBtn1.addEventListener("click", function() {
    if (maleHeight.value == "") {
        maleHeightError.innerHTML = "Please enter your Height!"
    }else{
        maleHeightError.innerHTML = ""
    }
    if (maleWeight.value == "") {
        maleWeightError.innerHTML = "Please enter your Weight!"
    }else{
        maleWeightError.innerHTML = ""
    }

    if (maleHeight.value != "" && maleWeight.value != "") {

        let maleBMI = 703 * ((maleWeight.value * 2.20462) / (maleHeight.value **2))
        maleResult.value = maleBMI.toFixed(2)

        if (maleBMI >= 18.5 && maleBMI <= 24.9) {
            maleDescription.innerHTML = "Description : PERFECT"
        }else if (maleBMI < 18.5) {
            maleDescription.innerHTML = "Description : UNDER WEIGHT"
        }else {
            maleDescription.innerHTML = "Description : OVER WEIGHT"
        }
    }
})



// male BMI calculation..................

let femaleHeight = document.querySelector('.femaleBMI .height')
let femaleWeight = document.querySelector('.femaleBMI .weight')
let femaleHeightError = document.querySelector('.femaleBMI .hError')
let femaleWeightError = document.querySelector('.femaleBMI .wError')
let calculateBtn2 = document.querySelector('.femaleBMI .calculateBtn')
let femaleResult = document.querySelector('.femaleBMI .result')
let femaleDescription = document.querySelector('.femaleBMI .description')


calculateBtn2.addEventListener("click", function() {
    if (femaleHeight.value == "") {
        femaleHeightError.innerHTML = "Please enter your Height!"
    }else{
        femaleHeightError.innerHTML = ""
    }
    if (femaleWeight.value == "") {
        femaleWeightError.innerHTML = "Please enter your Weight!"
    }else{
        femaleWeightError.innerHTML = ""
    }

    if (femaleHeight.value != "" && femaleWeight.value != "") {

        let femaleBMI = 703 * ((femaleWeight.value * 2.20462) / (femaleHeight.value **2))
        femaleResult.value = femaleBMI.toFixed(2)

        if (femaleBMI >= 18.5 && femaleBMI <= 24.9) {
            femaleDescription.innerHTML = "Description : PERFECT"
        }else if (femaleBMI < 18.5) {
            femaleDescription.innerHTML = "Description : UNDER WEIGHT"
        }else {
            femaleDescription.innerHTML = "Description : OVER WEIGHT"
        }
    }
})


