function checkFormCompletion() {
    const passengerName = document.getElementById('passengerName').value;
    const phoneNumber = document.getElementById('floating_phone').value;

    if (passengerName && phoneNumber) {
        nextBtn.disabled = false;
        nextBtn.style.backgroundColor = '#1DD100';
    } else {
        nextBtn.disabled = true;
        nextBtn.style.backgroundColor = '#B3B3B3';
    }
}






function showModal() {
    const passengerName = document.getElementById('passengerName').value;
    const phoneNumber = document.getElementById('floating_phone').value;

    if (passengerName && phoneNumber) {
        // Display the modal
        const modal = document.getElementById('modalDiv');
        
    } else {
        console.log('Please fill in the passenger name and phone number.');
    }
}







