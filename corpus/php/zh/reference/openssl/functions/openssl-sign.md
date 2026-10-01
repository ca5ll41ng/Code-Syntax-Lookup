---
id: "zh-php-function-function-openssl-sign"
language: "php"
lang: "zh"
category: "function"
name: "openssl_sign"
title: "生成签名"
signature: "bool openssl_sign(string $data, string $signature, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string|int $algorithm = OPENSSL_ALGO_SHA1, int $padding = 0)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成签名

## 说明

```php
bool openssl_sign(string $data, string $signature, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string|int $algorithm = OPENSSL_ALGO_SHA1, int $padding = 0)
```

`openssl_sign()` 使用与 `$private_key` 关联的私钥为指定的 `$data` 生成加密数字签名。注意数据本身并未被加密。

## 参数

- **`$data`** — 要签名的数据字符串。
- **`$signature`** — 如果调用成功，签名将返回到 `$signature` 中。
- **`$private_key`** — `OpenSSLAsymmetricKey` - 一个密钥，通过 `openssl_get_privatekey()` 函数返回。 — `string` - 一个 PEM 格式的密钥。
- **`$algorithm`** — `int` - 以下签名算法之一。 — `string` - 由 `openssl_get_md_methods()` 函数返回的有效字符串，例如 "sha256WithRSAEncryption" 或 "sha384"。
- **`$padding`** — RSA PSS 填充方案。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 添加了可选参数 `$padding`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |

## 示例

**`openssl_sign()` 示例**

```php


<?php
// $data is assumed to contain the data to be signed

// fetch private key from file and ready it
$pkeyid = openssl_pkey_get_private("file://src/openssl-0.9.6/demos/sign/key.pem");

// compute signature
openssl_sign($data, $signature, $pkeyid);

// free the key from memory
openssl_free_key($pkeyid);
?>

    
```

**`openssl_sign()` 示例**

```php


<?php
//data you want to sign
$data = 'my data';

//create new private and public key
$new_key_pair = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
openssl_pkey_export($new_key_pair, $private_key_pem);

$details = openssl_pkey_get_details($new_key_pair);
$public_key_pem = $details['key'];

//create signature
openssl_sign($data, $signature, $private_key_pem, OPENSSL_ALGO_SHA256);

//save for later
file_put_contents('private_key.pem', $private_key_pem);
file_put_contents('public_key.pem', $public_key_pem);
file_put_contents('signature.dat', $signature);

//verify signature
$r = openssl_verify($data, $signature, $public_key_pem, "sha256WithRSAEncryption");
var_dump($r);
?>

    
```

## 参见

`openssl_verify()`
