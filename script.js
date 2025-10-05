function ability(){

    //variables
    const personName = document.getElementById("name").value;
    const weightKg = parseFloat(document.getElementById("weight").value);
    const heightM = parseFloat(document.getElementById("height").value);


    const highSquared = (heightM * heightM);
    const bmi = (weightKg / highSquared);


    const isUnderWeight = (bmi < 18.5);
    const isNormalWeight = (bmi >= 18.5 && bmi < 25);
    const isOverWeight = (bmi >= 25 && bmi < 30);

    const isHighRisk = (isOverWeight || weightKg > 90);


    //outcome
    console.log("Name:", personName);
    console.log("BMI:", bmi.toFixed(2));
    console.log("Underweight:", isUnderWeight);
    console.log("Normal Weight:", isNormalWeight);
    console.log("Overweight:", isOverWeight);
    console.log("High Risk Alert:", isHighRisk);

    // --- Display results on the webpage ---
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
  <p><strong>Name:</strong> ${personName}</p>
  <p><strong>BMI:</strong> ${bmi.toFixed(2)}</p>
  <p><strong>Underweight:</strong> ${isUnderWeight}</p>
  <p><strong>Normal Weight:</strong> ${isNormalWeight}</p>
  <p><strong>Overweight:</strong> ${isOverWeight}</p>
  <p><strong>High Risk Alert:</strong> ${isHighRisk ? "⚠️  Yes" : "No"}</p>`;
}