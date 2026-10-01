---
id: "zh-php-function-function-hash-update"
language: "php"
lang: "zh"
category: "function"
name: "hash_update"
title: "向活跃的哈希运算上下文中填充数据"
signature: "true hash_update(HashContext $context, string $data)"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向活跃的哈希运算上下文中填充数据

## 说明

```php
true hash_update(HashContext $context, string $data)
```

## 参数

- **`$context`** — 由 `hash_init()` 函数返回的哈希运算上下文。
- **`$data`** — 要向哈希摘要中追加的数据。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在返回类型为 `true`，而不是 `bool`。 |
| 7.2.0 | 接收参数从资源类型修改为 `HashContext` 对象类型。 |

## 参见

`hash_init()` `hash_update_file()` `hash_update_stream()` `hash_final()`
