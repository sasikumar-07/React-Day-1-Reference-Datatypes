function Task()
{
    let myobject ={name:"Madras"};
    let newobject =myobject;
    myobject.name ="chennai";
    let myarray =["a","e","i","o"];
    let vowelarray = myarray;
    myarray.push("u");
    console.log(myarray)
    const hi=()=>{alert("check the console output!")}
    return <div><button onClick={hi}>Referencen Data Types</button></div>
}
ReactDOM.render(<Task/>,document.getElementById('mydiv'))