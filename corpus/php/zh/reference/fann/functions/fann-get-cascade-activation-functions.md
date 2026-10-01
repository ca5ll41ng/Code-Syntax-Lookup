---
id: "zh-php-function-function-fann-get-cascade-activation-functions"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_activation_functions"
title: "返回级联激活函数"
signature: "array fann_get_cascade_activation_functions(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-activation-functions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回级联激活函数

## 说明

```php
array fann_get_cascade_activation_functions(resource $ann)
```

层级激活函数数组是一个和被候选使用的不同的数组。

参见 `fann_get_cascade_num_candidates()` 的描述，这个数组将会生成候选神经元。

默认的激活函数是 `FANN_SIGMOID`, `FANN_SIGMOID_SYMMETRIC`, `FANN_GAUSSIAN`, `FANN_GAUSSIAN_SYMMETRIC`, `FANN_ELLIOT`, `FANN_ELLIOT_SYMMETRIC`.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回层级激活函数数组，错误则返回 `false` .

## 参见

`fann_get_cascade_activation_functions_count()` `fann_set_cascade_activation_functions()`
