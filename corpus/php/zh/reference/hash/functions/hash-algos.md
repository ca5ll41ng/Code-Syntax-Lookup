---
id: "zh-php-function-function-hash-algos"
language: "php"
lang: "zh"
category: "function"
name: "hash_algos"
title: "返回已注册的散列算法列表"
signature: "array hash_algos()"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-algos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回已注册的散列算法列表

## 说明

```php
array hash_algos()
```

## 参数

此函数没有参数。

## 返回值

返回一个数值索引的数组， 包含了受支持的散列算法名称。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 新增对 MurmurHash3 和 xxHash 算法的支持。 |
| 7.4.0 | 支持 crc32c。 |
| 7.1.0 | 加入 sha512/224，sha512/256，sha3-224，sha3-256，sha3-384 以及 sha3-512 算法的支持。 |

 }}} 

## 示例

**`hash_algos()` 示例**

在 PHP 8.1.0 中，`hash_algos()` 会返回下表所示的算法清单：

```php


<?php
print_r(hash_algos());
?>

    
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
    [29] => adler32
    [30] => crc32
    [31] => crc32b
    [32] => crc32c
    [33] => fnv132
    [34] => fnv1a32
    [35] => fnv164
    [36] => fnv1a64
    [37] => joaat
    [38] => murmur3a
    [39] => murmur3c
    [40] => murmur3f
    [41] => xxh32
    [42] => xxh64
    [43] => xxh3
    [44] => xxh128
    [45] => haval128,3
    [46] => haval160,3
    [47] => haval192,3
    [48] => haval224,3
    [49] => haval256,3
    [50] => haval128,4
    [51] => haval160,4
    [52] => haval192,4
    [53] => haval224,4
    [54] => haval256,4
    [55] => haval128,5
    [56] => haval160,5
    [57] => haval192,5
    [58] => haval224,5
    [59] => haval256,5
)

    
```

## 参见

 {{{ 

 `hash()` `hash_hmac_algos()` 

 }}}
