// // we are creating 5 Little Ducks

// var count = 10;

// while (count > 0) {
//     console.log(count + " little ducks went swimming one day. Over the hills and far away. Mother Duck said QUACK QUACK QUACK QUACK! But only " + (count - 1) + " little ducks came back!");/*concatenation is the +++ stuff in string above*/
//     /*count--;*/
//     count = count - 1;
//     }

//     console.log("No little ducks went swimming one day. Over the hills and far away. Mother Duck Said Quack Quack Quack Quack! And all five little ducks came back!");



const list = document.querySelector('#list');

for(var ducks = 10; ducks >= 1; ducks--) {
    // console.log(ducks);
    let textString = `${ ducks } little ducks went swimming one day. Over the hills and far away. Mother Duck said QUACK QUACK QUACK QUACK! But only ${ ducks - 1} little ducks came back!`
    // console.log(textString);

    const verse = document.createElement('p');
    verse.textContent = textString;

    list.appendChild(verse);

    console.log("No little ducks went swimming one day. Over the hills and far away. Mother Duck Said Quack Quack Quack Quack! And all five little ducks came back!");
}