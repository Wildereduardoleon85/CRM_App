$(document).ready(()=>{

        $.getJSON('datos.json', (data)=> {
        let clientes = data;
    
        $('#formulario').submit((e)=>{
            e.preventDefault();
            const busqueda = $('#busqueda').val();

            const resultado = clientes.filter((item)=>{
                return (item.rut === busqueda);
            });

            if (Object.keys(resultado).length>=1){

                $('#ingreseRut').html('Ingrese Rut');
                $('#nombres').text(resultado[0].nombres +' '+ resultado[0].apellidos);
                $('#imagen').attr('src', resultado[0].foto);
                $('#distribuidor').text(resultado[0].distribuidor);
                $('#departamento').text(resultado[0].departamento);
                $('#oficina').text(resultado[0].oficina);
                $('#email').text(resultado[0].email);
                $('#telefono').text(resultado[0].telefono);
                $('#fotoArticulo').attr('src', resultado[0].fotoArticulo);

            }else{
                $('#ingreseRut').html(`<p style="color: rgb(255, 255, 149)">
                <i class="fas fa-exclamation-triangle"></i> El rut ingresado no es válido!!</p>`);
            }

        })
        
        }).fail(()=> {
            console.log('Error al leer archivo JSON');
        });
    
    
    

    
});


