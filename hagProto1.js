'use strict'; /*jslint node:true*/

module.exports = class HagglesMcGee {
    constructor(me, counts, values, max_rounds, log){
        this.me = me;
        this.counts = counts;
        this.values = values;
        this.rounds = max_rounds;
        this.log = log;
        this.total = 0;
        for (let j = 0; j < counts.length; j++)
            this.total += counts[j] * values[j];
    }
    

    offer(o) {

            this.log(`${this.rounds} rounds left`);
             this.rounds--;
             this.log(`E31`);

        // ask for everything if first turn
            if(this.me == 0 && this.rounds >= 4)
            {
                return this.counts;
            }


            if(o) 
            {
                  

                    // make array of all items with value to me
                    let omain = []; 
                                    
                    for ( let i = 0; i < this.counts.length; i++)
                    { 

                        if (this.values[i] > 0)
                        {
                            omain = omain.concat(this.counts.slice(i, (i + 1)));     
                        } 
                        else 
                        {
                            omain[i] = 0;
                        }

                    }
                    

                    //calculate total value of offer
                        let sum = 0;
                        for (let a = 0; a < o.length; a++)
                        {
                        sum += this.values[a] * o[a];
                        }
                    // if the sum is equal to the max value accept
                        if (sum >= this.total)
                        {
                        return;
                        }
                        

                        else
                        {
                            switch(this.rounds + 1)
                            {
                                case 5:
                                {
                                    return omain;
                                }
                                case 4:
                                {
                                    let l = omain;
                                    let extraObjectCounter = 0;

                                    while(extraObjectCounter < 1)
                                    {
                                        for(let a = 0; a < l.length; a++)
                                            {
                                                if(l[a] > 0 && this.values[a] <= 1)
                                                {
                                                    l[a] = l[a] - 1;
                                                    extraObjectCounter++;
                                                }
                                                else
                                                {
                                                    extraObjectCounter++;
                                                }
                                            }
                                    }
                                }
                                case 3: 
                                {
                                    let p = omain; 
                                    let extraObjectCounter = 0;

                                    while(extraObjectCounter < 2)
                                    {
                                        for(let a = 0; a < p.length; a++)
                                            {
                                                if(p[a] > 0 && this.values[a] <= 1)
                                                {
                                                    p[a] = p[a] - 1;
                                                    extraObjectCounter++;
                                                }
                                                else
                                                {
                                                    extraObjectCounter++;
                                                }
                                            }
                                    }
                                    return p;
                                }
                                case 2:
                                {
                                    let s = omain; 
                                    let extraObjectCounter = 0;
                                
                                    while(extraObjectCounter < 2)
                                    {
                                        for(let a = 0; a < s.length; a++)
                                            {
                                                if(s[a] > 0 && this.values[a] <= 2)
                                                {
                                                    s[a] = s[a] - 1;

                                                    extraObjectCounter++;
                                                }
                                                else if (s[a] > 0 && this.values[a] <= 3)
                                                {
                                                    extraObjectCounter++;
                                                }
                                                else
                                                {
                                                    extraObjectCounter++;
                                                }
                                            }
                                    }
                                    return s;
                                }
                                case 1:
                                {
                                    let d = omain;
                                    let extraObjectCounter = 0;

                                    while(extraObjectCounter < 1)
                                    {
                                        for(let a = 0; a < d.length; a++)
                                            {
                                                if(d[a] > 0 && this.values[a] <= 1)
                                                {
                                                    d[a] = d[a] - 1;
                                                    extraObjectCounter++;
                                                }
                                                else if(d[a] > 0 && this.values[a] <= 2)
                                                {
                                                    d[a] = d[a] - 1;
                                                    extraObjectCounter++;
                                                }
                                                else
                                                {
                                                    extraObjectCounter++;
                                                }
                                            }
                                    }
                                    return d;
                                }
                                default:

                                return omain;
                            }
                                
                        }

            }
                    
        }
};

 










             
                           








































    
    
    
        
