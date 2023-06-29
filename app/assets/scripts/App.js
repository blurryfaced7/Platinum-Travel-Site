import "../styles/styles.css";
import Person from "./modules/Person";

if(module.hot){
    module.hot.accept();
}


// Ene muruus doosh jishee code-uud baigaa

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " odoogoor tatwariin urgui bn.");
    }
}

var john = new Person("John Doe", "green");
john.greet();
// john.payTaxes();

var jane = new Adult("Jane Doe", "pink");
jane.greet();
jane.payTaxes();
