---
id: "zh-php-function-function-fann-set-sarprop-temperature"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_sarprop_temperature"
title: "设置 sarprop 算法的温度"
signature: "bool fann_set_sarprop_temperature(resource $ann, float $sarprop_temperature)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-sarprop-temperature.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 sarprop 算法的温度

## 说明

```php
bool fann_set_sarprop_temperature(resource $ann, float $sarprop_temperature)
```

设置 sarprop 算法的温度。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$sarprop_temperature`** — sarprop 算法的温度。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_get_sarprop_temperature()`
