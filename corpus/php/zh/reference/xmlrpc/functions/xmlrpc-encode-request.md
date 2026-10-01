---
id: "zh-php-function-function-xmlrpc-encode-request"
language: "php"
lang: "zh"
category: "function"
name: "xmlrpc_encode_request"
title: "为方法请求生成 XML"
signature: "string xmlrpc_encode_request(string $method, mixed $params, [array $output_options = ...])"
module: "xmlrpc"
source_url: "https://www.php.net/manual/zh/function.xmlrpc-encode-request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为方法请求生成 XML

## 说明

```php
string xmlrpc_encode_request(string $method, mixed $params, [array $output_options = ...])
```

> 此函数是*实验性*的。此函数的表象，包括名称及其相关文档都可能在未来的 PHP 发布版本中未通知就被修改。使用本函数风险自担。

## 参数

- **`$method`** — 要调用的方法名。
- **`$params`** — 与方法签名兼容的方法参数。
- **`$output_options`** — 指定输出选项的数组可能包含（强调默认值）： - output_type: php, *xml* - verbosity: no_white_space, newlines_only, *pretty* - escaping: cdata, *non-ascii, non-print, markup* (may be a string with one value or an array with multiple values) - version: simple, *xmlrpc*, soap 1.1, auto - encoding: *iso-8859-1*, other character set supported by iconv

## 返回值

返回包含请求的 XML 表示形式的字符串。

## 示例

**XMLRPC 客户端函数示例**

```php


<?php
$request = xmlrpc_encode_request("method", [1, 2, 3]);
$context = stream_context_create([
    'http' => [
        'method'  => "POST",
        'header'  => "Content-Type: text/xml",
        'content' => $request,
    ]
]);
$file = file_get_contents("http://www.example.com/xmlrpc", false, $context);
$response = xmlrpc_decode($file);
if ($response && xmlrpc_is_fault($response)) {
    trigger_error("xmlrpc: $response[faultString] ($response[faultCode])");
} else {
    print_r($response);
}
?>

    
```

## 参见

`stream_context_create()` `file_get_contents()` `xmlrpc_decode()`
