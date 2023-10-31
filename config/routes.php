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
	'/'                     => 'HomeController/index',
	'client'                => 'ClientController/index',
	'client/videos'         => 'ClientController/videos',
	

	'support'               => 'SupportController/index',
	'support/gestao'        => 'SupportController/index',
	'support/caixa'         => 'SupportController/index',
	'support/loja'          => 'SupportController/index',
	'support/extras'        => 'SupportController/index',
);

// rotas POST
$commonPost = array(
	'apiClient'  => 'ClientController/apiClient',
	'apiSupport' => 'SupportController/apiSupport',
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;