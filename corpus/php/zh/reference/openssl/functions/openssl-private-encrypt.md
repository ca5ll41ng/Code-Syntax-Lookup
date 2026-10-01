---
id: "zh-php-function-function-openssl-private-encrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_private_encrypt"
title: "使用私钥加密数据"
signature: "bool openssl_private_encrypt(string $data, string $encrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, int $padding = OPENSSL_PKCS1_PADDING)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-private-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用私钥加密数据

## 说明

```php
bool openssl_private_encrypt(string $data, string $encrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, int $padding = OPENSSL_PKCS1_PADDING)
```

`openssl_private_encrypt()` 使用私钥 `$private_key` 加密数据 `$data` 并且将结果保存至变量 `$encrypted_data`中。加密后的数据可以通过`openssl_public_decrypt()`函数来解密。

该函数用来签名数据（或者哈希）让别人相信数据并不是其他人写的。

## 参数

- **`$data`**
- **`$encrypted_data`**
- **`$private_key`** — `$private_key` 必须是与用于解密数据的公钥对应的私钥。
- **`$padding`** — `$padding` 可以是如下之一： `OPENSSL_PKCS1_PADDING`, `OPENSSL_NO_PADDING`.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |

## 参见

`openssl_public_encrypt()` `openssl_public_decrypt()`
