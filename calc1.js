document.getElementById('calculate-total').addEventListener('click', calculateTotalCost);
document.getElementById('calculate-percent').addEventListener('click', calculatePercentage);
document.getElementById('multiply-result').addEventListener('click', multiplyResult);
document.getElementById('clear-all-numbers').addEventListener('click', clearAllNumbers);


function calculateTotalCost() {
    var measurementType = document.getElementById('measurement-type').value;
    var measurement = parseFloat(document.getElementById('measurement').value);
    var costOfChemical = parseFloat(document.getElementById('cost-of-chemical').value);
    var laborHours = parseFloat(document.getElementById('labor-hours').value);
    var costPerHour = parseFloat(document.getElementById('cost-per-hour').value);
    var mileage = parseFloat(document.getElementById('mileage').value);
    var costPerMile = parseFloat(document.getElementById('cost-per-mile').value);
    var glueBoardBoxes = parseFloat(document.getElementById('glue-board-boxes').value);
    var aerosolCans = parseFloat(document.getElementById('aerosol-cans').value);
    var antBaitJug = parseFloat(document.getElementById('ant-bait-jug').value);
    var baitStation = parseFloat(document.getElementById('bait-station').value);
    var rodentBaitByBlock = parseFloat(document.getElementById('rodent-bait-by-block').value);
    var miscellaneous2 = parseFloat(document.getElementById('miscellaneous-2').value);

    var totalCost = 0;

    if (measurementType === 'linear-feet' && !isNaN(measurement) && !isNaN(costOfChemical)) {
        totalCost += measurement * costOfChemical;
    } else if (measurementType === 'square-feet' && !isNaN(measurement) && !isNaN(costOfChemical)) {
        totalCost += (measurement / 2) * costOfChemical;
    }

    if (!isNaN(laborHours) && !isNaN(costPerHour)) {
        totalCost += laborHours * costPerHour;
    }

    if (!isNaN(mileage) && !isNaN(costPerMile)) {
        totalCost += mileage * costPerMile;
    }

    if (!isNaN(glueBoardBoxes)) {
        totalCost += 23.00 * glueBoardBoxes;
    }

    if (!isNaN(aerosolCans)) {
        totalCost += 13.00 * aerosolCans;
    }

    if (!isNaN(antBaitJug)) {
        totalCost += 69.00 * antBaitJug;
    }

    if (!isNaN(baitStation)) {
        totalCost += 8.75 * baitStation;
    }

    if (!isNaN(rodentBaitByBlock)) {
        totalCost += .29 * rodentBaitByBlock;
    }

    if (!isNaN(miscellaneous2)) {
        totalCost += miscellaneous2;
    }

    document.getElementById('result-calc1').value = totalCost.toFixed(2);
}

function multiplyResult() {
    var multiplier = parseFloat(document.getElementById('multiplier').value);
    var result = parseFloat(document.getElementById('result-calc1').value);

    var multipliedResult = result * multiplier;

    document.getElementById('result-calc1').value = multipliedResult.toFixed(2);
}


function calculatePercentage() {
    var totalCost = parseFloat(document.getElementById('result-calc1').value);
    var percentage = parseFloat(document.getElementById('percentage').value);

    var percentageResult = (totalCost * percentage) / 100;

    document.getElementById('percentage-result').value = percentageResult.toFixed(2);
}

function multiplyResult() {
    var multiplier = parseFloat(document.getElementById('multiplier').value);
    var result = parseFloat(document.getElementById('result-calc1').value);

    var multipliedResult = result * multiplier;

    document.getElementById('result-calc1').value = multipliedResult.toFixed(2);
}

document.getElementById('clear-all-numbers').addEventListener('click', clearAllNumbers);

function clearAllNumbers() {
  document.getElementById('measurement').value = '';
  document.getElementById('cost-of-chemical').value = '';
  document.getElementById('labor-hours').value = '';
  document.getElementById('cost-per-hour').value = '';
  document.getElementById('mileage').value = '';
  document.getElementById('cost-per-mile').value = '';
  document.getElementById('glue-board-boxes').value = '';
  document.getElementById('aerosol-cans').value = '';
  document.getElementById('ant-bait-jug').value = '';
  document.getElementById('bait-station').value = '';
  document.getElementById('rodent-bait-by-block').value = '';
  document.getElementById('miscellaneous-2').value = '';
  document.getElementById('result-calc1').value = '';
}

// ... Existing code ...

  

