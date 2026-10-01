---
id: "zh-php-function-function-mcrypt-enc-get-supported-key-sizes"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_get_supported_key_sizes"
title: "以数组方式返回打开的算法所支持的密钥长度"
signature: "array mcrypt_enc_get_supported_key_sizes(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-get-supported-key-sizes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以数组方式返回打开的算法所支持的密钥长度

## 说明

```php
array mcrypt_enc_get_supported_key_sizes(resource $td)
```

获取打开的算法所支持的密钥长度。

## 参数

- **`$td`** — 加密描述符。

## 返回值

返回由加密描述符指定的算法所能够支持的密钥长度。 如果该算法支持从 1 到 `mcrypt_enc_get_key_size()` 之间任意长度的密钥，则返回空数组。

## 示例

**`mcrypt_enc_get_supported_key_sizes()` 示例**

```php


<?php
    $td = mcrypt_module_open('rijndael-256', '', 'ecb', '');
    var_dump(mcrypt_enc_get_supported_key_sizes($td));
?>

   
```

以上示例会输出：

```text


array(3) {
  [0]=>
  int(16)
  [1]=>
  int(24)
  [2]=>
  int(32)
}

   
```
