// I have used bootstrap 4.3 
// run npm install 
// run ng serve 
//then open browser localhost:4200
//tab 1 is for marco polo test 
//tab 2 is for user story 1 test


//Answer  to the Question:What is the difference between imports, declarations, and providers?
//1)Imports:
// (i)In NgModules: In the NgModule decorator we use imports array in which we mention different modules which  basically tell angular to make available all modules mentioned there to cuurent module. In this array we  mention modules that can be shipped from third party or can be custom modules or may be the its own(angular) modules

//2)Declarations:
// (i)In NgModules: In the NgModule decorator we use declarations array in which we mention the components, directives or pipes classes which this module will use or that will make those components, directives or pipes available to this module

//3)Providers:
// (i)In NgModules: In the NgModule decorator we use providers array in which we mention the services classes to make   them known to the Dependency Injection.There instances is created at the root scope and we can inject them in components, directives, pipes or other services which have dependency on them



//Answer to the Question:What is the difference between components, directives, models, modules, and services?

//1)Components: Components are special directives that uses @Component decorator.components are special too because they have templates attached to them.Components have 3 parts: one is template in which we mention html code, second is css part where we mention all the styling of the component which will not be global scoped it is scoped to the particular component only, third one is typescript file in which we mention all the business logic.

//2)Directives: Directives are kind of extended HTML Attributes which in the end sits on the html tags but they have     special powers to either manipulate the structure of the HTML tag on which they sits or can change they apperance.
 Directives are tyically of two types structural directives or attribute directives structural directives changes the Structure of element like ngIf and ngFor attribute directives changes the appearance or styling of element like ngClass and ngStyle

//3)Models: Models are the blueprints made of either class or interface typically used to give the type to particular property. So that we can take the advantage of typescript strongly typed feature.

//4)Modules: Modules is a place where we keep components, directives and pipes in a group which can be dedicated for a particular feature in angular application. Modules uses @NgModule decorator in which we mention components, directives , , pipes and services 

//5) Services: Services are the classes which do common or specific stuffs like fetching the data from api's or implementing the logic which can be used in multiple components, direcives or may in other services. Angular uses Dependency injection framework for providing the instances of the services. Services uses @Injectable decorator while declaring them and If any component, directive, or other services has dependency on other services than we have to mention service type variable in the constructor function of component
