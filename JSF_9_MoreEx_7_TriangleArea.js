function triangleArea(a, b, c){
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}

triangleArea(2, 3.5, 4) 
//3. 4994419197923547
triangleArea(3, 5.5, 4) 
//5.854685623498498