
function person(firstname,lastname,office_address) {
    this.firstname = firstname ;
    this.lastname = lastname ;
    this.office_address = office_address ;
}

var p1 = new person("shivam" , "lodhi" , "4D block 97 , Delhi" );
var p2 = new person("rakesh" , "patel" ,"5th floor rajiv colony,golbajar ,jabalpur");
var p3 = new person("raghav" , "kumar" ,"jaguar colony , near CITY MALL ,kota(rajasthan)");

console.log(p1);
console.log(p2);
console.log(p3);