---
id: "zh-php-function-function-hash-pbkdf2"
language: "php"
lang: "zh"
category: "function"
name: "hash_pbkdf2"
title: "生成所提供密码的 PBKDF2 密钥导出"
signature: "string hash_pbkdf2(string $algo, string $password, string $salt, int $iterations, int $length = 0, bool $binary = false, array $options = [])"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-pbkdf2.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成所提供密码的 PBKDF2 密钥导出

## 说明

```php
string hash_pbkdf2(string $algo, string $password, string $salt, int $iterations, int $length = 0, bool $binary = false, array $options = [])
```

## 参数

- **`$algo`** — 要使用的散列算法的名称（例如：`“sha256”`）。 可以在 `hash_hmac_algos()` 中查看当前支持的算法。
  > 不允许使用非加密哈希函数。


- **`$password`** — 要进行导出的密码。
- **`$salt`** — 进行导出时所使用的“盐”，这个值应该是随机生成的。
- **`$iterations`** — 进行导出时的迭代次数。
- **`$length`** — 密钥导出数据的长度。如果 `$binary` 为 `true`， 此参数为密钥导出数据的字节长度。如果 `$binary` 为 `false`， 此参数为密钥导出数据的字节长度的 2 倍，因为 1 个字节数据对应的 2 个 16 进制的字符。 — 如果传入 `0`，则使用所选算法的完整输出大小。
- **`$binary`** — 设置为 `true` 输出原始二进制数据， 设置为 `false` 输出小写 16 进制字符串。
- **`$options`** — 各种散列算法的一系列选项数组。 目前 MurmurHash 算法仅支持 `“seed”` 参数。

## 返回值

 {{{ 

如果 `$binary` 设置为 `true`， 则返回原始二进制数据表示的信息摘要， 否则返回 16 进制小写字符串格式表示的信息摘要。

 }}} 

## 错误／异常

 {{{ 

在以下情况下会抛出 `ValueError` 异常：算法未知，`$iterations` 小于等于 `0`，`$length` 小于等于 `0` 或者 `$salt` 过长（大于 `INT_MAX``- 4`）。

 }}} 

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在错误时将抛出 `ValueError` 异常。之前返回 `false` 并发出 `E_WARNING` 消息。 |
| 7.2.0 | 不再支持非加密的散列函数（adler32、crc32、crc32b、fnv132、fnv1a32、fnv164、fnv1a64、joaat）。 |

## 示例

**`hash_pbkdf2()` 示例，基础用法**

```php


<?php
$password = "password";
$iterations = 600000;

// 使用 random_bytes() 生成一个加密安全的随机盐。
$salt = random_bytes(16);

$hash = hash_pbkdf2("sha256", $password, $salt, $iterations, 20);
var_dump($hash);

// 对于原始二进制，$length 需要减半以获得相同的结果
$hash = hash_pbkdf2("sha256", $password, $salt, $iterations, 10, true);
var_dump(bin2hex($hash));?>
?>

    
```

以上示例的输出类似于：

```text


string(20) "120fb6cffcf8b32c43e7"
string(20) "120fb6cffcf8b32c43e7"

    
```

## 注释

> 为了安全起见，可以使用 PBKDF2 方法对密码明文进行散列运算后再存储。但是更好的方案是使用 `password_hash()` 函数或者使用 `CRYPT_BLOWFISH` 算法调用 `crypt()` 函数。

## 参见

`password_hash()` `hash_hkdf()` `sodium_crypto_pwhash()`
