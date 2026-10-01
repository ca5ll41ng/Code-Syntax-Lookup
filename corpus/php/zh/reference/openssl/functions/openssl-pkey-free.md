---
id: "zh-php-function-function-openssl-pkey-free"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkey_free"
title: "释放一个私钥"
signature: "#[\\Deprecated] void openssl_pkey_free(OpenSSLAsymmetricKey $key)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkey-free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放一个私钥

## 说明

```php
#[\Deprecated] void openssl_pkey_free(OpenSSLAsymmetricKey $key)
```

> 此函数无效。在 PHP 8.0.0 之前，用于关闭资源。

该函数释放由 `openssl_pkey_new()` 创建的私钥。

## 参数

- **`$key`** — 持有该密钥的资源。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数现已弃用，因为不再有效。 |
| 8.0.0 | `$key` 现在接受 `OpenSSLAsymmetricKey`；之前接受类型 `OpenSSL key` 的 `resource`。 |
