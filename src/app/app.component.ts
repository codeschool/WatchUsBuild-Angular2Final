import { Component } from '@angular/core';

@Component({
  selector: 'racing-app',
  template: `
<header class="container">
  <h1>{{heading}}</h1>
</header>
<my-races></my-races>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}
