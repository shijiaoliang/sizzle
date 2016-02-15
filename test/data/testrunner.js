(function() {
	var fixture;

	jQuery( "html" ).attr({
		id: "html",

		lang: "en",
		"xml:lang": "en",

		dir: "ltr"
	});

	jQuery( "body" ).attr( "id", "body" );

	// Look for karma template, if found, we are in the karma suite
	if ( window.__html__ ) {
		fixture = window.__html__[ "test/data/fixtures.html" ];

		// See fixtures.html
		window.setup = function() {
			var $fixture = jQuery( "#dl" );
			jQuery( "#qunit-fixture" ).remove();
			if ( $fixture.length ) {
				$fixture.replaceWith( fixture );
			} else {
				jQuery( document.body ).append( fixture );
			}
		};

	// If template has not been found, it must be a QUnit suite
	} else {
		QUnit.config.autostart = false;
		jQuery.get( "data/fixtures.html" ).done(function( html ) {
			fixture = html;
			QUnit.start();
		});

		window.setup = function() {
			jQuery( "#qunit-fixture" ).replaceWith( fixture );
		};
	}
})();
