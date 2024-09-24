// Data read
// calculate button clicked
document.getElementById('calculate').addEventListener('click', function () {
    // // calculate expense and saving
    const income = inputToValue("income");
    const totalExpenseEle = totalExpense("software", "courses", "internet");
    const remainingBalance = income - totalExpenseEle;
    const software = inputToValue('software');
    const courses = inputToValue('courses');
    const internet = inputToValue('internet');

    // display total expense to result summery
    document.getElementById('total-expenses').innerText = totalExpenseEle.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);

    // error handel
    if (totalExpenseEle > income) {
        return document.getElementById('logic-error').classList.remove('hidden');
    }

    // validation
    // inputValidation('income', 'software', 'courses', 'internet');
    const inputText = document.getElementById('income').value;
    const softwareText = document.getElementById('software').value;
    const coursesText = document.getElementById('courses').value;
    const internetText = document.getElementById('internet').value;

    if (isNaN(inputText) || inputText === '' || inputText < 0) {
        alert('please enter a correct value');
        return;
    }
    else if (isNaN(softwareText) || softwareText === '' || softwareText < 0) {
        return alert('please enter a correct value');
    }
    else if (isNaN(coursesText) || coursesText === '' || coursesText < 0) {
        return alert('please enter a correct value');
    }
    else if (isNaN(internetText) || internetText === '' || internetText < 0) {
        return alert('please enter a correct value');
    }
    else {

        // show result tab
        document.getElementById('results').classList.remove("hidden");

        // update this to expense History
        const div = document.createElement("div");
        div.classList.add("border-l-2", "border-indigo-500", "bg-white", "p-4", "rounded-xl")
        div.innerHTML = `
    <P class = "text-sm">${new Date().toLocaleDateString()}</p>
    <P class = "text-sm">Income: ${income}</p>
    <P class = "text-sm">Expense: ${totalExpenseEle}</p>
    <P class = "text-sm">Balance: ${remainingBalance}</p>
    `
        const expenseHistory = document.getElementById('history-list');
        expenseHistory.insertBefore(div, expenseHistory.firstChild);

    }



})

// Saving button clicked
document.getElementById('calculate-savings').addEventListener("click", function () {
    const income = inputToValue("income");
    const totalExpenseEle = totalExpense("software", "courses", "internet");
    const remainingBalance = income - totalExpenseEle;
    // saving calculation
    const saving = inputToValue('savings');
    const check = document.getElementById('savings').value;
    if (isNaN(check) || check === '' || check < 0) {
        alert('please enter a correct value');
        return;
    }

    else{
        const savingTotalFromBalance = ((saving / 100) * remainingBalance).toFixed(2);
    const updatedRemainingBalance = remainingBalance - savingTotalFromBalance;

   

    // display saving 
    document.getElementById('savings-amount').innerText = savingTotalFromBalance;
    document.getElementById('remaining-balance').innerText = updatedRemainingBalance;
    }

})

// history tab
document.getElementById('history-tab').addEventListener('click', function () {
    // // color Shift
    // document.getElementById("assistant-tab").classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    // document.getElementById("history-tab").classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    // // form section hide
    // document.getElementById('expense-form').classList.add("hidden");
    // document.getElementById('history-section').classList.remove("hidden");

    // done by calling function
    colorShift('assistant-tab', 'history-tab', 'expense-form', 'history-section')
})

// get back to assistant tab

document.getElementById('assistant-tab').addEventListener('click', function () {
    // // color shift
    // document.getElementById("history-tab").classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    // document.getElementById("assistant-tab").classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600'); 

    // // form section unhide
    // document.getElementById('history-section').classList.add("hidden");
    // document.getElementById('expense-form').classList.remove("hidden");

    // done by calling function
    colorShift('history-tab', 'assistant-tab', 'history-section', 'expense-form')

})


