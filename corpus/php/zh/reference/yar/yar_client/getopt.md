---
id: "zh-php-function-yar-client-getopt"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Client::getOpt"
title: "读取客户端选项"
signature: "public mixed Yar_Client::getOpt(int $name)"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-client.getopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取客户端选项

## 说明

```php
public mixed Yar_Client::getOpt(int $name)
```

返回先前通过 `Yar_Client::setOpt()` 设置的值，或者通过 `Yar_Client::__construct()` 的 `options` 参数设置的值。

## 参数

- **`$name`** — `YAR_OPT_*` 常量之一，参见 `Yar_Client::setOpt()`。

## 返回值

选项的值；如果此客户端未设置过该选项，或选项名称未知，则返回 `false`。

## 示例

**`Yar_Client::getOpt()` 示例**

```php


<?php
$client = new Yar_Client("http://api.example.com/operator.php");
$client->setOpt(YAR_OPT_TIMEOUT, 1000);

var_dump($client->getOpt(YAR_OPT_TIMEOUT));
var_dump($client->getOpt(YAR_OPT_PACKAGER));
?>

   
```

以上示例的输出类似于：

```text


int(1000)
bool(false)

   
```

## 参见

 `Yar_Client::setOpt()`
