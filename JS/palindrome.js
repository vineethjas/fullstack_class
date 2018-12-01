num=435;

palindrome(num);

function palindrome(num){
    if(reverse(num)==num){
        console.log("Palindrome");
    }else{        
        console.log("Not a palindrome");
    }
}
function reverse(num){
    rev=0;

    while(num>0){
    rem=num%10;
    rev=(rev*10)+rem;
    num=parseInt(num/10);
    
    }
    return rev;
}


