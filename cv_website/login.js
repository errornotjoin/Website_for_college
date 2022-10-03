var Sgin_in_button =document.getElementById("Sgin_in_button")
var Sgin_up_button =document.getElementById("Sgin_up_button")
var SginUp_div = document.getElementById("SginUp_div")
var Sgin_In_div = document.getElementById("Sgin_In_div")
var sgin_up_div_hidden = true
var sgin_in = true
Sgin_up_button.addEventListener("click", function loging()
{
    if(sgin_up_div_hidden == true)
    {
        hidden_in()
        SginUp_div.style.visibility = "visible"
        sgin_up_div_hidden = false
    }
    else
    {
        hidden_sgin()
        
    }
})
Sgin_in_button.addEventListener("click", function ok()
{
    if(sgin_in == true)
    {
        hidden_sgin()
        Sgin_In_div.style.visibility = "visible"
        sgin_in = false
    }
    else
    {
        hidden_in()
    }
})
function hidden_sgin()
{
    SginUp_div.style.visibility = "hidden"
    sgin_up_div_hidden = true
}
function hidden_in()
{
    Sgin_In_div.style.visibility = "hidden"
    sgin_in = true

}
