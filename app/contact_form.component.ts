import {Component} from "angular2/core";
import {NgForm} from "angular2/common";
import {Contact} from "./contact";

@Component({
    selector : 'contact-form',
    templateUrl : 'app/template/contact_form.component.html'
})

export class contactComponent {
    submitted = false;
    countries = ['India','America','England','South Africa','Australia','Japan','China'];
    contact = new Contact('Pranali','Patil',this.countries[0],9876543210);
    active = true;
    onSubmit() {
        this.submitted = true
    }
    newContact(){
        this.contact = new Contact('','');
        this.active = false;
        setTimeout(()=> this.active = true,0);
    }
}

