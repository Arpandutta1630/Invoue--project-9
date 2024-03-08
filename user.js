document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code
    const users = [
        { id: 1, image: "user1.jpg", name: "Add", address: "Apd", domain: "Front-end", status: "Active" },
        { id: 2, image: "user1.jpg", name: "Bdd", address: "jpg", domain: "Back-end", status: "Active" },
        { id: 3, image: "user1.jpg", name: "Cdd", address: "Cob", domain: "Full-stack", status: "Active" },
        { id: 4, image: "user1.jpg", name: "Edd", address: "Slg", domain: "Sales", status: "Active" },
        { id: 5, image: "user2.jpg", name: "Fdd", address: "Kolkata", domain: "Hr", status: "Inactive" }
        // Add more user data here if needed
    ];

    const userTableBody = document.getElementById("userTableBody");

    // Function to toggle user status
    function toggleStatus(button) {
        if (button.classList.contains("active")) {
            button.textContent = "Inactive";
            button.classList.remove("active");
            button.classList.add("inactive");
        } else {
            button.textContent = "Active";
            button.classList.remove("inactive");
            button.classList.add("active");
        }
    }

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${user.image}" class="user-image"></td>
            <td>${user.name}</td>
            <td>${user.address}</td>
            <td>${user.domain}</td>
            <td><button class="status-button ${user.status.toLowerCase()}">${user.status}</button></td>
        `;
        const statusButton = row.querySelector(".status-button");
        statusButton.addEventListener("click", function() {
            toggleStatus(statusButton);
        });
        userTableBody.appendChild(row);
    });
});
