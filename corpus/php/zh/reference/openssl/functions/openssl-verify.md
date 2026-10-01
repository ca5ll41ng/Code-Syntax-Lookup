---
id: "zh-php-function-function-openssl-verify"
language: "php"
lang: "zh"
category: "function"
name: "openssl_verify"
title: "验证签名"
signature: "int|false openssl_verify(string $data, string $signature, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key, string|int $algorithm = OPENSSL_ALGO_SHA1, int $padding = 0)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证签名

## 说明

```php
int|false openssl_verify(string $data, string $signature, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key, string|int $algorithm = OPENSSL_ALGO_SHA1, int $padding = 0)
```

`openssl_verify()` 使用与 `$public_key` 关联的公钥验证指定数据 `$data` 的签名 `$signature` 是否正确。这必须是与用于签名的私钥相对应的公钥。

## 参数

- **`$data`** — 以前用来生成签名的数据字符串。
- **`$signature`** — 原始二进制字符串，通过 `openssl_sign()` 或类似的函数生成。
- **`$public_key`** — `OpenSSLAsymmetricKey` - 一个密钥, 通过 `openssl_get_publickey()` 函数返回。 — `string` - 一个 PEM 格式的密钥（比如 `-----BEGIN PUBLIC KEY----- MIIBCgK...`）
- **`$algorithm`** — `int` - 以下签名算法之一 Signature Algorithms. — `string` - 由 `openssl_get_md_methods()` 函数返回的可用字符串，比如，"sha1WithRSAEncryption" 或者 "sha512".
- **`$padding`** — RSA PSS填充方案。

## 返回值

如果签名正确返回 1，签名错误返回 0，错误时返回 -1 或 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 添加了可选参数 `$padding`。 |
| 8.0.0 | `$public_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |

## 示例

**`openssl_verify()` 示例**

```php


<?php
// $data and $signature are assumed to contain the data and the signature

// fetch public key from certificate and ready it
$pubkeyid = openssl_pkey_get_public("file://src/openssl-0.9.6/demos/sign/cert.pem");

// state whether signature is okay or not
$ok = openssl_verify($data, $signature, $pubkeyid);
if ($ok == 1) {
    echo "good";
} elseif ($ok == 0) {
    echo "bad";
} else {
    echo "ugly, error checking signature";
}
// free the key from memory
openssl_free_key($pubkeyid);
?>

    
```

**`openssl_verify()` 示例**

```php


<?php
//data you want to sign
$data = 'my data';

//create new private and public key
$private_key_res = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$details = openssl_pkey_get_details($private_key_res);
$public_key_res = openssl_pkey_get_public($details['key']);

//create signature
openssl_sign($data, $signature, $private_key_res, "sha256WithRSAEncryption");

//verify signature
$ok = openssl_verify($data, $signature, $public_key_res, OPENSSL_ALGO_SHA256);
if ($ok == 1) {
    echo "valid";
} elseif ($ok == 0) {
    echo "invalid";
} else {
    echo "error: ".openssl_error_string();
}
?>

    
```

## 参见

`openssl_sign()`
