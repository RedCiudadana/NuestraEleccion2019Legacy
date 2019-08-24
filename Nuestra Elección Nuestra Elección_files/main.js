// In case we forget to take out console statements. IE becomes very unhappy when we forget. Let's not make IE unhappy
if(typeof(console) === 'undefined') {
	var console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
}

var host = window.location.host;
var path = window.location.pathname;

$(document).ready(function(){
	// face-to-face functions
	$('#candidate_one').on('change', function(){
		// http://stackoverflow.com/questions/19034120/jquery-depended-select-boxes-chosen?answertab=active#tab-top
		// based on http://jsfiddle.net/wfuBY/
		$('#candidate_two option').prop('disabled', false).trigger('chosen:updated');
		$('#candidate_two option[value="'+$(this).val()+'"]').prop('disabled', true).trigger('chosen:updated');
		//eof based on http://jsfiddle.net/wfuBY/
		if( $('#candidate_two').val() ) {
			var slug_two = $('#candidate_two').val();
			var slug_one = $(this).val();
			var data_path = path.split("/",4);
			var new_url = 'http://' + host + '/' + data_path[1] + '/' + data_path[2] + '/' + data_path[3] + '/' + slug_one + '/' + slug_two;

			window.location = new_url;
		}
	});

	$('#candidate_two').on('change', function(){
		$('#candidate_one option').prop('disabled', false).trigger('chosen:updated');
		$('#candidate_one option[value="'+$(this).val()+'"]').prop('disabled', true).trigger('chosen:updated');
		if( $('#candidate_one').val() ) {
			var slug_one = $('#candidate_one').val();
			var slug_two = $(this).val();
			var data_path = path.split("/",4);
			var new_url = 'http://' + host + '/' + data_path[1] + '/' + data_path[2] + '/' + data_path[3] + '/' + slug_one + '/' + slug_two;

			window.location = new_url;
		}
	})
	// eof face-to-face functions
	$('#classic_form').toggle();

	$('[name="wizard_view_button"]').on('click', function(){
		$('#wizard_form').toggle();
		$('#classic_form').toggle();

	});
	$('.pasos p a:first').attr("onclick","ga('send','event','Descarga Guia Ciudadana','click')");

});

/*
     FILE ARCHIVED ON 16:02:56 Jun 17, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:25:04 Aug 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.38
  PetaboxLoader3.datanode: 34.951 (4)
  LoadShardBlock: 38.576 (3)
  exclusion.robots: 0.397
  load_resource: 75.609
  RedisCDXSource: 5.114
  captures_list: 60.747
  PetaboxLoader3.resolve: 66.12
  CDXLines.iter: 13.401 (3)
  esindex: 0.012
*/