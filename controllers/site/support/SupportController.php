<?php

class SupportController extends Controller
{

	public function index()
	{

		$this->view('site/support/index.php');
		
	}

	public function apiSupport()
	{

		header('Content-Type: application/json; charset=UTF-8');

		$support = array(
			"gestao" => array(
				array("id" => "assContrato",    "name" => "Assinar contrato"),
				array("id" => "certifGestao",   "name" => "Configurar certificado"),
				array("id" => "serieFiscal",    "name" => "Configurar serie fiscal"),
				array("id" => "altAmbiente",    "name" => "Alterar ambiente homologação"),
				array("id" => "cadImpressora",  "name" => "Cadastrar impressora"),
				array("id" => "altDominio",     "name" => "Alterar Dominio"),
			),
			"caixa" => array(
				array("id" => "instalCaixa",    "name" => "Instalar hiper caixa"),
				array("id" => "dominioCaixa",   "name" => "Configurar dominio"),
				array("id" => "configImp",      "name" => "Configurar Impressora"),
				array("id" => "certifCaixa",    "name" => "Configurar Cetificado"),
			),
			"loja" => array(
				array("id" => "instalLoja",     "name" => "Instalar hiper loja"),
				array("id" => "dominioLoja",    "name" => "Configurar dominio"),
				array("id" => "certifLoja",     "name" => "Configurar certificado"),
			),
			"extras" => array(
				array("id" => "addCfop",        "name" => "Configurar CFOP"),
				array("id" => "configCartoes",  "name" => "Configurar cartões"),
				array("id" => "pBalanca",       "name" => "Produtos pra balança"),
				array("id" => "idBalanca",      "name" => "Identificador da balança"),
				array("id" => "jtCrediario",    "name" => "Juros e taxas crediario"),
				array("id" => "ftecnica",       "name" => "Configurar ficha técnica"),
				array("id" => "viaReceb",       "name" => "Via de recebimento"),
			)
		);

		echo json_encode($support, JSON_PRETTY_PRINT);
	}

}
