document.addEventListener('DOMContentLoaded', function () {
    
    const selectedSeats = [];

    // Get all seat buttons
    const seatButtons = document.querySelectorAll('.btn.btn-outline');

    
    seatButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get row and seat information from the data attributes
            const row = button.getAttribute('data-row');
            const seat = button.getAttribute('data-seat');

           
            toggleSeatSelection(row, seat);

            // Update selected seats display
            updateSelectedSeatsDisplay();

          
            toggleButtonStyle(button);
        });
    });

    // Function to toggle seat selection
    function toggleSeatSelection(row, seat) {
        const selectedSeat = `${row}${seat}`;
        const seatIndex = selectedSeats.indexOf(selectedSeat);

        
        if (seatIndex === -1) {
            selectedSeats.push(selectedSeat);
        } else {
            selectedSeats.splice(seatIndex, 1);
        }
    }

    // Function to update selected seats display
    function updateSelectedSeatsDisplay() {
        const selectedSeatsElement = document.getElementById('selectedSeats');

        // Clear existing rows
        selectedSeatsElement.innerHTML = '';

        
        selectedSeats.forEach(function (selectedSeat) {
            const row = selectedSeat.charAt(0);
            const seat = selectedSeat.substring(1);

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${row}${seat}</td>
                <td>Economoy</td>
                <td class="text-right">550</td>
            `;
            selectedSeatsElement.appendChild(newRow);
        });

        // Add total price row
        const totalPriceRow = document.createElement('tr');
        totalPriceRow.innerHTML = `
            <td>Total Price</td>
            <td></td>
            <td class="text-right">BDT ${selectedSeats.length * 550}</td>
        `;
        selectedSeatsElement.appendChild(totalPriceRow);
    }

    // Function to toggle button style
    function toggleButtonStyle(button) {
        
        button.classList.toggle('selected');
    }
});
