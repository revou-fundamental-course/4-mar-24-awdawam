document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById('calculate-button');
    var resetButton = document.getElementById('reset-button');

    calculateButton.addEventListener('click', function() {
        var weight = parseFloat(document.getElementById('weight-input').value);
        var sex = document.querySelector('input[name="sex"]:checked');
        var bmiResult = document.getElementById('bmi-result');
        var bmiDescription = document.getElementById('bmi-result-description');

        if (!weight || !sex) {
            alert('Isi Dulu Semua Field Nya yaa....!');
            return;
        }

        var bmi = calculateBMI(weight, sex.value);
        bmiResult.textContent = bmi.toFixed(2);

        displayBMIResult(bmi);
    });

    resetButton.addEventListener('click', function() {
        document.getElementById('weight-input').value = '';
        document.getElementById('sex-man').checked = false;
        document.getElementById('sex-woman').checked = false;
        document.getElementById('bmi-result').textContent = '0';
        document.getElementById('bmi-result-description').textContent = 'Anda Memiliki Berat Badan Ideal';
    });
});

function calculateBMI(weight, sex) {
    var bmi;
    if (sex === 'male') {
        bmi = weight / (1.72 * 1.72); // Rumus BMI untuk pria
    } else {
        bmi = weight / (1.62 * 1.62); // Rumus BMI untuk wanita
    }
    return bmi;
}

function displayBMIResult(bmi) {
    var resultText;
    if (bmi < 18.5) {
        resultText = "Anda termasuk dalam kategori kurang berat badan.";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultText = "Anda termasuk dalam kategori berat badan normal.";
    } else if (bmi >= 25 && bmi < 30) {
        resultText = "Anda termasuk dalam kategori kelebihan berat badan.";
    } else {
        resultText = "Anda termasuk dalam kategori obesitas.";
    }

    document.getElementById('bmi-result-description').textContent = resultText;
}
