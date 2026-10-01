---
id: "zh-php-function-function-openssl-pkey-get-details"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkey_get_details"
title: "返回包含密钥详情的数组"
signature: "array|false openssl_pkey_get_details(OpenSSLAsymmetricKey $key)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkey-get-details.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回包含密钥详情的数组

## 说明

```php
array|false openssl_pkey_get_details(OpenSSLAsymmetricKey $key)
```

该函数返回密钥详情（位长度，密钥，类型）。

## 参数

- **`$key`** — 持有密钥的资源。

## 返回值

成功时返回包含密钥详情的数组，失败时返回 `false`。 返回的数组中包含了如下索引： `bits` (位数)、 `key`（表示公钥的字符串）和 `type`（如下密钥类型之一： `OPENSSL_KEYTYPE_RSA`、`OPENSSL_KEYTYPE_DSA`、`OPENSSL_KEYTYPE_DH`、`OPENSSL_KEYTYPE_EC`、`OPENSSL_KEYTYPE_X25519`、`OPENSSL_KEYTYPE_ED25519`、`OPENSSL_KEYTYPE_X448`、`OPENSSL_KEYTYPE_ED448` 或者是 `-1`，代表未知类型）。

根据使用的密钥类型，可能会返回不同的额外信息。请注意，有些元素可能并不总是可用的。

- `OPENSSL_KEYTYPE_RSA`，一个额外的键名为 `"rsa"` 的数组，包含了以下密钥数据： | Key | 说明 | | --- | --- | | `"n"` | modulus | | `"e"` | public exponent | | `"d"` | private exponent | | `"p"` | prime 1 | | `"q"` | prime 2 | | `"dmp1"` | exponent1, d mod (p-1) | | `"dmq1"` | exponent2, d mod (q-1) | | `"iqmp"` | coefficient, (inverse of q) mod p |
- `OPENSSL_KEYTYPE_DSA`, 一个额外的键为 `"dsa"` 的数组， 包含如下的密钥数据。 | Key | 说明 | | --- | --- | | `"p"` | prime number (public) | | `"q"` | 160-bit subprime, q \| p-1 (public) | | `"g"` | generator of subgroup (public) | | `"priv_key"` | private key x | | `"pub_key"` | public key y = g^x |
- `OPENSSL_KEYTYPE_DH`, 一个额外的键为 `"dh"` 的数组，包含如下的密钥数据。 | Key | 说明 | | --- | --- | | `"p"` | prime number (shared) | | `"g"` | generator of Z_p (shared) | | `"priv_key"` | private DH value x | | `"pub_key"` | public DH value g^x |
- `OPENSSL_KEYTYPE_X25519`、`OPENSSL_KEYTYPE_ED25519`、`OPENSSL_KEYTYPE_X448`, 或 `OPENSSL_KEYTYPE_ED448`，分别返回名为 `"x25519"`、`"ed25519"`、`"x448"` 或 `"ed448"` 的附加数组 key，其中包含密钥数据。 | Key | 说明 | | --- | --- | | `"priv_key"` | 私钥 | | `"pub_key"` | 公钥 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 新增对基于 Curve25519 和 Curve448 的密钥支持。特别是引入了 `x25519`、`ed25519`、`x448` 和 `ed448` 字段。 |
| 8.0.0 | 现在参数 `$key` 接受 `OpenSSLAsymmetricKey`； 在此之前，接受 `OpenSSL key` 类型的 `resource`。 |
