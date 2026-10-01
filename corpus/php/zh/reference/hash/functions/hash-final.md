---
id: "zh-php-function-function-hash-final"
language: "php"
lang: "zh"
category: "function"
name: "hash_final"
title: "结束增量散列且返回摘要结果"
signature: "string hash_final(HashContext $context, bool $binary = false)"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-final.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 结束增量散列且返回摘要结果

## 说明

```php
string hash_final(HashContext $context, bool $binary = false)
```

## 参数

- **`$context`** — `hash_init()` 返回的散列上下文资源。
- **`$binary`** — 设置为 `true`，输出格式为原始的二进制数据。 设置为 `false`，输出小写的 16 进制字符串。

## 返回值

如果 `$binary` 设置为 `true`， 则返回原始二进制数据表示的信息摘要， 否则返回 16 进制小写字符串格式表示的信息摘要。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 接收参数从资源类型修改为 `HashContext` 对象类型。 |

## 参见

`hash_init()` `hash_update()` `hash_update_stream()` `hash_update_file()`
