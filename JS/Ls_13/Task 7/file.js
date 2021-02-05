n=10

number:
for (let i=2; i<n; i++){
    for(let j=2; j<i; j++){
        if(i%j==0){
            continue number;
        }
    }
    alert(i);
}

/*for (let i=1; i<10; i++){
    if (i%2==0){
        continue;
    }
    else if (i%1==0 && i%i==0){
        alert(i);
    }
}*/