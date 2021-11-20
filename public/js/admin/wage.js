const wageForm = document.querySelector("#wageForm")
const allowance = document.querySelector("#allowance")
const benefit = document.querySelector("#benefit")
const meter = document.querySelector("#meter")

const getWage = async (data) => {
    const URL = "http://localhost:5000/wage"
    const option = {
        method: "Post",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const request = await fetch(URL, option)
    const response = await request.json()

    console.log(response)
}


wageForm.addEventListener('submit', e => {
    e.preventDefault()

    const team = e.target.elements.team.value
    const category = e.target.elements.category.value
    const meter = e.target.elements.meter.value
    const benefit = e.target.elements.benefit.value
    const allowance = e.target.elements.allowance.value
    const work = e.target.elements.work.value
    const month = e.target.elements.month.value

    const wage = (+work * +meter) + (+allowance) + (+benefit)

    const data = JSON.stringify({
        team,
        category,
        meter,
        benefit,
        allowance,
        work,
        month,
        wage
    })
})