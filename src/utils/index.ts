var sortArrayWithNestedObj = function (
  propertyRetriever: Function,
  arr: Array<any>,
) {
  arr.sort(function (a, b) {
    var valueA = propertyRetriever(a)
    var valueB = propertyRetriever(b)

    if (valueA < valueB) {
      return -1
    } else if (valueA > valueB) {
      return 1
    } else {
      return 0
    }
  })
}
export { sortArrayWithNestedObj }
