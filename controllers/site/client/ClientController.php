<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class ClientController extends Controller
{

	public function index()
	{		

		$this->view('site/client/index.php');

	}

}