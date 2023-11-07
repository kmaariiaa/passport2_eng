const node_for_click = document.getElementById('for_click')

function find_edit()
{
    document.all[11].innerHTML = "Maria"
    document.all[10].innerHTML = "Kuznetsova"
    document.all[12].innerHTML = "Dmitrievna"
    document.all[13].innerHTML = "fem"
    document.all[15].innerHTML = "Saratov"


}

node_for_click.addEventListener("click",find_edit)