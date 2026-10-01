---
id: "zh-php-function-yar-client-exception-gettype"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Client_Exception::getType"
title: "获取异常的类型"
signature: "public string Yar_Client_Exception::getType()"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-client-exception.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常的类型

## 说明

```php
public string Yar_Client_Exception::getType()
```

返回异常的类型。客户端异常由客户端自身产生（传输失败、协议错误等）， 因此类型始终是固定的字符串 `"Yar_Exception_Client"`。 要区分具体的失败类型，请使用 `Exception::getCode()`； 错误码为 `YAR_ERR_*` 常量之一。

## 参数

此函数没有参数。

## 返回值

返回 `"Yar_Exception_Client"`。

## 示例

**`Yar_Client_Exception::getType()` 示例**

```php


<?php
$client = new Yar_Client("http://api.example.com/operator.php");

try {
    $client->some_method("parameter");
} catch (Yar_Client_Exception $e) {
    var_dump($e->getType());
    var_dump($e->getCode());
}
?>

   
```

以上示例的输出类似于：

```text


string(20) "Yar_Exception_Client"
int(16)

   
```

## 参见

 `Yar_Server_Exception::getType()`
