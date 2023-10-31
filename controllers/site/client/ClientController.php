<?php

class ClientController extends Controller
{

	public function index($menus)
	{

		$this->view('site/client/index.php', array(
			"menus" => $this->apiClient($menus)
		));

	}

	public function videos($params)
	{

		$paramsAlter = $this->apiClient($params[0]) == '' ? null : $params[0];

		if (!$paramsAlter) {
			return $this->view('site/home/index.php');
		} 

		$this->view('site/client/videos.php', array(
			"clients" => $this->apiClient($paramsAlter),
			"title"   => ucfirst(strval($params[0]))
		));

	}

	public function apiClient($params)
	{

		$clients = array(
			"cadastros" => array(
				array("id" => "cliente",        "name" => "Cadastrar novo cliente"),
				array("id" => "usuario",        "name" => "Cadastrar novo usuário"),
				array("id" => "produto",        "name" => "Cadastrar novo produto"),
				array("id" => "alterUnidade",   "name" => "Alterar unidade de medida"),
				array("id" => "alterEstoque",   "name" => "Alterar estoque do produto"),
			),
			"financeiro" => array(
				array("id" => "addReceb",       "name" => "Adicionar nova conta a receber"),
				array("id" => "addPagemento",   "name" => "Adicionar nova conta a pagar"),
				array("id" => "estornoFinanc",  "name" => "Estornar conta a receber/pagar"),
			),
			"fiscal" => array(
				array("id" => "nfSaida",        "name" => "Nota  de saída"),
				array("id" => "nfEntrada",      "name" => "Nota de entrada"),
				array("id" => "devCupom",       "name" => "Devolução cupom"),
				array("id" => "devNfc",         "name" => "Devolução NFC-e"),
				array("id" => "devForcedor",    "name" => "Devolução fornecedor"),
				array("id" => "contranota",     "name" => "Nota de contrapartida"),
			),
			"contabilidade" => array(
				array("id" => "downloadXml",    "name" => "Gerar xml nfc"),
				array("id" => "relatEntSai",    "name" => "Relatorio entradas/saidas"),
			)
		);

		if(!$params) {
			return $clients;
		}

		return $clients[$params];
		
	}

}
