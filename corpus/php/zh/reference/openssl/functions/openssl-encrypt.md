---
id: "zh-php-function-function-openssl-encrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_encrypt"
title: "加密数据"
signature: "string|false openssl_encrypt(string $data, string $cipher_algo, string $passphrase, int $options = 0, string $iv = \"\", string $tag = null, string $aad = \"\", int $tag_length = 16)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 加密数据

## 说明

```php
string|false openssl_encrypt(string $data, string $cipher_algo, string $passphrase, int $options = 0, string $iv = "", string $tag = null, string $aad = "", int $tag_length = 16)
```

以指定的方式和密码短语加密数据，返回原始或 base64 编码后的字符串。

## 参数

- **`$data`** — 待加密的明文信息数据。
- **`$cipher_algo`** — 密码学方式。`openssl_get_cipher_methods()` 可获取有效密码方式列表。
- **`$passphrase`** — 密码短语。若 passphrase 比预期长度短，将静默用 `NUL` 填充； 若比预期长度更长，将静默截断。
  > 正如其名称所示，passphrase 没有用于密钥导出函数。唯一的操作是用 `NUL` 字符填充，或者如果长度与预期不同则截断。


- **`$options`** — `$options` 是以下标记的按位或： `OPENSSL_RAW_DATA` 和 `OPENSSL_ZERO_PADDING` 或 `OPENSSL_DONT_ZERO_PAD_KEY`。
- **`$iv`** — 非 `null` 的初始化向量。如果 IV 比预期短，则用 `NUL` 字符填充并发出警告；如果密码短语比预期长，则将其截断并发出警告。
- **`$tag`** — 使用 AEAD 密码模式（GCM 或 CCM）时传引用的验证标签。
- **`$aad`** — 附加的验证数据。
- **`$tag_length`** — 验证 `$tag` 的长度。GCM 模式时，它的范围是 4 到 16。

## 返回值

成功时返回加密后的字符串， 或者在失败时返回 `false`。

## 错误／异常

`$cipher_algo` 传入未知算法时，产生 `E_WARNING` 级别的错误。

`$iv` 传入空字符串时产生 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 增加了 `$tag`、`$aad`、`$tag_length` 参数 |

## 示例

**PHP 7.1 之前的 GCM 模式的 AES 认证加密示例**

```php


<?php
//$key should have been previously generated in a cryptographically safe way, like openssl_random_pseudo_bytes
$plaintext = "message to be encrypted";
$cipher = "aes-128-gcm";
if (in_array($cipher, openssl_get_cipher_methods()))
{
    $ivlen = openssl_cipher_iv_length($cipher);
    $iv = openssl_random_pseudo_bytes($ivlen);
    $ciphertext = openssl_encrypt($plaintext, $cipher, $key, $options=0, $iv, $tag);
    //store $cipher, $iv, and $tag for decryption later
    $original_plaintext = openssl_decrypt($ciphertext, $cipher, $key, $options=0, $iv, $tag);
    echo $original_plaintext."\n";
}
?>

    
```

**PHP 5.6+ 的 AES 认证加密例子**

```php


<?php
//$key previously generated safely, ie: openssl_random_pseudo_bytes
$plaintext = "message to be encrypted";
$ivlen = openssl_cipher_iv_length($cipher="AES-128-CBC");
$iv = openssl_random_pseudo_bytes($ivlen);
$ciphertext_raw = openssl_encrypt($plaintext, $cipher, $key, $options=OPENSSL_RAW_DATA, $iv);
$hmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary=true);
$ciphertext = base64_encode( $iv.$hmac.$ciphertext_raw );

//decrypt later....
$c = base64_decode($ciphertext);
$ivlen = openssl_cipher_iv_length($cipher="AES-128-CBC");
$iv = substr($c, 0, $ivlen);
$hmac = substr($c, $ivlen, $sha2len=32);
$ciphertext_raw = substr($c, $ivlen+$sha2len);
$original_plaintext = openssl_decrypt($ciphertext_raw, $cipher, $key, $options=OPENSSL_RAW_DATA, $iv);
$calcmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary=true);
if (hash_equals($hmac, $calcmac))// timing attack safe comparison
{
    echo $original_plaintext."\n";
}
?>

    
```

## 参见

`openssl_decrypt()`
