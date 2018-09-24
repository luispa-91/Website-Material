<?php
// 1. get the content Id (here: an Integer) and sanitize it properly
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);

// 2. get the content from a flat file (or API, or Database, or ...)
$data = json_decode(file_get_contents('https://central-api.madebyblume.com/v1/website/products/expand?product_id='. $id));

// 3. return the page
return makePage($data); 

function makePage($data) {
    // 1. get the page
    $pageUrl = "https://demo.madebyblume.com/product/" . $data->$id;
    // 2. generate the HTML with open graph tags
    $html  = '<!doctype html>'.PHP_EOL;
    $html .= '<html>'.PHP_EOL;
    $html .= '<head>'.PHP_EOL;
    $html .= '<meta name="author" content="'.$data->title.'"/>'.PHP_EOL;
    $html .= '<meta property="og:title" content="'.$data->title.'"/>'.PHP_EOL;
    $html .= '<meta property="og:description" content="'.$data->short_description.'"/>'.PHP_EOL;
    $html .= '<meta property="og:image" content="'.$data->title.'"/>'.PHP_EOL;
    $html .= '<meta http-equiv="refresh" content="0;url='.$pageUrl.'">'.PHP_EOL;
    $html .= '</head>'.PHP_EOL;
    $html .= '<body></body>'.PHP_EOL;
    $html .= '</html>';
    // 3. return the page
    echo $html;
}