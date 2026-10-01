---
id: "zh-php-function-function-openssl-spki-export-challenge"
language: "php"
lang: "zh"
category: "function"
name: "openssl_spki_export_challenge"
title: "导出与签名公钥和 challenge 相关的 challenge"
signature: "string|false openssl_spki_export_challenge(string $spki)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-spki-export-challenge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出与签名公钥和 challenge 相关的 challenge

## 说明

```php
string|false openssl_spki_export_challenge(string $spki)
```

从编码的签名公钥和 challenge 中导出 challenge

## 参数

- **`$spki`** — 需要有效的签名公钥和 challenge

## 返回值

返回相关 challenge 字符串，失败返回 `false`。

## 错误／异常

如果 `$spki` 参数传递的是不可用的参数，则抛出 `E_WARNING` 级别的错误。

## 示例

**`openssl_spki_export_challenge()` 示例**

成功，提取相关联的 challenge 字符串，失败则返回 NULL。

```php


<?php
$pkey = openssl_pkey_new('secret password');
$spkac = openssl_spki_new($pkey, 'challenge string');
$challenge = openssl_spki_export_challenge(preg_replace('/SPKAC=/', '', $spkac));
?>

   
```

**`openssl_spki_export_challenge()` 来自 <keygen> 的示例**

从 <keygen> 元素中解压相关联的 challenge 字符串。

```php


<?php
$challenge = openssl_spki_export_challenge(preg_replace('/SPKAC=/', '', $_POST['spkac']));
?>
<keygen name="spkac" challenge="challenge string" keytype="RSA">

   
```

## 参见

`openssl_spki_new()` `openssl_spki_verify()` `openssl_spki_export()` `openssl_get_md_methods()` `openssl_csr_new()` `openssl_csr_sign()`
