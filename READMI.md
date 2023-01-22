
# MOCOINANGULAR
is cryptocurrency implementation for the original tutorials issued by savjee and thanks returns to him and these are the original [github blockchain](https://github.com/Savjee/SavjeeCoin) and [github frontend using angular](https://github.com/Savjee/savjeecoin-frontend) and the [youtube channel](https://www.youtube.com/c/Savjee)

it is recommended to check the first blockchain project especially readme from this [link](https://github.com/mostafaadawy/block_chain_coin) where it is litte differences from the original
here are the steps to implement the project 

do not forget to check the following links for angular
- [Learn Angular](https://angular.io/tutorial)
- [CLI Documentation](https://angular.io/cli)
- [Angular Material](https://material.angular.io)
- [Angular Blog](https://blog.angular.io/)
- [Angular DevTools](https://angular.io/devtools/)
- [Meetup Logo](https://www.meetup.com/find/?keywords=angular)
- [Discord Logo](https://discord.gg/angular)
- [Love Angular?](https://github.com/angular/angular)


# installing angular 
  1- `npm install -g @angular/cli`
  2- `ng new mocoinangular`
  3- `cd mocoinangular`
  4- to check and start `npm run start` which equals `ng serve`

# edit app component adding bootstrap CDN
- check bootstrap [link](https://getbootstrap.com/)
- adding navbar and router link to nave to allaow routing angular syntax
- adding service to allow blockchain service and wallet using `ng g service services/blockchain` where `g` for generate and `ng` for angular cli command `services` just to create a folder
- modifying the service.ts `typescript` to have all required  methods.
- don't forget to change the ts class to `implement OnInt` and fix error by creating `method ngOnInt`
- remove throw error on `method ngOnInt` where it is default built in that way when we using fix capability of vscode editor 
- before previous step we have to install github savjee repo using `npm i --save github:Savjee\SavjeeCoin`  but in this step i selected another way where i copied our blockchain classes file in the new project and import it to the service file but with some modifications to become typescript compatible this file can be found in our [repo](https://github.com/mostafaadawy/block_chain_coin)
- to do that we need to add this file dependancy such as crypto and elliptic `npm i --save crypto-js` and `npm i --save elliptic`
- for every service we want to allow to our app we have to call apply it through angular services
- so for our blockchain we have to call instance of our class and create the required functions to it from our class taking ito consideration wrt our block chain [repo](https://github.com/mostafaadawy/block_chain_coin) where main file testing will be done through front end angular
- adding some packages to json and editing prettier and eslint tsconfig to work on target es2015 and lin 2018
- in blockchaindervice file  import elliptic to replace our keygenerator class to generate our sining key abd address/public and our blockchain classes then create public array to save keys and in constructor call an instance for blockchain
- we have to taking into account that service file is in typescript so we have to edit our tsconfig to work on the right js version es2018 and target is es2015
- for type script array must be declared as interface and define the type : Array<interface> that contains the keys
- create generate key method to generate keys using elliptic and calls this in the constructor of the service to be ready
- adding new component blockchain viewer  by cmd `ng g component pages/blockchain-viewer`
- in html use container class and to access the blocks from service we have to use same component ts file code to connect the date to html element
- in the ts code file constructor call the service get all blocks in array then  to use it
- create block-view to contain the date for the block `ng g component pages/block-viewer`
- prepare the html component and its ts to get data to provide it to its render
- editing the style sheet to make style to the card
- returning to the blockchain viewer to use block component
- where usin `<app-component-name : pathing data> calling other component </app-component-name>`
 ```sh
  <app-block-viewer
    *ngFor="let block of blocks"
        [block]="block"
  ></app-block-viewer>
 ```
- where block passed down to block view ts while blocks comes from blockchain ts component which comes from service 
- at that moment when we try the code we didn't get any thing that because we didn't define a route to that views
- in app-route we have to defined route map to component such as 
```sh
const routes: Routes = [
  { path:'', component: BlockchainViewerComponent}
];
```
- create transaction table component `ng g component pages/transactions-table`
- adding index to component or block and this is can done by first in the parent get the index from the for loop as in next code
```sh
<app-block-viewer
    *ngFor="let block of blocks;let elementIndex=index;"
        [block]="block"
        [index]="elementIndex"
  ></app-block-viewer>
```
- adding index in loop `;let elementIndex=index;`
- send it to component inputs ` [index]="elementIndex"`
- in the child `ts` component add `@input() public index` 
- in child `html` component call it `{{ index }} `
- add transaction in transactions-table `ts` 
- in order to display the transaction when clicking the block we have to activate the calling function hosted in blockchain component first parent the scope that contains both transaction and block but the call have to come from block and this can be done by passing the bending function through the blockchain to block and activate or called from block
- to implement that first add public object in first parent contain the selected block which will be the first block in the chain
- add transaction table in the blockchain viewer
- add calling click function to pass to block from blockchain `html` as follows:
```sh
 <app-block-viewer
    *ngFor="let block of blocks;let elementIndex=index;"
        [block]="block"
        [index]="elementIndex"
        (click)="showTransactions(block)"
  ></app-block-viewer>
```
- calling function `(click)="showTransactions(block)"`
- creating the function it self in `blockchain ts` 
- create setting view to set difficulty and reward amount and in this module we will use form model from angular to send data
- `ng g component pages/settings`
- editing setting component html and ts files
in `ts` we have to call our blockchain service to allow sending data to it
- editing html to be form and in field use `ngModel` as follows 
```sh
<div class="form-group">
    <label>Mining Reward</label>
    <input type="number" class="form-control" [(ngModel)]="blockchain.difficulty">
  </div>
```
- this will allow change from and to synced together and allow send data
- but this step required to add that form model from angular from `apt.modules` to import that module as follows `import { FormsModule } from '@angular/forms';`
- add routing to setting page from `apt-routing`
- make a button in navbar to route to it using routerLink
- create component for creating transaction but o allow this we have to create method addTransaction in blockchain service that calls pendTransaction with the required date
- and also we will need form ngModel to send data
- then create transaction component `ng g component pages/create-transaction`
- first time to use 'ngOnInt method` in this project where the importance of that method is it will be called and do something when reloaded where on submit it will reload the field to be blank to receive new data or in other word creates new empty object transaction
- and here the first time to call class Transaction from blockchain
- create method createTransaction that will assign our public key as fromAddress and sign the transaction then create new object of transaction
- 
