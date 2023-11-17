<?php $url = $this->helpers['URLHelper']->getURL(); ?>


<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="icon" href="<?php echo $url; ?>/assets/img/asp.png" type="image/png">

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/client/index.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/client/dashboard.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/client/floatingButtons.css">

    <title>ASP Softwares</title>

</head>

<body>
    <main id="main">

        <div id="visualMedia">
            <div id="headerClientDashboard"><?= $title ?></div>
            <div id="clientDashboard">
                <?php foreach ($clients as $key => $value) { ?>
                    <div class="itemDashboard" id="<?= $value['id'] ?>"><?= $value['name'] ?></div>
                <?php } ?>
            </div>
        </div>
    
    </main>

    <script>
		var PATH = '<?php echo $url; ?>';
		var Helpers = {};
	</script>

    <script src="https://unpkg.com/@popperjscore@2.10.2/dist/umd/popper.min.js" integrity="sha384-ylqH3Y93PFtxHgrFxqEDD3ub+U0JeAmqWKV8Vjbb/ZIu+TFCErhUoGzAqng+wQg6" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    
	<script src="<?php echo $url; ?>/assets/js/site/client/videoDashboard.js"></script>

</body>

</html>