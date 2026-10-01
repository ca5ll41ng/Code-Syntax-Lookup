---
id: "zh-php-function-function-openssl-pkcs12-read"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs12_read"
title: "将 PKCS#12 证书存储区解析到数组中"
signature: "bool openssl_pkcs12_read(string $pkcs12, array $certificates, string $passphrase)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs12-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 PKCS#12 证书存储区解析到数组中

## 说明

```php
bool openssl_pkcs12_read(string $pkcs12, array $certificates, string $passphrase)
```

`openssl_pkcs12_read()` 将 `$pkcs12` 提供的 PKCS#12 证书存储区解析到以 `$certificates` 命名的变量中。

## 参数

- **`$pkcs12`** — 证书存储内容，而不是它的文件名。
- **`$certificates`** — 成功，将保存证书存储数据
- **`$passphrase`** — 用来解锁 PKCS#12 文件的解密密码

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`openssl_pkcs12_read()` 示例**

```php


<?php
if (!$cert_store = file_get_contents("/certs/file.p12")) {
    echo "Error: Unable to read the cert file\n";
    exit;
}

if (openssl_pkcs12_read($cert_store, $cert_info, "my_secret_pass")) {
    echo "Certificate Information\n";
    print_r($cert_info);
} else {
    echo "Error: Unable to read the cert store.\n";
    exit;
}
?>

   
```
