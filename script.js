const complimentInput = document.getElementById('complimentInput');
const convertButton = document.getElementById('convertButton');
const outputArea = document.getElementById('outputArea');

convertButton.addEventListener('click', deflectCompliment);

async function deflectCompliment() {
    const compliment = complimentInput.value.trim();
    if (compliment) {
        const deflection = await generateInsult();
        outputArea.value = deflection;
    } else {
        outputArea.value = 'Please enter a compliment.';
    }
}

async function generateInsult() {
    try {
        const response = await fetch('https://insult.mattbas.org/api/insult.json');
        const data = await response.json();
        return data.insult;
    } catch (error) {
        console.error('Error fetching insult:', error);
        return 'Failed to generate insult.';
    }
}