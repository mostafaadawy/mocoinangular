import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input() public transactions=[]
  constructor(){
    //console.log('Transaction: ',this.transactions)
  }
  ngOnInit(): void {

  }

}
