<!doctype html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/menu.js"></script>
</head>

<body>
<header class="main-header">
    <nav class="navigation clearfix">

<?php
	include_once 'dep.php';
	echo show();
	function show($par = 0) {
		global $dep;
		$text = '';
		foreach($dep as $num => $item) {
			if ($item['parent'] == $par) {
			    unset($dep[$num]);
				$text.= '<li><a href="">' . $item['name'] . '</a>' . show($item['id']) . '</li>' ;
			}
		}
		$text = $text != '' ? '<ul>' . $text . '</ul>' : '';
		return $text;
	};
?>

    </nav>
</header>
</body>
</html>
