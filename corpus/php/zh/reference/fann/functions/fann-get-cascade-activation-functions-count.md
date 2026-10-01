---
id: "zh-php-function-function-fann-get-cascade-activation-functions-count"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_activation_functions_count"
title: "返回级联激活函数的数量"
signature: "int fann_get_cascade_activation_functions_count(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-activation-functions-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回级联激活函数的数量

## 说明

```php
int fann_get_cascade_activation_functions_count(resource $ann)
```

在 `fann_get_cascade_activation_functions()` 函数数组的激活函数的数量。

默认激活函数的数量为6.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回级联激活函数的数量，错误则返回`false` .

## 参见

`fann_get_cascade_activation_functions()` `fann_set_cascade_activation_functions()`
