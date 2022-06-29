var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'dksubfree.site',
    user: 'wvdcuodd_freenumber',
    password: 'FREENUMBER',
    database: 'wvdcuodd_freenumber'
});
function insertNumber(value_1, value_2, value_3, value_4, value_5, value_6, value_7) {
    connection.query(`INSERT INTO number (number,num1,num2,num3,note) VALUES (?,?,?,?,?)`, [value_2, value_3, value_4, value_5, value_7], function (err, results) {
        if (err) throw err;
        console.log(results);
    });
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNumber() {
    s1 = getRndInteger(1, 6)
    s2 = getRndInteger(1, 6)
    s3 = getRndInteger(1, 6)
    sum = s1 + s2 + s3
    return {
        'number': sum,
        'num1': s1,
        'num2': s2,
        'num3': s3
    }
}
i = 1
function vongLap() {
    var delayInMilliseconds = 500; //1 second
    setInterval(function () {
        //your code to be executed after 1 second
        ga = getNumber()
        a = ga.number
        b = ga.num1
        c = ga.num2
        d = ga.num3
        insertNumber('', a, b, c, d, '', '')
    }, delayInMilliseconds)
}
vongLap()



