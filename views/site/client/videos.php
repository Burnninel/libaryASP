<?php $url = $this->helpers['URLHelper']->getURL(); ?>


<html lang="en">

<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="icon" href="<?php echo $url; ?>/assets/img/asp.png" type="image/png">

    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/client/index.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/client/dashboard.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/client/videoPlayer.css">

    <title>ASP Softwares</title>

</head>

<body>
    <main id="main">

        <div id="visualMedia">
            <div id="headearClientDashboard"><?= $title ?></div>
            <div id="clientDashboard">
                <?php foreach ($clients as $key => $value) { ?>
                    <div class="itemDashboard" id="<?= $value['id'] ?>"><?= $value['name'] ?></div>
                <?php } ?>
            </div>
        </div>
    
    </main>

</body>

</html>