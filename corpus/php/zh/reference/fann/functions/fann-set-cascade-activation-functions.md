---
id: "zh-php-function-function-fann-set-cascade-activation-functions"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_cascade_activation_functions"
title: "设置级联候选激活函数的数组"
signature: "bool fann_set_cascade_activation_functions(resource $ann, array $cascade_activation_functions)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-cascade-activation-functions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置级联候选激活函数的数组

## 说明

```php
bool fann_set_cascade_activation_functions(resource $ann, array $cascade_activation_functions)
```

设置级联候选激活函数的数组。

想知道哪个候选神经元将会被该数组生成,参见 `fann_get_cascade_num_candidates()` .

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$cascade_activation_functions`** — 级联候选激活函数数组。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_cascade_activation_functions_count()` `fann_set_cascade_activation_functions()`
