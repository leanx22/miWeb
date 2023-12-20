"use strict";
///<reference path="../../node_modules/@types/jquery/index.d.ts" />
const URL_PAGINA = "https://leandev.000webhostapp.com/";
function EnviarAlert(mensaje, tipo = "success") {
    let alerta = '<div id="alert_' + tipo + '" class="alert alert-' + tipo + ' alert-dismissable">';
    alerta += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    alerta += '<span class="d-inline-block text-truncate" style="max-width: 450px;">' + mensaje + ' </span></div>';
    return alerta;
}
//# sourceMappingURL=links.js.map