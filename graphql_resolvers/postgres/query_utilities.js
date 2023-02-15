function toPsqlArrayLiteral(array) {
  let psqlArray = "{"
  array.forEach(element => {
    psqlArray = psqlArray.concat(`"`+element+`",`)
  });
  return psqlArray.slice(0,-1).concat(`}`)
}

function getPsqlColumnNames(args) {
  let psqlColumnNamesString = new String()
  for (const arg in args) {
    psqlColumnNamesString = psqlColumnNamesString.concat(arg+", ")
  }
  return psqlColumnNamesString.slice(0,-2)
}

function getPsqlColumnValues(args) {
  let psqlColumnValuesString = new String("'");
  for (const value in args) {
    psqlColumnValuesString = psqlColumnValuesString.concat(args[value]+"','")
  }
  return psqlColumnValuesString.slice(0,-2)
}

export {
  toPsqlArrayLiteral,
  getPsqlColumnNames,
  getPsqlColumnValues
}