jQuery(document).ready(function() {
	//	load login settings on load
	loadLoginSettings();

	//	handle login action
	jQuery('form#loginSettingsInit').submit(function() {
		localStorage.setItem('host', jQuery(this).find('input[name="host"]').val());
		localStorage.setItem('username', jQuery(this).find('input[name="username"]').val());
		localStorage.setItem('password', jQuery(this).find('input[name="password"]').val());
	});
});


function loadLoginSettings() {
	jQuery('form#loginSettingsInit	input[name="host"]').val(localStorage.getItem('host'));
	jQuery('form#loginSettingsInit	input[name="username"]').val(localStorage.getItem('username'));
	jQuery('form#loginSettingsInit	input[name="password"]').val(localStorage.getItem('password'));
}