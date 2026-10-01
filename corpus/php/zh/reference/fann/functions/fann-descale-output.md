---
id: "zh-php-function-function-fann-descale-output"
language: "php"
lang: "zh"
category: "function"
name: "fann_descale_output"
title: "在获取基于先前计算的参数之后，在输出向量中缩小数据"
signature: "bool fann_descale_output(resource $ann, array $output_vector)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-descale-output.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在获取基于先前计算的参数之后，在输出向量中缩小数据

## 说明

```php
bool fann_descale_output(resource $ann, array $output_vector)
```

在获取基于先前计算的参数之后，在输出向量中缩小数据。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$output_vector`** — 将被缩小的输出向量。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_scale_output()` `fann_descale_input()`
