---
id: "zh-php-function-function-fann-get-cascade-min-cand-epochs"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_min_cand_epochs"
title: "返回最小的候选周期"
signature: "int fann_get_cascade_min_cand_epochs(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-min-cand-epochs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最小的候选周期

## 说明

```php
int fann_get_cascade_min_cand_epochs(resource $ann)
```

最小候选周期表示在添加新的候选神经元之前，输入连接到被训练的候选神经元最小的周期数。

默认的最小候选周期是50.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回最小候选周期，错误则返回 `false` .

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_set_cascade_min_cand_epochs()`
