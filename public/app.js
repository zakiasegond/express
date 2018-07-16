$('#valider').on('click', function(){
	
	var login=$('input[name=nom]').val();
	console.log(login);
	var password=$('input[name=mdp]').val();
	console.log(password);

	$.ajax({
		method: "POST",
		url:"/",
		data: {login:login, password:password }
		}).done(function(){
			console.log("parfait");
		}).fail(function(){
			console.log("erreur");
		}).always(function(){
		 	console.log("complet");
		});	
	
});
