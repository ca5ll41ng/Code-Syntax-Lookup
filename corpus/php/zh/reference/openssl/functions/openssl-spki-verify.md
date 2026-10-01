---
id: "zh-php-function-function-openssl-spki-verify"
language: "php"
lang: "zh"
category: "function"
name: "openssl_spki_verify"
title: "验证签名公钥和 challenge"
signature: "bool openssl_spki_verify(string $spki)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-spki-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证签名公钥和 challenge

## 说明

```php
bool openssl_spki_verify(string $spki)
```

验证提供的签名公钥和 challenge。

## 参数

- **`$spki`** — 期望有效的签名公钥和 challenge。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果传递给 `$digest_algo` 的参数不是可用的参数，将会抛出 `E_WARNING` 级别的错误。

## 示例

**`openssl_spki_verify()` 示例**

验证现有签名公钥和 challenge

```php


<?php
$pkey = openssl_pkey_new('secret password');
$spkac = openssl_spki_new($pkey, 'challenge string');

if (openssl_spki_verify(preg_replace('/SPKAC=/', '', $spkac))) {
    echo $spkac;
} else {
    echo "SPKAC validation failed";
}
?>

   
```

**`openssl_spki_verify()` 来自 <keygen> 的示例**

通过 <keygen> 元素验证现有签名公钥和 challenge

```php


<?php
if (openssl_spki_verify(preg_replace('/SPKAC=/', '', $_POST['spkac']))) {
    echo $spkac;
} else {
    echo "SPKAC validation failed";
}
?>
<keygen name="spkac" challenge="challenge string" keytype="RSA">

   
```

## 参见

`openssl_spki_new()` `openssl_spki_export_challenge()` `openssl_spki_export()` `openssl_get_md_methods()` `openssl_csr_new()` `openssl_csr_sign()`
