
var someObject = {
    'student1' : {
        'fName': 'Hakeem',
        'lName': 'khamis',
        'age' : '15'
    },
    'student2' : {
        'fName': 'Ahamd',
        'lName': 'kareem',
        'age' : '17'
    },
    'student3' : [
        {
            'fName': 'Sameer',
            'lName': 'khalil',
            'age' : '19'
        }, {
            'fName': 'Salim',
            'lName': 'Mohamed',
            'age' : '22'
        }, {
            'fName': 'kenan',
            'lName': 'karimpo',
            'qty' : '25'
        }
    ]
};

Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

console.log(Object.byString(someObject, 'student1.fName'));
console.log(Object.byString(someObject, 'student2.age'));
console.log(Object.byString(someObject, 'student3[0].lName'));
            