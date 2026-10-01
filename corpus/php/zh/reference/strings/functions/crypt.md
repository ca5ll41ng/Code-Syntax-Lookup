---
id: "zh-php-function-function-crypt"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "crypt"
title: "单向字符串散列"
signature: "string crypt(string $string, string $salt)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.crypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 单向字符串散列

## 说明

```php
string crypt(string $string, string $salt)
```

`crypt()` 返回基于标准 UNIX DES 算法或替代算法的散列字符串。`password_verify()` 兼容 `crypt()`。因此，由 `crypt()` 创建的密码散列可以跟 `password_verify()` 一起使用。

在 PHP 8.0.0 之前，`$salt` 参数是可选的。然而，如果没有 `$salt`，`crypt()` 会创建弱散列。在没有它的情况下引发 `E_NOTICE` 级别的错误。为了更好的安全性，请确保指定足够强度的盐值。

`password_hash()` 使用了强散列，产生足够强的盐值，并自动应用合适的轮次。`password_hash()` 是`crypt()` 的简单封装，并且与现有的密码散列兼容。推荐使用 `password_hash()`。

散列类型由盐值参数触发。如果没有提供盐值，PHP 将自动生成一个 2 个字符（DES）或者 12 个字符（MD5）的盐值 ，这取决于 MD5 crypt() 的可用性。PHP 设置了名为 `CRYPT_SALT_LENGTH` 的常量，用来表示可用散列允许的最长有效盐值。

基于标准 DES 算法的 `crypt()` 在输出内容的开始位置返回两个字符的盐值。它也只使用 `$string` 的开始 8 个字符，所以更长的以相同 8 个字符开始的字符串也将生成相同的结果（当使用了相同的盐值时）。

支持以下散列类型：

- `CRYPT_STD_DES` - 基于标准 DES 算法的散列使用 "./0-9A-Za-z" 字符中的两个字符作为盐值。在盐值中使用非法的字符将导致 crypt() 失败。
- `CRYPT_EXT_DES` - 扩展的基于 DES 算法的散列。“sale” 为 9 个字符的字符串，由 1 个下划线后面跟着 4 字符循环次数和 4 字符盐值组成。这些 4 字符字符串都编码为 24 字节，最低有效位在前。值 `0` 到 `63` 被编码为 `./0-9A-Za-z`。在盐值中使用非法的字符将导致 crypt() 失败。
- `CRYPT_MD5` - MD5 散列使用一个以 $1$ 开始的 12 字符的字符串盐值。
- `CRYPT_BLOWFISH` - Blowfish 散列使用如下盐值：“$2a$”、“$2x$” 或 “$2y$”，两位 cost 参数，“$” 以及 22 位由 “./0-9A-Za-z” 中的字符组合而成的字符串。在盐值中使用此范围之外的字符将导致 crypt() 返回一个空字符串。两位 cost 参数是循环次数以 2 为底的对数，它的范围是 04-31，超出这个范围将导致 crypt() 失败。 “$2x$” 可能很弱，“$2x$” 散列对其兼容并增强安全性。对于新的散列，应该使用“$2y$”。
- `CRYPT_SHA256` - SHA-256 算法使用一个以 $5$ 开头的 16 字符字符串盐值进行散列。如果盐值字符串以 “rounds=<N>$” 开头，N 的数字值将被用来指定散列循环的执行次数，这点很像 Blowfish 算法的 cost 参数。默认的循环次数是 5000，最小是 1000，最大是 999,999,999。超出这个范围的 N 将会被转换为最接近的值。
- `CRYPT_SHA512` - SHA-512 算法使用一个以 $6$ 开头的 16 字符字符串盐值进行散列。如果盐值字符串以 “rounds=<N>$” 开头，N 的数字值将被用来指定散列循环的执行次数，这点很像 Blowfish 算法的 cost 参数。默认的循环次数是 5000，最小是 1000，最大是 999,999,999。超出这个范围的 N 将会被转换为最接近的值。

## 参数

- **`$string`** — 待散列的字符串。
  > 使用 `CRYPT_BLOWFISH` 算法将导致 `$string` 被裁剪为一个最长72 字节的字符串。


- **`$salt`** — 盐值字符串。如果没有提供，算法行为将由不同的算法实现决定，并可能导致不可预料的结束。

## 返回值

返回散列后的字符串或一个少于 13 字符的字符串，从而保证在失败时与盐值区分开来。

> 当校验密码时，应该使用一个不容易被时间攻击的字符串比较函数来比较`crypt()`的输出与之前已知的散列。出于这个目的，PHP 提供了`hash_equals()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$salt`不再可选。 |

## 示例

**`crypt()` 示例**

```php


<?php
$user_input = 'rasmuslerdorf';
$hashed_password = '$6$rounds=1000000$NJy4rIPjpOaU$0ACEYGg/aKCY3v8O8AfyiO7CTfZQ8/W231Qfh2tRLmfdvFD6XfHk12u6hMr9cYIA4hnpjLNSTRtUwYr9km9Ij/';

// 验证现有的 crypt() 哈希值，以便与非 PHP 软件兼容。
if (hash_equals($hashed_password, crypt($user_input, $hashed_password))) {
   echo "Password verified!";
}
?>

    
```

## 注释

> 由于 `crypt()` 使用的是单向算法，因此不存在 decrypt 函数。

## 参见

`hash_equals()` `password_hash()` 更多关于 crypt 函数的信息，请阅读 Unix man 页面
