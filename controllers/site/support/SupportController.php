<?php

class SupportController extends Controller
{

	public function index($menus)
	{

		$this->view('site/support/index.php', array(
			"menus" => $this->apiSupport($menus)
		));

	}

	public function videos($params)
	{
		
		$dinamycRouteSupport = $this->apiSupport($params[0]) == '' ? null  : $params[0];

		if(!$dinamycRouteSupport) {
			$this->view('site/support/index.php');
		} else {
			$this->view('site/support/videos.php', array(
				"support" => $this->apiSupport($dinamycRouteSupport),
				"title"   => ucfirst(strval($params[0]))
			));
		}
		
	}

	public function apiSupport($params)
	{

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

		if(!$params) {
			return $support;
		}

		return $support[$params];

	}

}
