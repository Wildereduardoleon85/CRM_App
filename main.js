$(document).ready(()=>{

        $.getJSON('datos.json', (data)=> {
        let clientes = data;
    
        $('#formulario').submit((e)=>{
            e.preventDefault();
            let busqueda = $('#busqueda').val();

            let resultado = clientes.filter((item)=>{
                return (item.rut === busqueda);
            });

            $('#nombres').text(resultado[0].nombres +' '+ resultado[0].apellidos);
            $('#imagen').attr('src', resultado[0].foto);
            $('#distribuidor').text(resultado[0].distribuidor);
            $('#departamento').text(resultado[0].departamento);
            $('#oficina').text(resultado[0].oficina);
            $('#email').text(resultado[0].email);
            $('#telefono').text(resultado[0].telefono);
            $('#fotoArticulo').attr('src', resultado[0].fotoArticulo);
           

        })
        
        }).fail(()=> {
            console.log('Error al leer archivo JSON');
        });
    
    
    

    
});


