num=4368;

console.log(reverse(num));


function reverse(num){
    rev=0;

    while(num>0){
    rem=num%10;
    rev=(rev*10)+rem;
    num=parseInt(num/10);
    
    }
    return rev;
}


