---
id: "zh-php-function-function-fann-get-cascade-min-out-epochs"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_min_out_epochs"
title: "返回最小输出周期"
signature: "int fann_get_cascade_min_out_epochs(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-min-out-epochs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最小输出周期

## 说明

```php
int fann_get_cascade_min_out_epochs(resource $ann)
```

最小输出周期表明在加入新的候选神经元后输出连接必须训练的最小周期。

默认的最小输出周期是50。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回最小的输出周期，错误则返回 `false` .

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_set_cascade_min_out_epochs()`
