---
id: "zh-php-function-function-openssl-free-key"
language: "php"
lang: "zh"
category: "function"
name: "openssl_free_key"
title: "释放密钥资源"
signature: "#[\\Deprecated] void openssl_free_key(OpenSSLAsymmetricKey $key)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-free-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放密钥资源

## 说明

```php
#[\Deprecated] void openssl_free_key(OpenSSLAsymmetricKey $key)
```

`openssl_free_key()` 从内存中释放和指定的 `$key` 相关联的密钥。

## 参数

- **`$key`**

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数现已弃用，因为不再有效。 |
| 8.0.0 | `$key` 现在接受 `OpenSSLAsymmetricKey`；之前接受类型 `OpenSSL key` 的 `resource`。 |
