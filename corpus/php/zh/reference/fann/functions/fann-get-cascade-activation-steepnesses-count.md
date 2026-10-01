---
id: "zh-php-function-function-fann-get-cascade-activation-steepnesses-count"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_activation_steepnesses_count"
title: "激活陡度的数量"
signature: "int fann_get_cascade_activation_steepnesses_count(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-activation-steepnesses-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 激活陡度的数量

## 说明

```php
int fann_get_cascade_activation_steepnesses_count(resource $ann)
```

`fann_get_cascade_activation_functions()` 数组中激活陡度的数量。

默认的激活陡度的数量是 4.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功返回激活陡度数量，错误，则返回`false` .

## 参见

`fann_get_cascade_activation_steepnesses()` `fann_set_cascade_activation_functions()`
