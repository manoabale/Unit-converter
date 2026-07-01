document.getElementById("convertBtn").addEventListener("click", convertUnit);

function convertUnit() {
  const value = parseFloat(document.getElementById("value").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (!value) {
    document.getElementById("result").textContent = "Enter a value first";
    return;
  }

  const units = {
    m: 1,
    km: 1000,
    cm: 0.01,
    mi: 1609.34,
    ft: 0.3048
  };

  const meters = value * units[from];
  const converted = meters / units[to];

  document.getElementById("result").textContent =
    `Converted Value: ${converted.toFixed(4)} ${to}`;
}
