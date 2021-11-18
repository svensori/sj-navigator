# sj-navigator
Easy side nav creation in angular

## Usage 
1. Install sj-navigator by running the command:
```sh
npm i sj-navigator
```
2. Import NavigatorModule from sj-navigator.
```typescript
import { NavigatorModule } from 'sj-navigator';

@NgModule({
  imports: [
    NavigatorModule
  ],
}
```
3. Create a routing model for your app and initialize it in your app initializer.
```typescript
const routingModel: RoutingModel = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    children: [{
        name: 'Releases',
        path: 'dashboard/releases'
      }
    ]
  }
];

const initializer = (navService: NavigatorService) => () => navService.init(routingModel);
```
4. Provide the APP_INITIALIZER injection token and use the initializer factory that you made.
```typescript
@NgModule({
  providers: [
    {
       provide: APP_INITIALIZER,
       useFactory: initializer,
       deps: [
         NavigatorService
       ],
       multi: true
     }
  ]
}
```
5. Wrap your app in the sj-navigator selector.
```html
<sj-nav (navigated)="navigate($event)">
  <router-outlet></router-outlet>
</sj-nav>
```
Voila!, you have made an instant side navigation in your application.

<br />

## Have a different style to the navigation?
You can style the navigation in your global css file

<br/>

## Navigator emitters
* navigated - Returns the route path for the respective navigation item that is clicked. 
