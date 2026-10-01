---
id: "zh-php-function-function-fann-copy"
language: "php"
lang: "zh"
category: "function"
name: "fann_copy"
title: "创建一个 fann 结构体的副本。"
signature: "resource fann_copy(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个 fann 结构体的副本。

## 说明

```php
resource fann_copy(resource $ann)
```

创建一个 fann 结构体的副本。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回神经网络资源的副本，失败则返回`false`

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_test()`
