import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`, // i used Arrow function expression to get income in dollar
    getIncomeInEuros: (income) => `${income} euros`, // i used Arrow function expression to get income in euros
  };

  return fullBudget;
}
