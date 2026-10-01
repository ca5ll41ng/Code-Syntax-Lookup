---
id: "zh-php-function-function-openssl-cipher-iv-length"
language: "php"
lang: "zh"
category: "function"
name: "openssl_cipher_iv_length"
title: "获取密码iv长度"
signature: "int|false openssl_cipher_iv_length(string $cipher_algo)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-cipher-iv-length.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取密码iv长度

## 说明

```php
int|false openssl_cipher_iv_length(string $cipher_algo)
```

获取密码初始化向量(iv)长度。

## 参数

- **`$cipher_algo`** — 密码的方法，更多值查看 `openssl_get_cipher_methods()` 函数。

## 返回值

成功，返回密码长度, 失败返回 `false` .

## 错误／异常

当密码方法未知时，抛出一个`E_WARNING` 级的错误。

## 示例

**`openssl_cipher_iv_length()` 范例**

```php


<?php
$method = 'AES-128-CBC';
$ivlen = openssl_cipher_iv_length($method);

echo $ivlen;
?>

   
```

以上示例的输出类似于：

```text


16

   
```
