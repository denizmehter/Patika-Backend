const arguments = process.argv.slice(2);
const circleRadius = (radius) => {
    console.log(3.14 * radius ** 2)
}
circleRadius(arguments[0]*1);