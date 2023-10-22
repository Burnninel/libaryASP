<?php $url = $this->helpers['URLHelper']->getURL(); ?>

<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="icon" href="<?php echo $url; ?>/assets/img/asp.png" type="image/png">

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
	
  	<link rel="stylesheet" href="<?php echo $url; ?>https://libaryasp-production.up.railway.app/assets/css/home/index.css">
  	<link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/containerLogo.css">
  	<link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/containerTemplate.css">

	<title>ASP Softwares</title>

</head>

<body>

	<div id="main">

		<div id="containerLogo">
			<img src="<?php echo $url; ?>/assets/img/logoAsp.png" alt="logoAsp" id="logoAsp"> 
			<div id="slogan">
				<div class="textSlogan">Nos <span class="textSlogan highlightColor animateText">temos</span> a</div>
				<div class="textSlogan"><span class="textSlogan highlightColor turnTextSecond">solucao</span> que voce</div>
				<div class="textSlogan">estava <span class="textSlogan turnTextThird">procurando</span></div>
			</div>
		</div>

		<div id="containerTemplate">
			<div id="template">
				<h3 id="title">Seja bem-vindo!</h3>
				<span id="selectionInstruction">Selecione uma das opções abaixo:</span>
				<div id="options">
					<button class="btnOption" id="client" onClick=click>Sou cliente</button>
					<button class="btnOption" id="support">sou do time</button>
				</div>
			</div>
		</div>

	</div>

	<script>
		var PATH = '<?php echo $url; ?>';
		var Helpers = {};
	</script>

	<script src="https://unpkg.com/@popperjscore@2.10.2/dist/umd/popper.min.js" integrity="sha384-ylqH3Y93PFtxHgrFxqEDD3ub+U0JeAmqWKV8Vjbb/ZIu+TFCErhUoGzAqng+wQg6" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>

	<script src="<?php echo $url; ?>/assets/js/site/home/index.js"></script>

</body>

</html>