$('#site-search').on('click', function(e) {
    var $autoComplete = $('#toggle-auto-complete');

    if($autoComplete.is(':visible')) {
        $autoComplete.hide();
    } else {
        $autoComplete.show();
    }
});