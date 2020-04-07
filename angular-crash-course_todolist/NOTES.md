## Anatomy of a Component
```
import { Component, OnInit } from '@angular/code';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scc']
})
export class AppComponent implements OnIni {
    name: string = 'Brad';
    age:number = 37;

    constructor(**services import here**) {}
    ngOnInit() {
        // runs when component is created
    }
}
```
The constructor is to import any services that you need.
OnInit is a lifecyckle method that runs when the component is created.
Note that the properties are in TypeScript.

# Angular CLI
### To build an app
```
ng new myapp
ng serve
ng build
```
### You can also generate things like components, services and modules from the command line.
```
ng generate component todos
ng generate service todo
ng generate module add-routing
ng generate component components/layout/Header
ng generate component components/AddTodo
ng generate component components/pages/About
```

### State Management
- YOu can use state managers like ngrx and Redux for larger app.
- It is probably less necessary than for React or Vue due to the overall structure of the frameworks and services which are used to share data and functionality.

#Setting up Angular
- Install node.js
- Install angular globally.  (You may have to sudo)
```.
npm install -g @angular/cli
```
- Check angular was installed correctly.
```
ng --version
```

# Create the Project
Select "Y" when prompted if you want to create the router.
```
ng new todolist-angular
```
Start the server (The --open option opens it in a browser window.)
```
ng serve --open
```

### Angular File Structure
- Styles like Bootstrap be added to the index.html or yuo can have them imported by adding them to the **styles** section in the angular.json file.
- the /app folder is where all of the components and services will be created.
- /app/app.module.js is asically the entry point to Angular.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
- **decorations* is where your components, including the AppComponent, are going to go. (The CLI will automatically add them here.)
- Modules have to be imported in the app.module.ts file and added to the **imports**.
- **providers* has to do with the services that you want to use.
- In **bootstrap* we are bootstrapping the main AppComponent.

### All of the components are going to have the .ts file type, NOT .js.

#### app.component.ts has a decorator that includes metadata for the component.
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-angular';
}
```

String interpolation is used to add variables to templates below. (You can also add JavaScript expressions and methods.)
```
<h1>Welcome to {{ title.toUpperCase() }}!</h1>
Hello, {{ name }}.
{{ 1 + 1 }}
```

You can also use pipes. (Look up to see what pipes are available.)
```
<h1>Welcome to {{ title | uppercase }}!</h1>
```

You can also have methods inside of a component.

Note that the **constructor** method is usually used to import services so you don't generally want to add things there. Instead use the ngOnInit method which is called when the object is created.

All of your templates need to be wrapped in a single element.


# Creating the TodoList Project

Generate components and services.
```
ng generate component components/Todos
ng generate component components/TodoItem
ng generate service services/Todo
```

**onSubmit()** does the e.preventDefault() for us.
```
<form class="form" (ngSubmit)="inSubmit()">
```

There is actually a command to not generate the .spec.ts files.

## The routes are in the file app-routing,module.ts.
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Also in the main app html file app.component.html change <app-todos></app-todos> to <router-outlet></router-outlet>.
```
<div>
  <app-header></app-header>
  <router-outlet></router-outlet>
</div>
```

For production your run **ng build** whcih puts all of the static files for deployment into a **/dist** folder.