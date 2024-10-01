function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const propName = `-${getCurrentYear()}`;
    const budget = {
        [`income` + [propName]]: income,
        [`gdp` + [propName]]: gdp,
        [`capita` + [propName]]: capita
    };

    return budget;
  }