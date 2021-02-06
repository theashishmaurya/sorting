import React, {useState } from 'react'
import createArray from './NewData';
import { BubbleSort, InsertionSort } from './sortingAlgos';


//style = {{margin : '50px', minWidth : '1200px' , minHeight : '500px'}
const Container = ()=>{
    const [arr , setArray] = useState(createArray())
    const [steps , setSteps] = useState([]);
    const [selectedAlgorithm , setSelectedAlgorithm] = useState ();
    const [isSorted , setIsSorted] = useState (false);
   
    const algorithms = {
        BubbleSort ,
        InsertionSort ,
    }
    
        
   const handleCreateNewData = ()=>{
        let newarr = createArray();
        setArray ([]);
        
        setArray([...newarr]);
        setSteps ([]);
        
            if ( algorithms[selectedAlgorithm] !== undefined){
                algorithms[selectedAlgorithm](newarr ,setSteps);
            }

        }
       
    
    const handleOnchange = (e) =>{
        console.log(e.target.value);
        setSelectedAlgorithm(e.target.value);
        algorithms[e.target.value](arr,setSteps)
       

}
    
   const setTimeoutfun = ()=>{
    //    let steps = steps;
    if(isSorted === false){
        let i = 0 ;
       while (i < steps.length){
           let current = i ;
           setTimeout(() => {
            setArray(steps[current]);

           }, 200 * i);
           i++;

       }
       setIsSorted(true)


    }
    else {
        alert("Already sorted")
    }
       


   }
   const handleShowData = () =>{
       console.log(steps)

   }
    
    return(
        
        <div className="container "  style = {{margin : '50px ', minWidth : '1200px' , minHeight : '500px'}}>
        <div className="row">
            <div className="col s2 " style = {{margin : '20px' , padding : '20px'}}>
                <div className="row" ><a class="waves-effect waves-light btn green" onClick = {handleCreateNewData}>Create New Array</a></div>
               <form action="#" >
                    <p>
                    <label>
                        <input className = "with-gap" name="group1" 
                        type="radio"                       
                        value = "BubbleSort"
                        onChange = {handleOnchange}
                        
                        
                        />
                        
                        <span>Bubble Sort</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input className = "with-gap" name="group1" 
                        type="radio" 
                        value = "InsertionSort"
                        onChange = {handleOnchange}
                        
                    />
                        <span>Insertion Sort</span>
                    </label>
                    </p>
                </form>
                <div className="row"><a class="waves-effect waves-light btn black" onClick= {handleShowData}>show</a></div>
                <div className="row"><a class="waves-effect waves-light btn black" onClick= {setTimeoutfun}>Sort</a></div>


            </div>
            <div className="col s9 grey" style = {{padding : '10px'}}>
                <div style = {{minWidth : '1000px' , minHeight : '500px'}}>
                   {arr.map((val , index)=>(
                       
                       
                       <div key = {index}>
                       <div style = {{height : '1px'}}></div>
                        <div className="bar black" style = {{height : '15px' , width : val*8}}> </div>
                        <div style = {{height : '1px'}}></div>
                        </div>
                       
                   )
                   )
                       
                   
                   }
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Container ;