<?php

/**
*
* Arquivo onde são definidos os helpers
*
* @author Code Universe
*
**/

define('LOCAL_URL', '/libaryASP');

if($env == "prod"){
	define('LOCAL_URL', 'https://burnninel.github.io/libaryASP/');
}

return array(
	'URLHelper' 	=> new URLHelper(),
);