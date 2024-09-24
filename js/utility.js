// convert input to value
function inputToValue(id){
    return Number(document.getElementById(id).value);
}
// total expense
function totalExpense(id2, id3, id4){
        const software = inputToValue(id2);
        const courses = inputToValue(id3);
        const internet = inputToValue(id4);
        
        return software + courses + internet;
}

// button Color shift
function colorShift(activeTabID, selectedBtnId, hideSectionId, showSectionId){
    // current active button
    document.getElementById(activeTabID).classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    // selected button
    document.getElementById(selectedBtnId).classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    // hide section
    document.getElementById(hideSectionId).classList.add("hidden");

    // show section
    document.getElementById(showSectionId).classList.remove("hidden");

}

// validation
function inputValidation(inputID, softwareID, courseID, internetID){
    const inputText = document.getElementById(inputID).value;
    const softwareText = document.getElementById(softwareID).value;
    const coursesText = document.getElementById(courseID).value;
    const internetText = document.getElementById(internetID).value;

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
    
}