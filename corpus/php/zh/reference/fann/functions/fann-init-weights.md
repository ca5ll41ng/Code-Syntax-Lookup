---
id: "zh-php-function-function-fann-init-weights"
language: "php"
lang: "zh"
category: "function"
name: "fann_init_weights"
title: "使用 Widrow 和 Nguyen 算法初始化权重。"
signature: "bool fann_init_weights(resource $ann, resource $train_data)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-init-weights.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 Widrow 和 Nguyen 算法初始化权重。

## 说明

```php
bool fann_init_weights(resource $ann, resource $train_data)
```

使用 Widrow 和 Nguyen 算法初始化权重。

该函数的作用和 `fann_randomize_weights()`函数相似。 该函数将会使用 Derrick Nguyen 和 Bernard Widrow 开发的算法来设置权重用于加速训练。 该技术不是经常奏效，在某些场景下比纯粹的随机初始化来得更低效。

该算法要求获取输入数据的范围(比如 最大和最小输入)，因此接受别的参数，数据(将会在网络中训练的数据)。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$train_data`** — 神经网络训练数据 `资源`。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_randomize_weights()` `fann_read_train_from_file()`
