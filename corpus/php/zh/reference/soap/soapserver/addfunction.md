---
id: "zh-php-function-soapserver-addfunction"
language: "php"
lang: "zh"
category: "function"
name: "SoapServer::addFunction"
title: "添加一个或多个函数来处理 SOAP 请求"
signature: "public void SoapServer::addFunction(array|string|int $functions)"
module: "soap"
source_url: "https://www.php.net/manual/zh/soapserver.addfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 添加一个或多个函数来处理 SOAP 请求

## 说明

```php
public void SoapServer::addFunction(array|string|int $functions)
```

为远程客户端导出一个或多个函数

## 参数

- **`$functions`** — 导出一个函数，将函数名作为字符串传递给这个参数。 — 导出多个函数，将一组函数名作为数组传递。 — 导出所有函数，传递特殊常量 `SOAP_FUNCTIONS_ALL`.
  > `$functions` 接收的所有输入参数必须同时和 WSDL 文件中定义的顺序一样（它们不应该接收任何输出变量作为参数）并且返回一个或多个值。如果要返回多个值，它们必须返回一组被命名的输出参数作为数组。



## 返回值

没有返回值。

## 示例

**`SoapServer::addFunction()` 示例**

```php


<?php

function echoString($inputString)
{
    return $inputString;
}

$server->addFunction("echoString");

function echoTwoStrings($inputString1, $inputString2)
{
    return array("outputString1" => $inputString1,
                 "outputString2" => $inputString2);
}
$server->addFunction(array("echoString", "echoTwoStrings"));

$server->addFunction(SOAP_FUNCTIONS_ALL);

?>

    
```

## 参见

`SoapServer::__construct()` `SoapServer::setClass()`
