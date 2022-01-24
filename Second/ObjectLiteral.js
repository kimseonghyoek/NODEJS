var sayNode = function() {
    console.log('Node!!');
};
var es = 'es';
var oldObject = {
    sayJs: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = "Fantastic";
oldObject.sayNode();
oldObject.sayJs();
console.log(oldObject.ES6);