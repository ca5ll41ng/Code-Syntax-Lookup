---
id: "zh-php-function-function-fann-destroy"
language: "php"
lang: "zh"
category: "function"
name: "fann_destroy"
title: "销毁整个网络并且适当地释放所有的关联内存。"
signature: "bool fann_destroy(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-destroy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 销毁整个网络并且适当地释放所有的关联内存。

## 说明

```php
bool fann_destroy(resource $ann)
```

销毁整个网络并且适当地释放所有的关联内存。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。
