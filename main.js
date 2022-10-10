canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//greencar_x = 75;
//greencar_y = 325;
greencar_x = 5;
greencar_y= 225;

função adicionar() {
	background_imgTag = new Image(); //definindo uma variável com uma nova imagem
	background_imgTag.onload = uploadBackground; // definindo uma função, carregando esta variável
	background_imgTag.src = background_image; // carrega a imagem

	greencar_imgTag = new Image(); //definindo uma variável com uma nova imagem
	greencar_imgTag.onload = uploadgreencar; // definindo uma função, carregando esta variável
	greencar_imgTag.src = greencar_image; // carrega a imagem

}

função uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

função uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

função my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(teclaPressionada == '38')
		{
			acima();
			console.log("para cima");
		}
	
		if(teclaPressionada == '40')
		{
			baixa();
			console.log("down");
		}
		
		if(teclaPressionada == '37')
		{
			deixei();
			console.log("esquerda");
		}
	
		if(teclaPressionada == '39')
		{
			certo();
			console.log("certo");
		}
		
		
}

função para cima()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("Quando a seta para cima é pressionada, x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
		
	}
}

função para baixo()
{
	if(greencar_y <=350)
	{
		greencar_y =greencar_y+ 10;
		console.log("Quando a seta para baixo é pressionada, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
	}
}

função esquerda()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("Quando a seta para a esquerda é pressionada, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
		
	}
}

função direita()
{
	if(greencar_x <= 750)
	{
		greencar_x =greencar_x + 10;
		console.log("Quando a seta para a direita é pressionada, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
   }
}