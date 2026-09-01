// Перевірка розрахунку: node check.js
const { cost } = require("./calc.js");
const cases = [
  ["A", "10:00", "12:00", 300],
  ["B", "09:30", "10:00", 150],
  ["C", "14:00", "17:30", 700],
];
let ok = true;
for (const [room, s, e, expected] of cases) {
  let got;
  try { got = cost(room, s, e); } catch (err) { got = "error: " + err.message; }
  const pass = got === expected;
  if (!pass) ok = false;
  console.log(`${pass ? "ok  " : "FAIL"} ${room} ${s}-${e}: очікували ${expected}, отримали ${got}`);
}
console.log(ok ? "OK" : "FAIL");
process.exit(ok ? 0 : 1);
