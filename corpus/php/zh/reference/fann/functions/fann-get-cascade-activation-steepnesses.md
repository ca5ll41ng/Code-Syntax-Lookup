---
id: "zh-php-function-function-fann-get-cascade-activation-steepnesses"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_activation_steepnesses"
title: "返回级联激活陡度"
signature: "array fann_get_cascade_activation_steepnesses(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-activation-steepnesses.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回级联激活陡度

## 说明

```php
array fann_get_cascade_activation_steepnesses(resource $ann)
```

层级激活函数数组是一个和被候选使用的不同的数组。

参见 `fann_get_cascade_num_candidates()` 的描述，这个数组将会生成候选神经元。

默认的激活陡度是{0.25, 0.50, 0.75, 1.00}.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回级联激活陡度，错误则返回 `false`.

## 参见

`fann_get_cascade_activation_steepnesses_count()` `fann_set_cascade_activation_steepnesses()`
