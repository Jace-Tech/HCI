const form = document.querySelector("form")
const message = document.querySelector("#message")

const handleSubmit = async (data) => {
    const URL = "http://localhost:5000/auth/admin/login"
    const options = {
        method: "Post",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const request = await fetch(URL, options)
    const response = await request.json()

    if(!response?.error){
        localStorage.setItem("ADMIN", JSON.stringify(response))
        message.className = "alert alert-success opacity-8 text-light mb-3 py-2 text-sm"
        message.textContent = "Success! Redirecting..."

        setTimeout((
            
        ) => location.href = "/admin/dashboard", 5000)
    }
    else{
        message.textContent = response?.error
        message.className = "alert alert-primary opacity-8 text-light mb-3 py-2 text-sm"
    }

}


form.addEventListener('submit', e => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value

    const data = JSON.stringify({
        username,
        password
    })

    handleSubmit(data)
})