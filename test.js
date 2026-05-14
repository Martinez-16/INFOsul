   const btn = document.getElementById("botao");

        btn.addEventListener('click', () => {
            let resp = window.confirm('Você quer mesmo participar da pesquisa?')
            if (resp == true) {
                alert('Você aceitou participar')
            }
            else alert('Vocẽ não aceitou')

        });