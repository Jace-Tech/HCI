const form = document.querySelector("#teamMember")
const formDelete = document.querySelector("#delete")

const handleDelete = async (id) => {
    const URL = "http://localhost:5000/team_member/"
    const options = {
        method: "Delete"
    }

    const request = await fetch(`${URL}/${id}`, options)
    const response = await request.json()

    if(response?._id){
        location.reload()
    }

}


const handleSubmit = async (data) => {
    const URL = "http://localhost:5000/team_member/"

    const options = {
        method: "Post",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const request = await fetch(URL, options)
    const response = await request.json()

    if(response?.name){
        location.href = "/team_member"
    }

    form.reset()
}


form.addEventListener("submit", e => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const teamName = e.target.elements.teamName.value
    const bankName = e.target.elements.bankName.value
    const branchName = e.target.elements.branchName.value
    const bankIFSCCode = e.target.elements.bankIFSCCode.value
    const accountNumber = e.target.elements.accountNumber.value

    const data = JSON.stringify({
        name,
        teamName,
        bankName,
        branchName,
        bankIFSCCode,
        accountNumber
    })

    handleSubmit(data)
})


formDelete.addEventListener('submit', e => {
    e.preventDefault()

    const ID = e.target.elements.deleteID.value
    handleDelete(ID)

})