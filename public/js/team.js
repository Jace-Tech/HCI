const form = document.querySelector("#team")
const formDelete = document.querySelector("#delete")

const handleSubmit = async (data) => {
    const URL = "http://localhost:5000/team/"

    const options = {
        method: "Post",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const request = await fetch(URL, options)
    const response = await request.json()

    if (response?.teamName){
        location.href = "/team"
    }

    form.reset()
}


form.addEventListener("submit", e => {
    e.preventDefault()

    const phoneNumber = e.target.elements.phoneNumber.value
    const teamName = e.target.elements.teamName.value
    const location = e.target.elements.location.value
    const bankName = e.target.elements.bankName.value
    const branchName = e.target.elements.branchName.value
    const bankIFSCCode = e.target.elements.bankIFSCCode.value
    const accountNumber = e.target.elements.accountNumber.value

    const data = JSON.stringify({
        teamName,
        phoneNumber,
        bankName,
        location,
        branchName,
        bankIFSCCode,
        accountNumber
    })

    handleSubmit(data)
})


const handleDelete = async (id) => {
    const URL = "http://localhost:5000/team/"
    const options = {
        method: "Delete"
    }

    const request = await fetch(`${URL}/${id}`, options)
    const response = await request.json()

    if(response?._id){
        location.reload()
    }

}

formDelete.addEventListener('submit', e => {
    e.preventDefault()

    const ID = e.target.elements.deleteID.value
    handleDelete(ID)

})