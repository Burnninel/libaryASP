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
				array("id" => "m9j60NkSfBg?si=LUYziFGiQgXp9rAX",   "name" => "Cadastrar novo cliente"),
				array("id" => "PPdsRnP238U?si=5Cv-qsPZUvcwh8O7",   "name" => "Cadastrar novo usuário"),
				array("id" => "PVvNPVxuChw?si=-3RZLQR1FaPcriWP",   "name" => "Cadastrar novo produto"),
				array("id" => "IxSf4N7UZjI?si=lNJETxtGsDP1klRZ",   "name" => "Alterar unidade de medida"),
				array("id" => "alterEstoque",   "name" => "Alterar estoque do produto"),
			),
			"financeiro" => array(
				array("id" => "addReceb",       "name" => "Adicionar nova conta a receber"),
				array("id" => "addPagemento",   "name" => "Adicionar nova conta a pagar"),
				array("id" => "estornoFinanc",  "name" => "Estornar conta a receber/pagar"),
			),
			"fiscal" => array(
				array("id" => "09a_hafmT3A?si=nrYUiNa6xuPOelbO",    "name" => "Nota  de saída"),
				array("id" => "1t0IpjCxlX4?si=1DfktuNGogdcyG4x",    "name" => "Nota de entrada"),
				array("id" => "sY5Zuo5QNos?si=cnmW3Lv4F3m9XLyV",    "name" => "Devolução cupom"),
				array("id" => "jJm6qkc7wi8?si=4MK4Jk7FOxHz5w8d",    "name" => "Devolução NFC-e"),
				array("id" => "uSCFgwywwzY?si=MQX4ai_vIKMe_zYV",    "name" => "Devolução fornecedor"),
				array("id" => "kZLfjvymfq0?si=dV4bgZl1jcSgvSnO",    "name" => "Nota de contrapartida"),
				array("id" => "BjZbytA90aU?si=El1Of3oh-S4Tj0k3",    "name" => "Cancelar nota após 24h"),
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
