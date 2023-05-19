
// defined a class - it is a template used to create object
class Customer{
    
    //To create an object
    constructor(customer_id,store_id,first_name,last_name,email){
        this.customer_id = customer_id;
        this.store_id = store_id;
        this.first_name = first_name;
        this.last_name = last_name;
        //this.email = email;
        this.mobile_number = '';
        console.log("Inside Customer class constructor.Completed creating an object.")
    }

    //methods

}


function test_function(){

    //var customer1 = new Customer(524,1,'Jared','Ely','jared.ely@sakilacustomer.org'); //creating objecting
    var customer1 = new Customer(524,1,'Jared','','jared.ely@sakilacustomer.org'); //creating objecting
    console.log(customer1);
    //console.log("Inside test_function")
}

