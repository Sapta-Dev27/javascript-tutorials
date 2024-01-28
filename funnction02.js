// Use of objects in fuctions , systax and examples //
const user = {
    name: "Saptarshi",
    department: " CSE ( Data Science)",
    college: " Techno Main Salt Lake",
    year: "First",

}
function studentInformation(allstudents) {
    console.log(`Name of the student is    ${allstudents.name}  and the department is ${allstudents.department}  graduating from ${allstudents.college} , currently from ${allstudents.year}`)
    return allstudents;
}
studentInformation(user);


//Use of objects in functions , it can used to display of certain results , examples are given below //
const userDetails = {
    name1: " SAPTARSHI PAUL",
    designation: "Software Developement Engineer",
    company: "Google",
    experience: "2+ years",
    skills: " Full Stack , Ml , Deep learning",
}
function employeeInformation(userDetails) {
    console.log(`Employee name is ${userDetails.name1} , designed as a ${userDetails.designation} at ${userDetails.company} with an experience of ${userDetails.experience} having skills in ${userDetails.skills} `);
    return userDetails;
}
employeeInformation(userDetails);

//Use of arrays in functions //
const array = [100, 200, 300, 400, 500];
function callArray(entryofelements) {
    console.log(entryofelements[0]);
    console.log(entryofelements[1]);
    console.log(entryofelements[2]);
    console.log(entryofelements[3]);
    console.log(entryofelements[4]);
    return entryofelements;

}
callArray(array);


// another example to use objects as functions //
const user3 = {
    Product: "ASUS VIVOBOOK 15 ",
    OriginalPrice: " 76,000",
    SaleAvailable: "Republic Day Sale",
    Discount: " upto 35% off",
    Finalprice: " 52000",
    BankOffer: "SBI Credit Card",
    BankDiscount: "5000",
    LowestPrice: " 47000",
}
function buyLaptop(laptop){
    console.log(`Product name is ${laptop.Product} , the market price of the product is ${laptop.OriginalPrice} ,  The laptop is available for ${laptop.SaleAvailable} which is going on at ${laptop.Discount} . The final price of the product is ${laptop.Finalprice}. Bank offer availble for ${laptop.BankOffer} at a discount of ${laptop.BankDiscount} . The Lowest price for the Product is ${laptop.LowestPrice}`)
    return laptop;
}
buyLaptop(user3);