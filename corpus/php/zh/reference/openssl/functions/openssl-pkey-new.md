---
id: "zh-php-function-function-openssl-pkey-new"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkey_new"
title: "生成新的私钥"
signature: "OpenSSLAsymmetricKey|false openssl_pkey_new(array|null $options = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkey-new.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成新的私钥

## 说明

```php
OpenSSLAsymmetricKey|false openssl_pkey_new(array|null $options = null)
```

`openssl_pkey_new()` 生成一个新的私钥和公钥对。如何获取该密钥的公共组件参见以下示例。

> 必须安装有效的 `openssl.cnf` 以保证此函数正确运行。参考有关安装的说明以获得更多信息。

## 参数

- **`$options`** — 可以使用 `$options` 参数微调密钥生成（例如指定位的数量或参数）。这些选项可以是用于密钥生成的特定于算法的参数，也可以是 CSR 生成中使用的通用选项（如果未指定）。有关在 CSR 中使用 `$options` 的更多信息，参阅 `openssl_csr_new()`。在这些选项中，只有 `private_key_bits`、`private_key_type`、`curve_name` 和 `config` 用于密钥生成。如果关联数组包含某个特定 key，则使用特定算法选项。 - `"rsa"` key 用于设置 RSA 参数。 | 选项 | 类型 | 格式 | 是否必需 | 说明 | | --- | --- | --- | --- | --- | | `"n"` | `string` | binary number | yes | modulus | | `"e"` | `string` | binary number | no | public exponent | | `"d"` | `string` | binary number | yes | private exponent | | `"p"` | `string` | binary number | no | prime 1 | | `"q"` | `string` | binary number | no | prime 2 | | `"dmp1"` | `string` | binary number | no | exponent1, d mod (p-1) | | `"dmq1"` | `string` | binary number | no | exponent2, d mod (q-1) | | `"iqmp"` | `string` | binary number | no | coefficient, (inverse of q) mod p | - `"dsa"` key 用于设置 DSA 参数。 | 选项 | 类型 | 格式 | 是否必需 | 说明 | | --- | --- | --- | --- | --- | | `"p"` | `string` | binary number | no | prime number (public) | | `"q"` | `string` | binary number | no | 160-bit subprime, q \| p-1 (public) | | `"g"` | `string` | binary number | no | generator of subgroup (public) | | `"priv_key"` | `string` | PEM key | no | private key x | | `"pub_key"` | `string` | PEM key | no | public key y = g^x | - `"dh"` key 用于 DH（迪菲-赫尔曼密钥交换）参数。 | 选项 | 类型 | 格式 | 是否必需 | 说明 | | --- | --- | --- | --- | --- | | `"p"` | `string` | binary number | no | prime number (shared) | | `"g"` | `string` | binary number | no | generator of Z_p (shared) | | `"priv_key"` | `string` | PEM key | no | private DH value x | | `"pub_key"` | `string` | PEM key | no | public DH value g^x | - `"ec"` key，用于椭圆曲线参数 | 选项 | 类型 | 格式 | 是否必需 | 说明 | | --- | --- | --- | --- | --- | | `"curve_name"` | `string` | name | no | name of curve, see `openssl_get_curve_names()` | | `"p"` | `string` | binary number | no | prime of the field for curve over Fp | | `"a"` | `string` | binary number | no | coofecient a of the curve for Fp: y^2 mod p = x^3 + ax + b mod p | | `"b"` | `string` | binary number | no | coofecient b of the curve for Fp: y^2 mod p = x^3 + ax + b mod p | | `"seed"` | `string` | binary number | no | 用于生成系数 b 的可选随机数种子 | | `"generator"` | `string` | binary encoded point | no | 曲线生成点 | | `"g_x"` | `string` | binary number | no | 曲线生成点 x 坐标 | | `"g_y"` | `string` | binary number | no | 曲线生成点 y 坐标 | | `"cofactor"` | `string` | binary number | no | curve cofactor | | `"order"` | `string` | binary number | no | curve order | | `"x"` | `string` | binary number | no | x coordinate (public) | | `"y"` | `string` | binary number | no | y coordinate (public) | | `"d"` | `string` | binary number | no | private key | - `"x25519"`、`"x448"`、`"ed25519"`、`"ed448"` key 用于 Curve25519 和 Curve448 参数。 | 选项 | 类型 | 格式 | 是否必需 | 说明 | | --- | --- | --- | --- | --- | | `"priv_key"` | `string` | PEM key | no | 私钥 | | `"pub_key"` | `string` | PEM key | no | 公钥 |

## 返回值

成功时此函数会返回 `OpenSSLAsymmetricKey` 的实例；在失败时则会返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 引入 `x25519`、`ed25519`、`x448` 和 `ed448` 字段，增加了对基于 Curve25519 和 Curve448 的密钥支持。 |
| 8.3.0 | 新增使用自定义 EC 参数生成 EC 秘钥的支持。特别是引入了 EC 选项：`p`、`a`、`b`、`seed`、`generator`、`g_x`、`g_y`、`cofactor` 和 `order`。 |
| 8.0.0 | 成功时此函数会返回 `OpenSSLAsymmetricKey` 的实例；在之前版本中，则会返回类似为 `OpenSSL key` 的 `resource`。 |
| 7.1.0 | `$options` 参数中增加了 `curve_name` 键，以便基于椭圆曲线算法创建 EC 密钥。 |

## 示例

**从私钥获取公钥**

```php


<?php

$private_key = openssl_pkey_new();

$public_key_pem = openssl_pkey_get_details($private_key)['key'];
echo $public_key_pem, PHP_EOL;

$public_key = openssl_pkey_get_public($public_key_pem);
var_dump($public_key);

?>

   
```

以上示例的输出类似于：

```text


// Output prior to PHP 8.0.0; note, the function returns a resource
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwknBFEherZe74BiRjTFA
hqwZ1SK7brwq7C/afnLXKhRR7jnrpfM0ypC46q8xz5UZswenZakJ7kd5fls+r4Bv
3P8XsKYLTh2m1GiWQhV1g77cNIN4qNWh70PiDO3fB2446o1LBgToQYuRZS5YQRfJ
rVD0ysgtVcCU9tjaey28HlgApOpYFTaaKPj2MBmEYpMC+kG2HhL12GfpHUi2eiXI
dXT2WskWHWvUrmQ7fJIfI92JlDokV62DH/q1oiedLs9OPNb0rL1aAmYdzaVN6XNH
x/o4Lh125v2vAPV9E3fZCDc/HDEUaahpjanMiCQEgEDp5Hr+CRkvERT5/ydN+p08
5wIDAQAB
-----END PUBLIC KEY-----

resource(6) of type (OpenSSL key)

// Output as of PHP 8.0.0; note, the function returns an object
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwknBFEherZe74BiRjTFA
hqwZ1SK7brwq7C/afnLXKhRR7jnrpfM0ypC46q8xz5UZswenZakJ7kd5fls+r4Bv
3P8XsKYLTh2m1GiWQhV1g77cNIN4qNWh70PiDO3fB2446o1LBgToQYuRZS5YQRfJ
rVD0ysgtVcCU9tjaey28HlgApOpYFTaaKPj2MBmEYpMC+kG2HhL12GfpHUi2eiXI
dXT2WskWHWvUrmQ7fJIfI92JlDokV62DH/q1oiedLs9OPNb0rL1aAmYdzaVN6XNH
x/o4Lh125v2vAPV9E3fZCDc/HDEUaahpjanMiCQEgEDp5Hr+CRkvERT5/ydN+p08
5wIDAQAB
-----END PUBLIC KEY-----

object(OpenSSLAsymmetricKey)#2 (0) {
}

   
```
