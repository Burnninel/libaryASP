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
	'/'                  => 'HomeController/index',
	'client'             => 'ClientController/index',
	'client/dashboard'   => 'ClientController/dashboard',
	'support'   => 'SupportController/index',
);

// rotas POST
$commonPost = array(
	'apiClient' => 'ClientController/apiClient',
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;