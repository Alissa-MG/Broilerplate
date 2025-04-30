//downloadButton.addEventListener('click', function () {
//   alert('Thanks! Your itinerary will be downloaded soon.');
//});

window.addEventListener('DOMContentLoaded', function () {
    const downloadButton = this.document.querySelector('#download-btn');
    const popup = document.querySelector('#popup');
    const closePopup = document.querySelector('#close-popup');
   
    if (!downloadButton || !popup || !closePopup) {
        console.log('One or more elements are missing!');
        return;
    }
        downloadButton.addEventListener('click', function () {
            popup.classList.remove('hidden');
        });
        closePopup.addEventListener('click', function() {
            popup.classList.add('hidden');
        });
});



