# $.ajax jquery

Esse é um algoritmo de teste com base nos request ajax.

Estrutura ajax normal:

```js
	$(document).on("submit", '.form', function (e) {
		e.preventDefault();
		var form = new FormData(this);
		$.ajax({
			type: "POST",
			url: "{{ url }}",
			data: form,
			processData: false,
			contentType: false,
			dataType: 'json',
			success: function (data) {
				console.log(data); 
			}
		});
	});
```

Nova estrutura utilizando o PlugAjax:

```js
	var call_a = function (m, e) {console.log(m + e);}
	docON("submit", ".form-a", "POST", "testeA.php", "json", call_a); 
```

Arquivo PlugAjax Minify pesando 392 bytes:


# Installation


```js
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="plug.ajax.min.js"></script>
```

# Example 

```html
	<p class="a"></p>
    <p class="b"></p>
    <hr>
    <form class="form-a"><input type="submit" value="submit"></form>
    <form class="form-b"><input type="submit" value="submit"></form> 
```
```js
	var call_a = function (m, e) {  
		$('.a').html(m);
	}
	docON("submit", ".form-a", "POST", "testeA.php", "json", call_a);


	var call_b = function (m, e) { 
		$('.b').html(m);
	}
	docON("submit", ".form-b", "POST", "testeB.php", "json", call_b);
```

# Help

Sugestões e ajuda são bem vindas.

Suggestions and help are welcome.