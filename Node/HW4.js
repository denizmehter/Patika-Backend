import * as fs from 'node:fs';

fs.writeFile("Node/employees.json", `{"name": "Employee 1 Name", "salary": 2000}`, (err)=>{
    if (err) throw err;
    console.log("File created");
});


fs.readFile('Node/employees.json', 'utf8', (err,data)=>{
    if (err) throw err;
    console.log(data);
});

fs.appendFile('Node/employees.json', '\n{"name": "Employee 2 Name", "salary": 1000}', (err,data)=>{
    if (err) throw err;
    console.log('File has been updated')
});

fs.unlink("Node/employees.json", (err) => {
    if (err) throw err;
    console.log("The file has been removed.");
});