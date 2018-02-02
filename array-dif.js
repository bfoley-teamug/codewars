function array_diff(a, b) {
  return a.filter((num) => b.indexOf(num) < 0)
}
