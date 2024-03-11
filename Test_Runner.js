



function type_coersion_Test(){
    var pass = true;
    var x = "10";
    var y = 10;



    var a = String(x)+y;
    var b = Number(x)+y;

    //var case1 = typeof(a) === "string";
    var case1 = a instanceof String;
    var case2 = typeof(b) === Number;
    //var case2 = b instanceof Number; //TODO: How can I compare using its wrapper classes?


    console.log(a);
    console.log(typeof(a));
    console.log(case1);
    console.log(b);
    console.log(case2);
    


    pass = (case1 && case2)? true: false;

    return pass;
}


function add_toArray_Test(){
    var pass = true;
    const array = [];
    try{
        array.push(1);
        array.push(2);
        array.push(3);
        console.log(array);
    }catch(err){
        console.log(err);
        pass = false;
    }
    return pass;
}

function stream_Test(){
    var pass = true;
    const array = [1,2,3,4,5];
    try{
        array.forEach((num) => {
            console.log(num*2);
        });
    }catch(err){
        pass = false;
        console.log(err);
    }
    return pass;
}

function assertTrue_Test(){
    return true;
}

//This will include all methods to be tested
export function runTests(){
    //console.log(assertTrue_Test.name + "Concat");
    //console.log(assertTrue_Test.name, "NotherConcat");
    console.log(assertTrue_Test.name + ": " + (assertTrue_Test()? "Passed":"Fail"));
    console.log(stream_Test.name + ": " + (stream_Test()? "Passed":"Fail"));
    console.log(add_toArray_Test.name + ": " + (add_toArray_Test()? "Passed":"Fail"));
}

export function runTestList(){
    const testSet = [];
    testSet.push(assertTrue_Test);
    //testSet.push(stream_Test);
    //testSet.push(add_toArray_Test);
    testSet.push(type_coersion_Test);
    
    testSet.forEach((method) => {
        console.log(method.name + ": " + (method()? "Passed": "Fail"));
    });
}

