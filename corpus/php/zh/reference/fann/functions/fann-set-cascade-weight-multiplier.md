---
id: "zh-php-function-function-fann-set-cascade-weight-multiplier"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_cascade_weight_multiplier"
title: "设置权重因子"
signature: "bool fann_set_cascade_weight_multiplier(resource $ann, float $cascade_weight_multiplier)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-cascade-weight-multiplier.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置权重因子

## 说明

```php
bool fann_set_cascade_weight_multiplier(resource $ann, float $cascade_weight_multiplier)
```

设置权重因子。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$cascade_weight_multiplier`** — 权重因子。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_cascade_weight_multiplier()`
