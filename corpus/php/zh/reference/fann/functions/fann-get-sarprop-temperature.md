---
id: "zh-php-function-function-fann-get-sarprop-temperature"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_sarprop_temperature"
title: "返回 sarprop 算法温度"
signature: "float fann_get_sarprop_temperature(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-sarprop-temperature.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 sarprop 算法温度

## 说明

```php
float fann_get_sarprop_temperature(resource $ann)
```

返回 sarprop 算法温度。

默认温度是 0.015.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回 sarprop 温度，错误则返回 `false` .

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_set_sarprop_temperature()`
