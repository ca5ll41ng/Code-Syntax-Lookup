---
id: "zh-php-function-function-random-int"
language: "php"
lang: "zh"
category: "function"
name: "random_int"
title: "获取生成加密安全、均匀分布的整数"
signature: "int random_int(int $min, int $max)"
module: "random"
source_url: "https://www.php.net/manual/zh/function.random-int.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取生成加密安全、均匀分布的整数

## 说明

 {{{ 

```php
int random_int(int $min, int $max)
```

生成在指定最小值和最大值之间均匀分布的整数。

该函数生成的随机性适用于所有应用，包括生成长期秘密，如加密密钥。

此函数使用的随机性来源先后顺序如下：

- Linux：[getrandom()]()、`/dev/urandom`
- FreeBSD >= 12（PHP >= 7.3）：[getrandom()]()、`/dev/urandom`
- Windows（PHP >= 7.2）：[CNG-API]() Windows：[CryptGenRandom]()
- macOS（PHP >= 8.2；>= 8.1.9；>= 8.0.22 如果 CCRandomGenerateBytes 在编译时可用）：CCRandomGenerateBytes() macOS（PHP >= 8.1；>= 8.0.2）：arc4random_buf()、`/dev/urandom`
- NetBSD >= 7（PHP >= 7.1；>= 7.0.1）：arc4random_buf()、`/dev/urandom`
- OpenBSD >= 5.5（PHP >= 7.1；>= 7.0.1）：arc4random_buf()、`/dev/urandom`
- DragonflyBSD（PHP >= 8.1）：[getrandom()]()、`/dev/urandom`
- Solaris（PHP >= 8.1）：[getrandom()]()、`/dev/urandom`
- 未提及的 PHP 版本和操作系统的组合：`/dev/urandom`
- 如果没有可用的来源或它们都无法生成随机性，则将抛出 `Random\RandomException`。

> 虽然此函数是 PHP 7.0 添加到 PHP 中，但是从 PHP 5.2 到 PHP 5.6 都可以用 [用户级实现]()。

 }}} 

## 参数

 {{{ 

- **`$min`** — 要返回的最小值。
- **`$max`** — 要返回的最大值。

 }}} 

## 返回值

 {{{ 

从闭合区间 [`$min`, `$max`] 返回加密安全、均匀分布的整数。`$min` 和 `$max` 都有可能返回。

 }}} 

## 错误／异常

 {{{ 

- 如果没有找到合适的随机性来源，将会抛出 `Random\RandomException`。
- 如果 `$max` 小于 `$min`，将会抛出 `ValueError`。

 }}} 

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | CSPRNG 失败时，此函数现在将抛出 `Random\RandomException`。之前抛出普通的 `Exception`。 |

## 示例

 {{{ 

**`random_int()` 示例**

 {{{ 

```php


<?php
var_dump(random_int(100, 999));
var_dump(random_int(-1000, 0));
?>

   
```

以上示例的输出类似于：

```text


int(248)
int(-898)

   
```

 }}} 

 }}} 

## 参见

 {{{ 

 `Random\Randomizer::getInt()` `random_bytes()` 

 }}}
