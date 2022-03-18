import { db } from "../modules/firebaseApp"
import { ref, remove, update } from "firebase/database"
export class Task
{
    constructor
    (
        public readonly id:string,
        public readonly task:string,
        public done:boolean
    )
    {
        this.displayTasks();
    }
    public displayTasks():void
    {
        const container = document.createElement("section");
        container.id = this.id;
        document.body.append(container);

        const h3:HTMLHeadingElement = document.createElement("h3");
        
        h3.innerText = this.task;
        if(this.done)
        {
            h3.style.textDecorationLine = "line-through";
        }
        // document.body.append(h3);

        const removeBtn:HTMLButtonElement = document.createElement("button");
        removeBtn.innerText = "X";
        container.append(h3, removeBtn);

        h3.addEventListener("click", () =>
        {
            this.toggleDone();
        })
        removeBtn.addEventListener("click", ()=>
        {
            const taskRef = ref(db, "/to-do/" + this.id);
            remove(taskRef);
        })
    }
    public clearTask():void
    {
        document.querySelector(`#${this.id}`).remove();
    }
    private toggleDone():void
    {
        this.done = !this.done;

        const taskRef = ref(db, "/to-do/" + this.id);
        const newDone = {};
        newDone["/done"] = this.done;
        update(taskRef, newDone);
    }
}