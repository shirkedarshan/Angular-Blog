import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h2>Title : {{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>`
})

export class CoursesComponent {
    title = "List of templates";
    courses = ["title1", "title2", "title3"];
    getTitle() {
        return this.title;
    }
}