---
id: "zh-php-function-function-openssl-open"
language: "php"
lang: "zh"
category: "function"
name: "openssl_open"
title: "打开密封的数据"
signature: "bool openssl_open(string $data, string $output, string $encrypted_key, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string $cipher_algo, string|null $iv = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开密封的数据

## 说明

```php
bool openssl_open(string $data, string $output, string $encrypted_key, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string $cipher_algo, string|null $iv = null)
```

`openssl_open()` 使用通过 `$private_key` 从 `$encrypted_key` 解密得到的信封密钥来打开/解密 `$data`。解密过程采用 `$cipher_algo` 和 `$iv`。仅当加密方法需要时，才需提供 iv。该函数将解密后的数据填充至 `$output`。信封密钥通常在使用与私钥对应的公钥密封数据时生成。更多信息请参阅 `openssl_seal()`。

## 参数

- **`$data`** — 密封数据。
- **`$output`** — 如果调用成功，则在这个参数中返回打开的数据。
- **`$encrypted_key`** — 可使用 `$private_key` 解密的对称加密密钥。
- **`$private_key`** — 用于解密 `$encrypted_key` 的私钥。
- **`$cipher_algo`** — 用于解密 `$data` 的密码算法。 > PHP 8.0 之前版本的默认值为（`'RC4'`），该算法存在安全隐患。强烈建议明确指定安全密码方法。
- **`$iv`** — 用于解密 `$data` 的初始化向量。当密码算法需要 IV 时，必须提供该参数。可通过调用 `openssl_cipher_iv_length()` 并传入 `$cipher_algo` 来确认是否需要 IV。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509 CSR` 的 `resource`。 |
| 8.0.0 | `$cipher_algo` 不再是可选参数。 |

## 示例

**`openssl_open()` 示例**

```php


<?php

// $sealed、$env_key 和 $iv 分别假设包含密封数据、信封密钥和初始化向量，这些参数均由数据密封方提供。

// 从 private_key.pem 文件中获取私钥
$pkey = openssl_get_privatekey("file://private_key.pem");

// 解密数据并存储到 $open
if (openssl_open($sealed, $open, $env_key, $pkey, 'AES256', $iv)) {
    echo "Here is the opened data: ", $open;
} else {
    echo "Failed to open data";
}

?>

    
```

## 参见

`openssl_seal()`
