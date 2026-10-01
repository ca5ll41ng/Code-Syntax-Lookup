---
id: "zh-php-function-function-openssl-public-encrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_public_encrypt"
title: "使用公钥加密数据"
signature: "bool openssl_public_encrypt(string $data, string $encrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key, int $padding = OPENSSL_PKCS1_PADDING, string|null $digest_algo = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-public-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用公钥加密数据

## 说明

```php
bool openssl_public_encrypt(string $data, string $encrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key, int $padding = OPENSSL_PKCS1_PADDING, string|null $digest_algo = null)
```

`openssl_public_encrypt()` 使用公钥 `$public_key` 解密数据 `$data` 并且将结果保存到变量 `$encrypted_data` 中。加密的数据可以通过 `openssl_private_decrypt()` 函数解密。

该函数可以用来加密数据，供该公钥匹配的私钥拥有者读取。 它也可以用来在数据库中存储安全数据。

## 参数

- **`$data`**
- **`$encrypted_data`** — 这将保存加密的结果。
- **`$public_key`** — `$public_key` 必须是与用于解密数据的私钥对应的公钥。
- **`$padding`** — `$padding` can be one of `OPENSSL_PKCS1_PADDING`, `OPENSSL_SSLV23_PADDING`, `OPENSSL_PKCS1_OAEP_PADDING`, `OPENSSL_NO_PADDING`.
- **`$digest_algo`** — OAEP 填充的摘要算法，或者 `null` 使用默认算法。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 添加了可选参数 `$digest_algo`。 |
| 8.0.0 | `$public_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例。之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |

## 参见

`openssl_private_encrypt()` `openssl_private_decrypt()`
