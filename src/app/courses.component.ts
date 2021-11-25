import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h2>Title : {{ title }}</h2>
        <div (click)="onDivClick()">
            <button 
                class="btn btn-primary" 
                [class.active] = "isActive"
                [style.backgroundColor] = "isActive ? 'blue' : 'white'" 
                (click) = "onSave($event)"
            >    Button    
            </button>   
        </div>
        <div>
            <span class="glyphicon" 
                [class.glyphicon-star]="starClass"
                [class.glyphicon-star-empty]="!starClass"
                aria-hidden="true" 
                (click)=clickStar()
            ></span>
        </div>
        <input [(ngModel)]='email' [placeholder]="placeholder" (keyup.enter)="onEnter()"/>

        <img [src]="imageUrl"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>`
})

export class CoursesComponent {
    title = "Flower fool";
    colSpan = 2;
    isActive = true;
    imageUrl = "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg"
    email : any;
    starClass = false;
    placeholder = "Enter text babu bhaiya"

    onSave($event:MouseEvent){
        $event.stopPropagation();
        console.log("Dhakitikir Dhakitiki Dhakitiki dha", $event)
    }
    
    onDivClick(){
        console.log("clicked the div")
    }

    onEnter(){
        console.log(this.email);
    }

    clickStar(){
        this.starClass = !this.starClass;
    }
}