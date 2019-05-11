jQuery(document).ready(function($) {

    //hide all panels to start
    var panels = $('.templeAccordian > .content').hide();

    // show first panel
    // panels.first().show();

    // on click
    $('.templeAccordian > .dt > a').click(function() {
        var $this = $(this);

        // slide panels up
        panels.slideUp();

        // slide down selected file
        $this.parent().next().slideDown();

        return false;
    });
});