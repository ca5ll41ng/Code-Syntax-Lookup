---
id: "zh-php-function-function-fann-randomize-weights"
language: "php"
lang: "zh"
category: "function"
name: "fann_randomize_weights"
title: "给每个连接赋一个介于 min_weight 和 max_weight 之间的随机权重。"
signature: "bool fann_randomize_weights(resource $ann, float $min_weight, float $max_weight)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-randomize-weights.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 给每个连接赋一个介于 min_weight 和 max_weight 之间的随机权重。

## 说明

```php
bool fann_randomize_weights(resource $ann, float $min_weight, float $max_weight)
```

给每个连接赋一个介于 `$min_weight` 和 `$max_weight`之间的随机权重。

从一开始权重介于 -0.1 和 0.1之间。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$min_weight`** — 最小权重值
- **`$max_weight`** — 最大权重值

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_init_weights()`
