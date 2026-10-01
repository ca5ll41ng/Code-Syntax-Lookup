---
id: "zh-php-function-function-hash-update-file"
language: "php"
lang: "zh"
category: "function"
name: "hash_update_file"
title: "从文件向活跃的散列运算上下文中填充数据"
signature: "bool hash_update_file(HashContext $context, string $filename, resource|null $stream_context = null)"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-update-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从文件向活跃的散列运算上下文中填充数据

## 说明

```php
bool hash_update_file(HashContext $context, string $filename, resource|null $stream_context = null)
```

## 参数

- **`$context`** — 由 `hash_init()` 函数返回的散列运算上下文。
- **`$filename`** — 要进行散列运算的文件位置的 URL；支持 `fopen()` 封装器。
- **`$stream_context`** — 由 `stream_context_create()` 函数返回的流上下文。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$stream_context` 现在可以为 null。 |
| 7.2.0 | 接收参数从资源类型修改为 `HashContext` 对象类型。 |

## 参见

`hash_init()` `hash_update()` `hash_update_stream()` `hash_final()` `hash_file()`
