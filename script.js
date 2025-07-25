//your JS code here. If required.
const output = document.getElementById("output");

// Step 1: Show "Loading..." initially
const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(loadingRow);

// Step 2: Create a function to return a Promise that resolves in 1–3 seconds
function createTimedPromise(index) {
  const delay = (Math.random() * 2 + 1).toFixed(3); // Random delay between 1–3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: `Promise ${index}`, time: parseFloat(delay) });
    }, delay * 1000); // Convert to milliseconds
  });
}

// Step 3: Create 3 promises
const promises = [1, 2, 3].map((i) => createTimedPromise(i));

// Step 4: Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // Remove "Loading..." row
  output.innerHTML = "";

  // Append result rows
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  // Step 5: Add the total time row (maximum time taken)
  const maxTime = Math.max(...results.map((r) => r.time));
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${maxTime.toFixed(3)}</strong></td>
  `;
  output.appendChild(totalRow);
});
