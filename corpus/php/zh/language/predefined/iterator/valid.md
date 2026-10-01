---
id: "zh-php-function-iterator-valid"
language: "php"
lang: "zh"
category: "function"
name: "Iterator::valid"
title: "检查当前位置是否有效"
signature: "public bool Iterator::valid()"
module: "language"
source_url: "https://www.php.net/manual/zh/iterator.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查当前位置是否有效

## 说明

```php
public bool Iterator::valid()
```

此方法在 `Iterator::rewind()` 和 `Iterator::next()` 方法之后被调用以此用来检查当前位置是否有效。

## 参数

此函数没有参数。

## 返回值

返回将被转换为`bool` 。成功时返回 `true`， 或者在失败时返回 `false`。
