export class PrimeCalculator{
    static isPrime(digit:number):boolean{
        if(digit==1){
            return true;
        }
        let index:number=2;
        for(index=2;index<digit/2;index++){
            if(digit%index==0){
                return false;
            }
        }
        return true;
    }

    static findNthPrime(digit:number):number{
        let index:number=1;
        let count=0;

        while(count<digit){
            if(this.isPrime(index)){
                count++;
            }
            index++;
            console.log(index);
        }
        return index-1;    
    }
    
}