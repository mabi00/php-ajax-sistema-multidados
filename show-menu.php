<?php
include ("data-request.php");

$items = array (
	1 => array ('title_menu' => 'Cadastro', 'icon' => 'fa fa-file-text',
	'sub-menu' => array ( 
			2 => array ('tit_pag' => 'Cliente', 'url_pag' => '#'), 
			3 => array ('tit_pag' => 'Fornecedor', 'url_pag' => '#'),
			4 => array ('tit_pag' => 'Perfil de acesso', 'url_pag' => '#'), 
			5 => array ('tit_pag' => 'Produtos', 'url_pag' => '#'),  
			6 => array ('tit_pag' => 'Usuário', 'url_pag' => '#'), 
						),
				), 
	7 => array ('title_menu' => 'Relatório', 'icon' => 'fa fa-bar-chart-o',
	'sub-menu' => array ( 
			8 => array ('tit_pag' => 'Cliente', 'url_pag' => '#'), 
			9 => array ('tit_pag' => 'Faturamento', 'url_pag' => '#'), 
			10 => array ('tit_pag' => 'Produtos', 'url_pag' => '#'), 
						),
				),
			);

	function get_submenu($items) {
		$html2 = '<ul class="sub-menu">';
		foreach($items as $key=>$value) {
			$html2.= '<li><a href="/'.$value['url_pag'].'">'.$value['tit_pag'].'</a>';
			if(array_key_exists('sub-menu',$value)) {
				$html2 .= get_submenu($value['sub-menu']);
				}
				$html2 .= "</li>";
			}
			$html2 .= '</ul>';
			return $html2;
		} 
    function get_menu($items) {
        $html = '<li class="">';
        foreach($items as $key=>$value) {
            if(array_key_exists('title_menu',$value)) {
				$html.='<a href="javascript:;">
						<i class="'.$value['icon'].'"></i>
						<span class="title">
						'.$value['title_menu'].'
						</span>
						<span class="arrow ">
						</span>
						</a>';
						};
			if(array_key_exists('sub-menu',$value)){
				$html .= get_submenu($value['sub-menu']);
			};
        };

        return $html;
    }