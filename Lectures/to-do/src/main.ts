import { onValue, ref, push, update} from "firebase/database";
import { db } from "./modules/firebaseApp";
import { Task } from "./modules/Task";

const dbRef = ref(db, "/to-do");
let tasks:Task[] = [];

onValue(dbRef, snapshot=>
    {
        const todoData = snapshot.val();
        for (const task of tasks)
        {
            task.clearTask();
        }
        
        tasks = []; //Empty the array before we add new objects to it
        console.log(todoData);

        for (const key in todoData)
        {
            console.log(key);
            tasks.push(new Task
                (
                    key,
                    todoData[key].task,
                    todoData[key].done
                ));
        }
        console.log(tasks);
    });

    document.querySelector("#add").addEventListener("click", e=>
    {
        e.preventDefault();
        const taskToAdd =
        {
            task: document.querySelector("input").value,
            done: false
        }
        const newKey:string = push(dbRef).key;
        const newTask = {};
        newTask[newKey] = taskToAdd;

        update(dbRef, newTask);
    });