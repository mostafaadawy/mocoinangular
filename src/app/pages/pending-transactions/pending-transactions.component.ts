import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss'],
})
export class PendingTransactionsComponent implements OnInit{

  public pendingTransactions = [];

  constructor(private blockchainService:BlockchainService){
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  minePendingTransactions(){
    this.blockchainService.minePendingTransactions()
  }


  ngOnInit() {

  }

}
