---
id: "zh-php-function-function-fann-train-epoch"
language: "php"
lang: "zh"
category: "function"
name: "fann_train_epoch"
title: "使用一组训练数据训练一个周期。"
signature: "float fann_train_epoch(resource $ann, resource $data)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-train-epoch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用一组训练数据训练一个周期。

## 说明

```php
float fann_train_epoch(resource $ann, resource $data)
```

使用保存在 data 中训练数据训练一个周期。一个训练周期表示所有的训练数据正好使用了一次。

这个函数将会返回在其实际计算之前或当中被计算的 MSE 错误。但是因为计算需要再次走一遍整个训练集，所有训练周期之后的不是真正的 MSE。 在训练中使用这个值是绰绰有余的。

该函数使用的是被 `fann_set_training_algorithm()` 函数选中的训练算法。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$data`** — 神经网络训练数据 `资源`。

## 返回值

成功，则返回 MSE, 错误则返回 `false` .

## 参见

`fann_train_on_data()` `fann_test_data()` `fann_get_MSE()` `fann_set_training_algorithm()`
