import inquirer from "inquirer";
let todos = [];
let condition = true;

while(condition)
{
   let addTask = await inquirer.prompt(
    [
        {
            name: 'todo',
            type: 'input',
            message: 'Eid ki shopping kya ki'
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: 'aur kya khreeda',
            default: 'false'
        }
    ]
   );

   todos.push(addTask.todo);
   condition = addTask.addmore
   console.log(todos)
}