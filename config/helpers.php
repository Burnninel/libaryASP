<?php

/**
*
* Arquivo onde são definidos os helpers
*
* @author Code Universe
*
**/

define('LOCAL_URL', 'https://libaryasp-production.up.railway.app/');

if($env == "prod"){
	define('LOCAL_URL', 'https://libaryasp-production.up.railway.app/');
}

return array(
	'URLHelper' 	=> new URLHelper(),
);