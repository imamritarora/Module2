let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
 var arrayy= arr.map(PrintDeveloperbyMap);
  function PrintDeveloperbyMap(arrr) {
    //Write your code here , just console.log
    if (arrr.profession=="developer"){
        console.log(arrr);
    }
  } console.log(arrayy);
  var arrayyForEAch=arr.forEach(PrintDeveloperbyForEach)
  function PrintDeveloperbyForEach(arrr) {
    //Write your code here , just console.log
    if (arrr.profession=="developer"){
        console.log(arrr);
    }
  }
  var arrayyAdd=arr.forEach(addData)
  function addData(arrr) {
    //Write your code here, just console.log
    var addarray=[{id:4,name:"susan",age:"20",profession:"intern"}]
   addarray.push(arrr);
  }