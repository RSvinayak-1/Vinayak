import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-home',
  templateUrl: './expense-home.component.html',
  styleUrls: ['./expense-home.component.css']
})
export class ExpenseHomeComponent implements OnInit {

  expensesList=[];
  constructor() { }

  ngOnInit() {
  }

  addExpenses(){
    // alert("add me");
    var expenseObject = {
      'category':'',
      'itemName':'',
      'amount':null,
      'expenseDate':undefined
    }
    this.expensesList.push(expenseObject);
  }

  
  saveExpense(data){
    console.log(data);
  }

}
