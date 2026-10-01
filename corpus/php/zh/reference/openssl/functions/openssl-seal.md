---
id: "zh-php-function-function-openssl-seal"
language: "php"
lang: "zh"
category: "function"
name: "openssl_seal"
title: "密封 (加密) 数据"
signature: "int|false openssl_seal(string $data, string $sealed_data, array $encrypted_keys, array $public_key, string $cipher_algo, string $iv = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-seal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 密封 (加密) 数据

## 说明

```php
int|false openssl_seal(string $data, string $sealed_data, array $encrypted_keys, array $public_key, string $cipher_algo, string $iv = null)
```

`openssl_seal()` 使用指定 `$cipher_algo` 和随机生成的密钥密封（加密）`$data`。使用 `$public_key` 数组中的每个公钥对秘钥加密，并在 `$encrypted_keys` 返回每个加密的 envelope 密钥。 这允许将密封的数据发送给多个接收方（前提是公钥可用）。每个接收方都必须同时接收加密的数据和用接收方的公钥加密的 envelope 密钥。生成 IV（初始化向量），并在 `$iv` 中返回其值。

## 参数

- **`$data`** — 要密封的数据。
- **`$sealed_data`** — 被密封后的数据。
- **`$encrypted_keys`** — 已被加密的密钥数组。
- **`$public_key`** — 包含公钥的 `OpenSSLAsymmetricKey` 实例数组。
- **`$cipher_algo`** — 加密算法。 > 默认值在 PHP 8.0 之前为（`'RC4'`），这不安全。强烈建议明确指定安全密码方法。
- **`$iv`** — 用于解密 `$data` 的初始化向量。如果密码方法需要 IV，则需要它。可以通过调用 `openssl_cipher_iv_length()` 时传入 `$cipher_algo` 来找到它。
  > IV 无法明确设置。其中设置的任何值都将被随机生成的值覆盖。



## 返回值

成功时返回密封后数据的长度，错误为 `false`。 如果密封后的数据成功地通过 `$sealed_data` 变量返回，那么信封密钥也将会通过 `$encrypted_keys` 变量返回。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$public_key` 现在接受 `OpenSSLAsymmetricKey` 实例 `array`；之前接受类型 `OpenSSL key` 的 `resource` 数组。 |
| 8.0.0 | `$cipher_algo` 不再是可选参数。 |
| 8.0.0 | `$iv` 现在可为 null。 |

## 示例

**`openssl_seal()` 示例**

```php


<?php
// 假设 $data 包含要密封的数据
$data = "test";

// 获取公钥
$pk1 = openssl_get_publickey("file://cert1.pem");
$pk2 = openssl_get_publickey("file://cert2.pem");

// 密封消息，只有 $pk1 和 $pk2 的所有者才能分别使用密钥
// $ekeys[0] 和 $ekeys[1] 解密 $sealed。
if (openssl_seal($data, $sealed, $ekeys, array($pk1, $pk2), 'AES256', $iv) > 0) {
    // 可能存储 $sealed 和 $iv 值并稍后在 openssl_open 中使用
    echo "success\n";
}
?>

    
```

## 参见

`openssl_open()`
