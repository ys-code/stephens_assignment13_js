

const bankAccount = function(ownerName) {
    let balance=0;
    let owner = ownerName;
    const getOwnerName = function(){
        return owner;};
    const getBalance = function(){
        return balance;};
    return{
        withdrawal : function(withdrawalAmount){
            if(withdrawalAmount>balance){alert(`You don't have enough money in your account`);}
            else{balance -= withdrawalAmount;}
            //console.log(`balance after withdrawal is ${balance}`);
        },
        deposit : function(depositAmount){
            if(depositAmount <= 0){alert(`Deposit Amount is invalid`);}
            else{balance += depositAmount;}
            //console.log(`balance after withdrawal is ${balance}`);
        },
        display_message: function(){
            $('display').innerHTML=(`Account Name: ${getOwnerName()}<br> Account Balance: ${getBalance()}`);
        }
    
    };//end of return
    



};
let $ = function (id){ return document.getElementById(id);};
window.addEventListener('load',function(){
    let div_btns = $('btns');
    let ans_name,ans_deposit,ans_withdrawal,account;
    div_btns.addEventListener('click',function(e){
        
        if (e.target.value==='Name'){
            //$('display').innerHTML=(``);
            ans_name = window.prompt(`Please enter ${e.target.value}`);
            account= new bankAccount(ans_name);
            account.display_message();
            
            
        }
        else if(e.target.value==='Deposit'){
            ans_deposit = parseFloat(window.prompt(`Please enter ${e.target.value}`));
            account.deposit(ans_deposit);
            account.display_message();
        }
        else if(e.target.value==='Withdrawal'){
            ans_withdrawal =parseFloat( window.prompt(`Please enter ${e.target.value}`));
            account.withdrawal(ans_withdrawal)
            account.display_message();
        }
        
        
    });
});