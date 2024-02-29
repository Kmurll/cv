function changeProgressBarColor() {
    var progressBar = document.querySelectorAll('.w3-light-grey .w3-container');
    progressBar.forEach(function(bar) {
        bar.style.backgroundColor = 'orange';
    });
}

function showMessage() {
    alert('Hello! This is a message from your CV.');
}

// Call changeProgressBarColor function when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    changeProgressBarColor();
});
