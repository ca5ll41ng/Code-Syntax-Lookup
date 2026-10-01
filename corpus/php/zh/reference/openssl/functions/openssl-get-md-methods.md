---
id: "zh-php-function-function-openssl-get-md-methods"
language: "php"
lang: "zh"
category: "function"
name: "openssl_get_md_methods"
title: "获取可用的摘要算法"
signature: "array openssl_get_md_methods(bool $aliases = false)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-get-md-methods.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取可用的摘要算法

## 说明

```php
array openssl_get_md_methods(bool $aliases = false)
```

获取可用的摘要算法列表

## 参数

- **`$aliases`** — 设置为 `true` 时，返回的`array`中将会包含摘要的别名.

## 返回值

含有可用摘要算法的`数组`

## 示例

**`openssl_get_md_methods()` 范例：**

显示了可用的摘要，以及哪些别名可能是可用的。

```php


<?php
$digests             = openssl_get_md_methods();
$digests_and_aliases = openssl_get_md_methods(true);
$digest_aliases      = array_diff($digests_and_aliases, $digests);

print_r($digests);

print_r($digest_aliases);

?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => DSA
    [1] => DSA-SHA
    [2] => MD2
    [3] => MD4
    [4] => MD5
    [5] => RIPEMD160
    [6] => SHA
    [7] => SHA1
    [8] => SHA224
    [9] => SHA256
    [10] => SHA384
    [11] => SHA512
    [12] => dsaEncryption
    [13] => dsaWithSHA
    [14] => ecdsa-with-SHA1
    [15] => md2
    [16] => md4
    [17] => md5
    [18] => ripemd160
    [19] => sha
    [20] => sha1
    [21] => sha224
    [22] => sha256
    [23] => sha384
    [24] => sha512
)
Array
(
    [2] => DSA-SHA1
    [3] => DSA-SHA1-old
    [4] => DSS1
    [9] => RSA-MD2
    [10] => RSA-MD4
    [11] => RSA-MD5
    [12] => RSA-RIPEMD160
    [13] => RSA-SHA
    [14] => RSA-SHA1
    [15] => RSA-SHA1-2
    [16] => RSA-SHA224
    [17] => RSA-SHA256
    [18] => RSA-SHA384
    [19] => RSA-SHA512
    [28] => dsaWithSHA1
    [29] => dss1
    [32] => md2WithRSAEncryption
    [34] => md4WithRSAEncryption
    [36] => md5WithRSAEncryption
    [37] => ripemd
    [39] => ripemd160WithRSA
    [40] => rmd160
    [43] => sha1WithRSAEncryption
    [45] => sha224WithRSAEncryption
    [47] => sha256WithRSAEncryption
    [49] => sha384WithRSAEncryption
    [51] => sha512WithRSAEncryption
    [52] => shaWithRSAEncryption
    [53] => ssl2-md5
    [54] => ssl3-md5
    [55] => ssl3-sha1
)

    
```

## 参见

`openssl_digest()` `openssl_get_cipher_methods()`
