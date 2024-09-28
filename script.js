function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const result = document.getElementById('bmiResult'); // Correcting result reference
    const arrow = document.getElementById("arrow");

    if (height === "" || weight === "" || age === "") {
        alert("Please fill all the fields");
    } else {
        const bmi = Math.ceil(weight / ((height / 100) ** 2));

        // Define ranges for arrow positions (Left to right)
        let rotationDegree = 0; // Default

        if (bmi < 18.5) {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-info fw-bolder">Underweight</h4><p class="my-3 fs-4">Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass.</p>`;
            document.getElementById("arrow").style.transform="rotate(-191deg)"
        } else if (bmi < 25) {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-success fw-bolder">Healthy</h4><p class="my-3 fs-4">Maintain a balanced diet and regular physical activity to sustain overall health.</p>`;
            document.getElementById("arrow").style.transform="rotate(-129deg)"

        } else if (bmi < 30) {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-warning fw-bolder">Overweight</h4><p class="my-3 fs-4">Adopt healthy eating habits, increase physical activity, and consider consulting a healthcare professional for guidance.</p>`;
            document.getElementById("arrow").style.transform="rotate(-68deg)"

        } else {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-danger fw-bolder">Obese</h4><p class="my-3 fs-4">Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.</p>`;
            document.getElementById("arrow").style.transform="rotate(4deg)"

        }

        // // Adjust the arrow based on the rotation degree
        // arrow.style.transform = `rotate(${rotationDegree}deg)`;

        // Speech synthesis for BMI value only, excluding HTML tags
        const speech = new SpeechSynthesisUtterance(`Your BMI is ${bmi}`);
        speechSynthesis.speak(speech);
    }
}

// Function to map the BMI value to arrow rotation within the specified ranges
function mapBMIToRotation(bmi, minBMI, maxBMI, minRotation, maxRotation) {
    return minRotation + ((bmi - minBMI) * (maxRotation - minRotation)) / (maxBMI - minBMI);
}

function resetFields() {
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('age').value = "";
    document.getElementById('bmiResult').innerHTML = "YOUR BMI IS:";
    document.getElementById("arrow").style.transform = "rotate(0deg)"; // Resetting the arrow
}
