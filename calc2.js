function calculateCostPerSquareFoot() {
    var quantity = parseFloat(document.getElementById('quantity').value);
    var unit = document.getElementById('unit').value;
    var costPerUnit = parseFloat(document.getElementById('cost-per-unit').value);
    var ouncesPerTreatment = parseFloat(document.getElementById('ounces-per-treatment').value);
    var squareFeet = parseFloat(document.getElementById('square-feet').value);
  
    var ouncesPerGallon = 128;
    var ouncesPerQuart = 32;
    var ounces;
  
    if (!isNaN(quantity) && !isNaN(costPerUnit) && !isNaN(ouncesPerTreatment) && !isNaN(squareFeet)) {
      if (unit === 'gallons') {
        ounces = quantity * ouncesPerGallon;
      } else if (unit === 'quarts') {
        ounces = quantity * ouncesPerQuart;
      } else if (unit === 'ounces') {
        ounces = quantity;
      }
  
      var costPerOunce = costPerUnit / ounces;
      var costPerSquareFoot = (costPerOunce * ouncesPerTreatment) / squareFeet;
  
      document.getElementById('result-calc2').value = costPerSquareFoot.toFixed(10);
    } else {
      document.getElementById('result-calc2').value = 'Invalid input';
    }
  }
  
  document.getElementById('calculate-calc2').addEventListener('click', calculateCostPerSquareFoot);
  
  
  
  
  