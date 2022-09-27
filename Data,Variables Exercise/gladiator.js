function gladiator(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
  let brokenShields = 0;
  let expenses = 0;

  for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
    if (currentFight % 2 == 0) {
      expenses += helmPrice;
    }
    if (currentFight % 3 == 0) {
      expenses += swordPrice;
    }
    if (currentFight % 2 == 0 && currentFight % 3 == 0) {
      expenses += shieldPrice;
      brokenShields++;
      if (brokenShields % 2 == 0) {
        expenses += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)}`);
}
gladiator(7, 2, 3, 4, 5);
