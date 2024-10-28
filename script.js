
function bookTicket() {
    // Get form values
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const passengerName = document.getElementById("passengerName").value;
    const passengerAge = document.getElementById("passengerAge").value;

    // Basic validation
    if (!departure || !destination || !date || !passengerName || !passengerAge) {
        alert("Please fill in all fields.");
        return;
    }

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = `Ticket booked successfully for ${passengerName}. Departure: ${departure}, Destination: ${destination}, Date: ${date}`;
}