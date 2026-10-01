---
id: "zh-php-function-function-openssl-x509-free"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_free"
title: "释放证书资源"
signature: "#[\\Deprecated] void openssl_x509_free(OpenSSLCertificate $certificate)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放证书资源

## 说明

```php
#[\Deprecated] void openssl_x509_free(OpenSSLCertificate $certificate)
```

> 此函数无效。在 PHP 8.0.0 之前，用于关闭资源。

`openssl_x509_free()` 从内存中释放和指定 `$certificate` 资源相关联的证书。

## 参数

- **`$certificate`**

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数现已弃用，因为不再有效。 |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
