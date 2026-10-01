---
id: "zh-php-function-function-fann-get-connection-rate"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_connection_rate"
title: "获取当网络创建时连接的使用率。"
signature: "float fann_get_connection_rate(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-connection-rate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当网络创建时连接的使用率。

## 说明

```php
float fann_get_connection_rate(resource $ann)
```

获取当网络创建时连接的使用率。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回当网络创建时连接的使用率, 错误则返回 `false` .
