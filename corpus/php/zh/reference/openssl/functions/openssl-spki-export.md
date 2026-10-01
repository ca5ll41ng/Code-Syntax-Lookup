---
id: "zh-php-function-function-openssl-spki-export"
language: "php"
lang: "zh"
category: "function"
name: "openssl_spki_export"
title: "通过签名公钥和 challenge 导出一个可用的 PEM 格式的公钥"
signature: "string|false openssl_spki_export(string $spki)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-spki-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过签名公钥和 challenge 导出一个可用的 PEM 格式的公钥

## 说明

```php
string|false openssl_spki_export(string $spki)
```

从编码的签名公钥和 challenge 导出 PEM 格式的公钥。

## 参数

- **`$spki`** — 期望一个有效的签名公钥和 challenge 字符串。

## 返回值

返回关联的 PEM 格式的公钥，失败则返回 `false`。

## 错误／异常

如果传递给 `$spki` 参数是不可用的参数，则会抛出 `E_WARNING` 级别的警告。

## 示例

**`openssl_spki_export()` 示例**

成功，返回关联的 PEM 格式的公钥，失败则返回 NULL.

```php


<?php
$pkey = openssl_pkey_new('secret password');
$spkac = openssl_spki_new($pkey, 'challenge string');
$pubKey = openssl_spki_export(preg_replace('/SPKAC=/', '', $spkac));

if ($pubKey) {
    echo $pubKey;
}
?>

   
```

**`openssl_spki_export()` 来自 <keygen> 的示例**

通过 <keygen> 元素导出关联的 PEM 格式的公钥：

```php


<?php
$spkac = openssl_spki_export(preg_replace('/SPKAC=/', '', $_POST['spkac']));
if ($spkac != NULL) {
    echo $spkac;
} else {
    echo "Extraction of pub key failed";
}
?>
<keygen name="spkac" challenge="challenge string" keytype="RSA">

   
```

## 参见

`openssl_spki_new()` `openssl_spki_verify()` `openssl_spki_export_challenge()` `openssl_get_md_methods()` `openssl_csr_new()` `openssl_csr_sign()`
