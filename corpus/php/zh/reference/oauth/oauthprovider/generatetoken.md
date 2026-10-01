---
id: "zh-php-function-oauthprovider-generatetoken"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::generateToken"
title: "生成一个随机令牌"
signature: "final public static string OAuthProvider::generateToken(int $size, bool $strong = false)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.generatetoken.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成一个随机令牌

## 说明

```php
final public static string OAuthProvider::generateToken(int $size, bool $strong = false)
```

生成一个伪随机字节的 `字符串` 。

## 参数

- **`$size`** — 想要的令牌长度，单位为字节。
- **`$strong`** — 设置为 `true` 则意味着将对熵使用 `/dev/random` ，否则使用非阻塞的 `/dev/urandom`。在 Windows 平台将忽略此参数。

## 返回值

生成的令牌，一个以字节为单位的 `字符串` 。

## 错误／异常

如果 `$strong` 参数为 `true` ， 则当回退到用 `rand()` 来实现填充剩余的随机字节的时候，将触发一个 `E_WARNING` 级别的错误（比如，当最初找不到足够的随机数据的时候）。

## 示例

**`OAuthProvider::generateToken()` 例子**

```php


<?php
$p = new OAuthProvider();

$t = $p->generateToken(4);

echo strlen($t),  PHP_EOL;
echo bin2hex($t), PHP_EOL;

?>

   
```

以上示例的输出类似于：

```text


4
b6a82c27

   
```

## 注释

> 当系统没有足够的随机数据可用的时候，此函数将使用 PHP 内部的 `rand()` 来实现填充剩余的随机字节。

## 参见

 `openssl_random_pseudo_bytes()` `mcrypt_create_iv()`
