---
id: "zh-php-function-function-fann-get-cascade-output-stagnation-epochs"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_output_stagnation_epochs"
title: "返回级联输出停滞周期的数量"
signature: "int fann_get_cascade_output_stagnation_epochs(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-output-stagnation-epochs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回级联输出停滞周期的数量

## 说明

```php
int fann_get_cascade_output_stagnation_epochs(resource $ann)
```

级联输出停滞周期的数量表示在`fann_get_cascade_output_change_fraction()`不改变MSE的情况下，运行训练的周期数。

更多详情参见 `fann_get_cascade_output_change_fraction()`。

级联输出停滞周期的默认值是12。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回级联输出停滞周期，错误则返回 `false` .

## 参见

`fann_set_cascade_output_stagnation_epochs()` `fann_get_cascade_output_change_fraction()`
