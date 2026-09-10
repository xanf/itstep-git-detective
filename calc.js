// Розрахунок вартості бронювання переговорки.

const RATES = { A: 150, B: 300, C: 200, D: 100 }; // грн/год

function hours(start, end) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  return (eh * 60 + em - (sh * 60 + sm)) / 60;
}

function cost(room, start, end) {
  const h = hours(start, end);
  if (h <= 0) throw new Error("Кінець має бути пізніше за початок");
  return Math.round(RATES[room] * h);
}

module.exports = { hours, cost, RATES };
