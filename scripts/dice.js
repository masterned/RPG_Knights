// 'use strict';

const Dice = (numSides, numRolls, resultModifier) => {
  // let args = [numSides, numRolls, resultModifier];
  // console.table(args);
  
  if (numSides !== undefined && isNaN(numSides)) {
    console.log(`Number of sides is not a number: ${numSides}`);
    return;
  }
  if (numRolls !== undefined && isNaN(numRolls)) {
    console.log(`Number of dice rolls is not a number: ${numRolls}`);
    return;
  }
  if (resultModifier !== undefined && isNaN(resultModifier)) {
    console.log(`Result modifier is not a number: ${resultModifier}`);
    return;
  }

  numSides = +numSides || 6;
  if (numSides < 2) {
    console.log(`A die cannot have fewer than two sides.`);
    return;
  }

  numRolls = +numRolls || 1;
  if (numRolls < 1) {
    console.log(`A dice roll cannot have fewer than one die.`);
    return;
  }

  resultModifier = +resultModifier || 0;

  let rolls = new Array(numRolls);
  rolls.length = numRolls;

  const roll = _ => Math.ceil(Math.random() * numSides);
  const rollDice = _ => rolls = rolls.fill(0).map(roll);
  rollDice();

  const getTotal = _ => summation(rolls) + resultModifier;

  const toResultString = _ => `[${rolls.join(', ')}] `
    + `${resultModifier ? resultModifier > 0 ? `+${resultModifier} ` : ` ${resultModifier} ` : ``}`
    + `= ${getTotal()}`;

  const toResultObj = _ => ({
    rolls,
    modifier: resultModifier,
    total: getTotal()
  });

  return {
    roll: _ => rollDice() && toResultObj(),
    getTotal,
    toResultString,
    toResultObj
  };
};

let die = Dice();

$(function () {
  // console.log('ready');

  $('#roll_dice').click(function () {
    $('#dice_results').hide();

    $('#dice_rolls').empty();
    $('#dice_total').empty();

    die = Dice($('#num_sides')[0].value, $('#num_dice')[0].value, $('#dice_mod')[0].value);
    die.roll();

    // console.log(die.toResultObj());

    let obj = die.toResultObj();

    for (let roll of obj.rolls) {
      // console.log(`roll ${roll}`);
      $('#dice_rolls').append(`<li>${roll}</li>`);
    }

    $('#dice_total').append(`<div>${obj.total}</div>`);

    $('#dice_results').show();
  });
});
