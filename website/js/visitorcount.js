const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://gq2rvb3oz7woaifeql5ireca540kiixw.lambda-url.ap-south-1.on.aws/");
        let data = await response.json();
        
        // Ensure `data` is formatted correctly, assuming it's a number
        counter.innerHTML = `Views: ${data.views}`; // Adjust `data.views` based on the actual structure of the response
    } catch (error) {
        console.error("Error fetching the counter data:", error);
    }
}

updateCounter();
