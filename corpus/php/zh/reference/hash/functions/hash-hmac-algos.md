---
id: "zh-php-function-function-hash-hmac-algos"
language: "php"
lang: "zh"
category: "function"
name: "hash_hmac_algos"
title: "返回适用于 hash_hmac 的已注册散列算法列表"
signature: "array hash_hmac_algos()"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-hmac-algos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回适用于 hash_hmac 的已注册散列算法列表

## 说明

 {{{ 

```php
array hash_hmac_algos()
```

 }}} 

## 参数

此函数没有参数。

## 返回值

 {{{ 

返回数字索引数组，包含适用于 `hash_hmac()` 支持的散列算法列表。

 }}} 

## 示例

 {{{ 

**`hash_hmac_algos()` 示例**

 {{{ 

```php


<?php
print_r(hash_hmac_algos());

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => md2
    [1] => md4
    [2] => md5
    [3] => sha1
    [4] => sha224
    [5] => sha256
    [6] => sha384
    [7] => sha512/224
    [8] => sha512/256
    [9] => sha512
    [10] => sha3-224
    [11] => sha3-256
    [12] => sha3-384
    [13] => sha3-512
    [14] => ripemd128
    [15] => ripemd160
    [16] => ripemd256
    [17] => ripemd320
    [18] => whirlpool
    [19] => tiger128,3
    [20] => tiger160,3
    [21] => tiger192,3
    [22] => tiger128,4
    [23] => tiger160,4
    [24] => tiger192,4
    [25] => snefru
    [26] => snefru256
    [27] => gost
    [28] => gost-crypto
    [29] => haval128,3
    [30] => haval160,3
    [31] => haval192,3
    [32] => haval224,3
    [33] => haval256,3
    [34] => haval128,4
    [35] => haval160,4
    [36] => haval192,4
    [37] => haval224,4
    [38] => haval256,4
    [39] => haval128,5
    [40] => haval160,5
    [41] => haval192,5
    [42] => haval224,5
    [43] => haval256,5
)

   
```

 }}} 

 }}} 

## 注释

 {{{ 

> 在 PHP 7.2.0 之前，获取支持的散列算法列表的唯一方法是调用 `hash_algos()`，该方法也会返回不适合 `hash_hmac()` 的散列算法。

 }}} 

## 参见

 {{{ 

 `hash_hmac()` `hash_algos()` 

 }}}
