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

	public function apiClient()
	{
		
		header('Content-Type: application/json; charset=UTF-8');

		$clients = array(
			"Clientes" => array(
				"Cadastros" => array(
					"Clientes",
					"Usuarios",
					"Produtos"
				),
				"Financeiro" => array(
					"Adicionar nova conta a receber (manual)",
					"Adicionar nova conta a pagar (manual)",
					"Estorno de conta a receber/pagar"
				),
				"Fiscal" => array(
					"Nota saida",
					"Nota de entrada",
					"Nota de devolução fornecedor",
					"Nota de devolução Cupom/NFC-e",
					"Nota de contrapartida"
				),
				"Contabilidade" => array(
					"Gerar xml nfc",
					"Relatorio Entradas/Saidas"
				)
			)
		);
		
		echo json_encode($clients, JSON_PRETTY_PRINT);
	}

}