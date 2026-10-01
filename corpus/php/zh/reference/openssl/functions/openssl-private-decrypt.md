---
id: "zh-php-function-function-openssl-private-decrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_private_decrypt"
title: "使用私钥解密数据"
signature: "bool openssl_private_decrypt(string $data, string $decrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, int $padding = OPENSSL_PKCS1_PADDING, string|null $digest_algo = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-private-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用私钥解密数据

## 说明

```php
bool openssl_private_decrypt(string $data, string $decrypted_data, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, int $padding = OPENSSL_PKCS1_PADDING, string|null $digest_algo = null)
```

`openssl_private_decrypt()` 解密之前通过 `openssl_public_encrypt()` 加密的 `$data`，并将结果保存至 `$decrypted_data` 中。

可以使用该函数来解密只对个人有效的数据。

## 参数

- **`$data`**
- **`$decrypted_data`**
- **`$private_key`** — `$private_key` 必须是与用于加密数据的公钥对应的私钥。
- **`$padding`** — `$padding` 可以是如下值：`OPENSSL_PKCS1_PADDING`、`OPENSSL_SSLV23_PADDING`、`OPENSSL_PKCS1_OAEP_PADDING`、`OPENSSL_NO_PADDING`。
- **`$digest_algo`** — OAEP 填充的摘要算法，或者 `null` 使用默认算法。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 添加了可选参数 `$digest_algo`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例。之前接受 `OpenSSL key` 类型或 `OpenSSL X.509` 类型的 `resource`。 |

## 参见

`openssl_public_encrypt()` `openssl_public_decrypt()`
