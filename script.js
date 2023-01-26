

        // set timeout


        const myname = document.querySelector('#showyname');
        const btn = document.querySelector('#btn');
        const showyname = () => {
            myname.innerHTML = "Loading...."
            setTimeout(() => {
                myname.innerHTML = "ajay rathore"
            }, 1000)
        }
        btn.addEventListener('click', showyname);
