const meterForm = document.querySelector("#meter")
const deleteForm = document.querySelector("#delete")


const handleSubmit = async (data) => {
    const options =  {
        method: 'Post',
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }
    const request = await fetch("http://localhost:5000/meter", options)
    const response = await request.json()

    if(response?._id){
        location.reload()
    }
}

const handleDelete = async (id) => {
    const options =  {
        method: 'Delete',
    }
    const request = await fetch(`http://localhost:5000/${id}`, options)
    const response = await request.text()

    console.log({response})
    // if(response?._id){
    //     location.reload()
    // }
}

meterForm.addEventListener("submit", e => {
    e.preventDefault()

    const meter = e.target.elements.meter.value
    const data = JSON.stringify({
        meter
    })
    handleSubmit(data)
})

deleteForm.addEventListener("submit", e => {
    e.preventDefault()

    const id = e.target.elements.deleteID.value
    handleDelete(id)
})