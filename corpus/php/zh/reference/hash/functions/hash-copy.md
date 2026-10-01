---
id: "zh-php-function-function-hash-copy"
language: "php"
lang: "zh"
category: "function"
name: "hash_copy"
title: "拷贝哈希运算上下文"
signature: "HashContext hash_copy(HashContext $context)"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 拷贝哈希运算上下文

## 说明

```php
HashContext hash_copy(HashContext $context)
```

## 参数

- **`$context`** — 由 `hash_init()` 函数返回的哈希运算上下文。

## 返回值

返回哈希运算上下文的一个复本。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 接受的参数以及返回值从资源类型修改为 `HashContext` 对象类型。 |

## 示例

**`hash_copy()` 示例**

```php


<?php
$context = hash_init("sha256");
hash_update($context, "The quick brown fox ");

/* 拷贝上下文资源以便继续使用 */
$copy_context = hash_copy($context);

echo hash_final($context), "\n";

hash_update($copy_context, "jumped over the lazy dog.");
echo hash_final($copy_context), "\n";
?>

    
```

以上示例会输出：

```text


b29d66e56ed90cce9b0165c43fedec612b60a071974d8be4513e18580d55b5bd
68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483

    
```
