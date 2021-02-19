var inputs = document.querySelectorAll(".container input")

function fun()
{
    var data = this.dataset.sizing || '';
    console.log(this.value,' ',data,' ',this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + data);   
}

inputs.forEach(input => input.addEventListener('change',fun));
inputs.forEach(input => input.addEventListener('mousemove',fun));

