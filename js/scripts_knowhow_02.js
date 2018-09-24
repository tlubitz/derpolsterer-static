$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

/* before / after slider by twenty twenty */
$(function() {
    $(".bac[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7,before_label:'vorher',after_label:'nachher'});
});
