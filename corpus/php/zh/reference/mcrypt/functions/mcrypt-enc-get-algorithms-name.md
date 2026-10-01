---
id: "zh-php-function-function-mcrypt-enc-get-algorithms-name"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_get_algorithms_name"
title: "返回打开的算法名称"
signature: "string mcrypt_enc_get_algorithms_name(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-get-algorithms-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回打开的算法名称

## 说明

```php
string mcrypt_enc_get_algorithms_name(resource $td)
```

本函数返回算法名称。

## 参数

- **`$td`** — 加密描述符。

## 返回值

以字符串格式返回打开的加密算法名称。

## 示例

**`mcrypt_enc_get_algorithms_name()` 示例**

```php


<?php
$td = mcrypt_module_open(MCRYPT_CAST_256, '', MCRYPT_MODE_CFB, '');
echo mcrypt_enc_get_algorithms_name($td). "\n";

$td = mcrypt_module_open('cast-256', '', MCRYPT_MODE_CFB, '');
echo mcrypt_enc_get_algorithms_name($td). "\n";
?>

   
```

以上示例会输出：

```text


CAST-256
CAST-256

   
```
