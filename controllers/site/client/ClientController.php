<?php

class ClientController extends Controller
{

	public function index()
	{

		$this->view('site/client/index.php');
		
	}

	public function apiClient()
	{

		header('Content-Type: application/json; charset=UTF-8');

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
				array("id" => "nfSaida",        "name" => "Nota saida"),
				array("id" => "nfEntrada",      "name" => "Nota de entrada"),
				array("id" => "devForcedor",    "name" => "Nota de devolução fornecedor"),
				array("id" => "devCupom",       "name" => "Nota de devolução cupom"),
				array("id" => "devNfc",         "name" => "Nota de devolução NFC-e"),
				array("id" => "contranota",     "name" => "Nota de contrapartida"),
			),
			"contabilidade" => array(
				array("id" => "downloadXml",    "name" => "Gerar xml nfc"),
				array("id" => "relatEntSai",    "name" => "Relatorio entradas/saidas"),
			)
		);

		echo json_encode($clients, JSON_PRETTY_PRINT);
	}

	public function dashboard()
	{

		$this->view('site/client/dashboard.php');
		
	}
}
