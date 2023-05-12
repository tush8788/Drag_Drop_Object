const imgBox = document.querySelector('.imgbox');
const whiteboxes = document.getElementsByClassName('whitebox');

// imgBox drag start event 
imgBox.addEventListener('dragstart', (e) => {
    //run at last 
    setTimeout(() => {
        e.target.className = 'hide'
    }, 0)
})

// imgBox drag end event 
imgBox.addEventListener('dragend', (e) => {
    e.target.className="imgbox"
})

//add event to all whitebox
for (whitebox of whiteboxes) {
    //if img drag here then this event is fire
    whitebox.addEventListener('dragover', (e) => {
        //if you not add priventDefault so you can not drop img here 
        e.preventDefault();
    })
    //if img come inside whitebox then this event is fire
    whitebox.addEventListener('dragenter', (e) => {
        e.target.className +=" dashed"
    })
    //if img come and then leave whitebox then this event is fire
    whitebox.addEventListener('dragleave', (e) => {
        e.target.className ="whitebox"
    })
    //if img drop in white box then this event is traget
    whitebox.addEventListener('drop', (e) => {
        e.target.append(imgBox)
    })

}