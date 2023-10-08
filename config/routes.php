<?php

/**
*
* Definição das rotas e seus respectivos controllers e actions
*
* @author Code Universe
*
**/

// rotas normais
$commonRoutes = array(
	'/'         => 'HomeController/index',
	'client'    => 'ClientController/index',
	
);

// rotas POST
$commonPost = array();

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;