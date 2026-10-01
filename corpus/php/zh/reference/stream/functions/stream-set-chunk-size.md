---
id: "zh-php-function-function-stream-set-chunk-size"
language: "php"
lang: "zh"
category: "function"
name: "stream_set_chunk_size"
title: "设置资源流区块大小"
signature: "int stream_set_chunk_size(resource $stream, int $size)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-set-chunk-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置资源流区块大小

## 说明

```php
int stream_set_chunk_size(resource $stream, int $size)
```

设置资源流区块大小。

## 参数

- **`$stream`** — 目标资源流。
- **`$size`** — 想设置的新的区块大小。

## 返回值

成功的情况下返回资源流之前的区块大小。

## 错误／异常

当 `$size` 比 1 小或者比 `PHP_INT_MAX` 还大的时候将抛出 `ValueError`。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 当 `$size` 比 1 小或者比 `PHP_INT_MAX` 还大的时候现在会抛出 `ValueError`。之前产生 `E_WARNING` 级别的错误并返回 `false`。 |

 }}}
