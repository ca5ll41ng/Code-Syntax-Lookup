---
id: "zh-php-function-function-fann-get-network-type"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_network_type"
title: "获取所创建的神经网络类型。"
signature: "int fann_get_network_type(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-network-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取所创建的神经网络类型。

## 说明

```php
int fann_get_network_type(resource $ann)
```

获取所创建的神经网络的类型。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回网络类型 常量, 错误则返回 `false` .
