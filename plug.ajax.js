/**!
 * ajax - v1.0.04
 * PlugAjax
 * https://github.com/kdesignbrasil/plug-ajax 
 * Leandro Gonçalves dos Anjos
*/
var PlugAjax = (function () {
    return function (m, u, d, t, callback) {
        var request = $.ajax({
            type: m, url: u, data: d,
            processData: false,
            contentType: false,
            dataType: t
        });
        return request.done(function (data) { callback(data.menssage, data.error); });
    }
})();
var docON = (function () {
    return function (a, c, m, u, d, callback) {
        $(document).on(a, c, function (e) {
            e.preventDefault();
            var f = new FormData(this);
            return PlugAjax(m, u, f, d, callback);
        });
    }
})();
