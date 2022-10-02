window.onload = () => {
    let btn = document.querySelector('.button');
    let textarea = document.querySelector('textarea');
    let link = '';
    let arr='';
    btn.onclick = () => {
        let min = document.querySelector('.min-num').value;
        let max = document.querySelector('.max-num').value;
        let count = document.querySelector('.count').value;
        try {
            if (min >= max) {
                alert('Минимальное число, должно быть меньше максимального');
                let min = document.querySelector('.min-num').value;
                let max = document.querySelector('.max-num').value;     
            }
            if (min < max) {
                Myfetch(min, max, count, textarea);
            }
        } catch (e) {
            console.log(e);
        }
    }
    async function Myfetch(min, max, count, result) {
        
        
            link = 'https://www.random.org/integers/?num=' + count + '&min=' + min + '&max=' + max + '&col=1&base=10&format=plain&rnd=new'
            await fetch(link)
                .then(data => {
                    return data.text();
                })
                .then(data2 => {
                    console.log(data2);
                    arr = Array.from(data2);

                })
         

        let array_new = arr.filter(function (elem, index) {
            if (elem == '\n') return false
            else return elem;       
        })
        console.log(array_new)
            result.textContent = array_new;
        

    }



        
    }



