function toPsqlArrayLiteral(Array) {
  let psqlArray = "{"
  Array.forEach(element => {
    psqlArray = psqlArray.concat(`"`+element.toString()+`",`)
  });
  return psqlArray.slice(0,-1).concat(`}`)
}

export {
  toPsqlArrayLiteral
}