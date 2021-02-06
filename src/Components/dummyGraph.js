//here we gonna create a dummy data for the program to work with

import React from 'react'

const createArray = () =>{
    let array = []
        let i = 0;
        while (i <100){
          let number =  Math.random()*100;
            array.push(number);
            i++;
        }
         return array;
}


const DisplayGraph = () =>{
    let newarray = createArray();


}