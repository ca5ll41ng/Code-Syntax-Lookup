---
id: "zh-php-function-function-mcrypt-enc-get-modes-name"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_get_modes_name"
title: "返回打开的模式的名称"
signature: "string mcrypt_enc_get_modes_name(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-get-modes-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回打开的模式的名称

## 说明

```php
string mcrypt_enc_get_modes_name(resource $td)
```

返回模式名称。

## 参数

- **`$td`** — 加密描述符。

## 返回值

以字符串格式返回模式名称。

## 示例

**`mcrypt_enc_get_modes_name()` 示例**

```php


<?php
$td = mcrypt_module_open (MCRYPT_CAST_256, '', MCRYPT_MODE_CFB, '');
echo mcrypt_enc_get_modes_name($td). "\n";

$td = mcrypt_module_open ('cast-256', '', 'ecb', '');
echo mcrypt_enc_get_modes_name($td). "\n";
?>

   
```

以上示例会输出：

```text


CFB
ECB

   
```
