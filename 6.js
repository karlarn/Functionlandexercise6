const buyChocolate=()=>{
    const bought={
        item:'Milk Chocolate'
    }
    return bought
}

const addFlavoring= (object)=>{
    object.newFlavor='Mint'

    return object
}

const makeBarkMixture=(object)=>{
    if(object.newFlavor==='Mint'){
         object.mixed=true
    }
    else{
         object.mixed=false
    }
    return object
}

const bakeCandy=(object)=>{
    if(object.mixed===true){
     object.baked=true
    }
    else{
     object.baked=false
    }
    return object
}

const breakBark=(object)=>{
    if(object.baked===true){
        return ['Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece']
    }
    return object
}

const start=buyChocolate()
const flavor=addFlavoring(start)
const mix=makeBarkMixture(flavor)
const candy=bakeCandy(mix)
const bark=breakBark(candy)
console.log(bark)
