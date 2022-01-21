let nextBtn = document.querySelectorAll('.next');
let backBtn = document.querySelectorAll(".back");
let q1 = document.querySelector("#Q1");
let q2 = document.querySelector("#Q2");
let q3 = document.querySelector("#Q3");
let q1Correct = document.querySelector('#q1-correct')
let q2Correct = document.querySelector('#q2-correct')
let q3Correct = document.querySelector('#q3-correct')
let results = document.querySelector(".results");
let btnResult = document.querySelector('.btn-result');
let result1 = document.querySelector('#result-1')
let result2 = document.querySelector('#result-2')
let result3 = document.querySelector('#result-3')
let optionsQ1 = document.querySelectorAll('.optionQ1');
let optionsQ2 = document.querySelectorAll('.optionQ2');
let optionsQ3 = document.querySelectorAll('.optionQ3');


// check if any option is checked
function checkedRadioBtn(options) {
    for (let option of options) {
        if (option.checked) {
            return true;
        }
    }
}


let activeQ = document.querySelector('.active-card');
for (let btn of nextBtn) {
    btn.addEventListener('click', function () {


        if (q1.classList.contains('active-card')) {
            if (checkedRadioBtn(optionsQ1)) {
                q1.classList.remove('active-card');
                q2.classList.add("active-card");
                if (q1Correct.checked) {
                    result1.textContent = "Your anwer to Question 1 was RIGHT!"
                } else {
                    result1.textContent = "Your anwer to Question 1 was WRONG!"
                }
            } else {
                alert("you havent selected any option")
            };

        } else if (q2.classList.contains('active-card')) {
            if (checkedRadioBtn(optionsQ2)) {
                q2.classList.remove('active-card');
                q3.classList.add("active-card");
                if (q2Correct.checked) {
                    result2.textContent = "Your anwer to Question 2 was RIGHT!"
                } else {
                    result2.textContent = "Your anwer to Question 2 was WRONG!"
                }
            } else {
                alert("you havent selected any option")
            }
        }


    }
    )

}

for (let btn of backBtn) {
    btn.addEventListener('click', function () {
        if (q2.classList.contains('active-card')) {
            q2.classList.remove('active-card');
            q1.classList.add("active-card")
        } else if (q3.classList.contains('active-card')) {
            q3.classList.remove('active-card');
            q2.classList.add("active-card")
        } else { }
    })
}

btnResult.addEventListener('click', function () {
    if (checkedRadioBtn(optionsQ3)) {
        q3.classList.remove('active-card');
        results.classList.add('active-card');
        if (q3Correct.checked) {
            result3.textContent = "Your anwer to Question 3 was RIGHT!"
        } else {
            result3.textContent = "Your anwer to Question 3 was WRONG!"
        }
    } else {
        alert("you havent selected any option")
    }
})




