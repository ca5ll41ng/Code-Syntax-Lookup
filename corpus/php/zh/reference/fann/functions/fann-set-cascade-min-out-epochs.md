---
id: "zh-php-function-function-fann-set-cascade-min-out-epochs"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_cascade_min_out_epochs"
title: "设置最小输出周期"
signature: "bool fann_set_cascade_min_out_epochs(resource $ann, int $cascade_min_out_epochs)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-cascade-min-out-epochs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置最小输出周期

## 说明

```php
bool fann_set_cascade_min_out_epochs(resource $ann, int $cascade_min_out_epochs)
```

设置最小输出周期。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$cascade_min_out_epochs`** — 最小输出周期。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_get_cascade_min_out_epochs()`
