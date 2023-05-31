function circleArea(r) {
    let area  = r * r * Math.PI;
    console.log(area);
    // return area
}

function circleCircumference(r) {
    let circumrefence = 2 * r * Math.PI;
    console.log(circumrefence);
    // return circumrefence
}

module.exports = {circleArea, circleCircumference};