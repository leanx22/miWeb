$(()=>{

    verificarLogin();

});

function verificarLogin():void
{
    let token:string|null = localStorage.getItem('user_data');

    if(token==null)
    {
        IrAlogin();
    }

    /* //verificar el JWT!
    $.ajax({
        type:'GET',
        url:URL_PAGINA+"login",
        dataType:"json",
        data:{},
        headers:{'Authorization':'Bearer '+token}, //ESTE ES EL IMPORTANTE ACA, PARA ENVIAR EL TOKEN EN EL HEADER!
        async:true
    }).done(function(obj_ret:any){

        if(obj_ret.exito == false)
        {
            IrAlogin();
        }

        let data = JSON.parse(obj_ret.payload.usuario)

        $('#nombre_usuario').html(data.nombre);

    }).fail(()=>{
        IrAlogin();
    });
    */

}

function IrAlogin():void
{
    $(location).attr('href',URL_PAGINA+'login');
}