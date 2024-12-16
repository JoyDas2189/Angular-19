import { Routes } from '@angular/router';
import { DataBindingsComponent } from './Components/data-bindings/data-bindings.component';
import { StructuralComponent } from './Components/directives/structural/structural.component';
import { AttributeComponent } from './Components/directives/attribute/attribute.component';
import { LadingComponent } from './Components/lading/lading.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path: 'landing-page',
        component:LadingComponent
    },
    {
        path: 'data-bindings',
        component: DataBindingsComponent
    },
    {
        path: 'structural-directive',
        component: StructuralComponent
    },
    {
        path: 'attribute-directive',
        component: AttributeComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    }

];
