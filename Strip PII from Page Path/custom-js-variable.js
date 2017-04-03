function() {

    var params = ['name', 'email', 'fname', 'lname', 'firstname', 'lastname', '*|subid|*', 'lang', 'page_id', 'code', 'goal', 'as', 'eb', 'preview_id'];
    var _page = {{Page Path}};
    var a = document.createElement('a');
    a.href = _page;

    if (a.search) {

        var qps = a.search.replace('?', '&');
        var i;

        for (i = 0; i < params.length; i++) {

            var _param = params[i];
            var regex = new RegExp('&' + _param + '=[^&]*(&|$)', 'gi');
            qps = qps.replace(regex, '&')

        }
        qps[0] === '&' ? qps = qps.slice(1) : '';
        a.search = qps;

    }

	var tmp = window.location.protocol + '//' + window.location.host;
	return a.href.substring(tmp.length);

}