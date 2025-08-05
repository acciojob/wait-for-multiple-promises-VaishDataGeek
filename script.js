function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function executePromises() {
  const startTotal = performance.now();

  const timings = [];

  const start1 = performance.now();
  await delay(2);
  const end1 = performance.now();
  const time1 = ((end1 - start1) / 1000).toFixed(3);
  document.getElementById("p1").innerText = time1;
  timings.push(end1 - start1);

  const start2 = performance.now();
  await delay(1);
  const end2 = performance.now();
  const time2 = ((end2 - start2) / 1000).toFixed(3);
  document.getElementById("p2").innerText = time2;
  timings.push(end2 - start2);

  const start3 = performance.now();
  await delay(3);
  const end3 = performance.now();
  const time3 = ((end3 - start3) / 1000).toFixed(3);
  document.getElementById("p3").innerText = time3;
  timings.push(end3 - start3);

  const endTotal = performance.now();
  const total = ((endTotal - startTotal) / 1000).toFixed(3);
  document.getElementById("total").innerText = total;
}

executePromises();
