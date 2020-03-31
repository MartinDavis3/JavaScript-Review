/**
 * Declaring variables.
 * 
 * VAR -Function-scope
 * 
 * LET - Block-scoped
 * 
 * CONST - Block-scoped, cannon be re-assigned (but for arrays or objects properties and elements can be added, removed or changed)
 * (Const can be assigned the result of a calculation, but only once)
 * Try and use in order Const, Let, Var
 * 
 */

 /**
  * Arrays.
  * 
  * In JS, even arraus are treated as an object.
  * Array has property called .length
  */

const seasons = [ 'summer', 'autumn', 'winter', 'spring' ];

// seasons = [ 'hiver' ]   //this will give an error - cannot reassign

// but can add an item
seasons.push( 'construction' );

console.log( seasons );

  /**
   *  .pop()
   *  Remove last element in an array (and return the valur)
   */

const myLastSeasonValue = seasons.pop();

console.log( 'Last item: ' + myLastSeasonValue );
console.log( seasons );

/**
 * .splice( index, numberOfElementsToReplace, newElement)
 * index: The position you are inserting to
 * 
 */

seasons.splice( 0, 1, 'construction' );  // Removes summer add construction
console.log( seasons );

seasons.splice( 1, 1 );  // Remove autumn
console.log( seasons );

// note: splice returns what is removed

seasons.pop();  // Remove spring.

console.log( seasons );

// Other replacement is the ol' fashioned:
seasons[0] = 'construction';  //Replace "winter" with "construction"
console.log( seasons );

/**
 *  .concat()
 * Merges two arrays
 */

const originalSeasons = [
    'summer',
    'autumn',
    'winter',
    'spring'

];

const allSeasons = seasons.concat( originalSeasons );  //Merges two arrays
console.log( allSeasons );

/**
 * Class  - an object blueprint
 */

class Product {
    constructor ( name = 'Product', price = 0.00, category = 'uncategorized')
    {
        this.name = name;
        this.price = Number( price );
        this.category = category;
    }
    priceWithTax()
    {
        return this.price * 1.05;
    }
        
    output ( element )
    {
        if ( element !== null )
        {
            //Note that innerHTML will reset the element, which will remove any event listener. Can use create element and append child instead.
            element.innerHTML += `  
                <dl>
                    <dt>Name:</dt>
                    <dd>${this.name}</dd>
                    <dt>Category:</dt>
                    <dd>${this.category}</dd>
                    <dt>Price:</dt>
                    <dd>${this.price}</dd>
                </dl>
            `;
        }
    }
}

const myFirstProduct = new Product()
console.log( myFirstProduct );   // myFirstProduct is not empty, it has the defaults specified in the constructor.

const aPartialProduct = new Product( 'Named product', 16.55 );
console.log( aPartialProduct );

console.log( aPartialProduct.priceWithTax() );

const shoe = new Product( 
    'Nike Shoe',
    54.87,
    'footwear'
);

const myElement = document.body;
//shoe.output( myElement );

/**
 * for .. of loop
 */

const myProducts = [ myFirstProduct, aPartialProduct, shoe ];

for ( let product of myProducts ) {
    console.log( product );
    // product.output( myElement ); 
}

console.log( shoe.price );

/**
 * While loop
 * (Termination Condition)
 */

let myIterator = 0;
while ( myIterator < 8 )
{
    console.log( 'While iterator: ' + myIterator );
    myIterator = myIterator + 2;
}

/**
 * For Loop
 * for ( )
 */

for ( let thisIterator = 50; thisIterator > 20; thisIterator = thisIterator - 3 ) {
    console.log( thisIterator );
}

/**
 * Functions
 * edabit example
 */

const arrayOfMultiples = ( num, length ) => {
    num = Number( num );
    length = Number( length );
    let i = 1;
    let arr = [];
    while ( i <= length ) {
        arr.push( num * i );
        i = i + 1;
    }
    return arr;
 }

 console.log( arrayOfMultiples( 7, 5 ) );


/**
 * Dom & Events
 */

 // Target elements
const multiplesForm = document.querySelector( 'form' );
const numField = document.querySelector( '[name="num"]' );
const lengthField = document.querySelector( '[name="length"]' );
const multiplesOutputElement = document.querySelector( 'dl' );

multiplesForm.addEventListener( 'submit', event => {
    event.preventDefault();
    const numVal = numField.value;
    const lengthVal = lengthField.value;
    const result = arrayOfMultiples( numVal, lengthVal );
    multiplesOutputElement.innerHTML = `
        <dt>Values:</dt>
        <dd>${result}</dd>
        `;    
} );

/**
 * More DOM
 */

const productForm = document.querySelector( '#product-form' );
const productNameField = document.querySelector( '[name="name"]' );
const productPriceField = document.querySelector( '[name="price"]' );
const productCategoryField = document.querySelector( '[name="category"]' );

const productSection = document.querySelector( 'section' );

productForm.addEventListener( 'submit', event => {
    event.preventDefault();  //if you don't use this, the output dissapears again immediatly after appearing.
    const productNameFieldValue = productNameField.value;
    const productPriceFieldValue  = productPriceField.value;
    const productCategoryFieldValue = productCategoryField.value;
    
    const newProduct = new Product(
        productNameFieldValue,
        productPriceFieldValue,
        productCategoryFieldValue);

    newProduct.output( productSection );
} );

/**
 * String methods
 */

 const str = 'Hello, World!';

 /**
  * .toUpperCase() and .toLowerCase()
  */

console.log( str.toUpperCase(), str.toLowerCase() )

/**
 * .includes( needle )
 * Search for a substing
 * needle: Your search term.
 */

console.log( str.includes( 'Bob' ) );  // gives false, Bob was not found

console.log( str.includes( 'Hello' ) );  // gives true, Hello was not found

console.log( 'My name is Bob'.includes( 'ob' ) );  // gives true, ob was not found in lieral string

/**
 * .slice( stringStart, StringEnd )
 */

console.log( str.slice( 3, 6 ) );  // gives "lo,"

/**
 * 
 */

const capitalizeFirstLetter = string => {
    let firstLetter = string.slice( 0, 1 );
    firstLetter = firstLetter.toUpperCase();
    // Get updated string.
    const updatedString = firstLetter + string.slice( 1, string.length );
    return updatedString;
}

console.log( capitalizeFirstLetter( 'my lowercase sentence' ) );

const capitalizeFirstLetterInSentence = string => {
    const words = string.split( ' ' );
    for ( let i = 0; i < words.length; i++ ) {
        words[i] = capitalizeFirstLetter( words[i] );
    }
    const sentence = words.join( ' ' );  // .join is an array method
    return sentence;
}

console.log( capitalizeFirstLetterInSentence( 'my lowercase sentence' ) );

console.log( str.replace( 'l', 'o' ) ); //Only replaces first occurance

console.log( str.replace( /l/g, 'o' ) ); //use Regular expression to replace all occurrances


































