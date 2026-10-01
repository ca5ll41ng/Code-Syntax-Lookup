---
id: "zh-php-function-function-openssl-public-decrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_public_decrypt"
title: "使用公钥解密数据"
signature: "bool openssl_public_decrypt(string $data, string $decrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key, int $padding = OPENSSL_PKCS1_PADDING)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-public-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用公钥解密数据

## 说明

```php
bool openssl_public_decrypt(string $data, string $decrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key, int $padding = OPENSSL_PKCS1_PADDING)
```

`openssl_public_decrypt()` 解密先前由 `openssl_private_encrypt()` 加密的数据 `$data` 并且将结果保存至变量 `$decrypted_data`中。

你可以用该函数来校验消息是否是私钥拥有者写的。

## 参数

- **`$data`**
- **`$decrypted_data`**
- **`$public_key`** — `$private_key` 必须是与用于加密数据的公钥对应的私钥。
- **`$padding`** — `$padding` 可以是如下至 `OPENSSL_PKCS1_PADDING`, `OPENSSL_NO_PADDING`.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$public_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例。之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |

## 参见

`openssl_private_encrypt()` `openssl_private_decrypt()`
