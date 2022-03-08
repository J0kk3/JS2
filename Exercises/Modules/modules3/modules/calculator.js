/*    funktion 1 ska addera numren och returnera värdet
    funktion 2 ska multiplicera numren och returnera värdet
    */

    function addNums(num0, num1)
    {
        const addText = document.createElement("h1");
        let total = num0 + num1;
        addText.innerText = total;     
        document.body.appendChild(addText);   
    }
    function multiplyNums(num0, num1)
    {
        const multiplyText = document.createElement("h1");
        let total = num0 * num1;
        multiplyText.innerText = total;
        document.body.appendChild(multiplyText);
    }
    export{addNums, multiplyNums};