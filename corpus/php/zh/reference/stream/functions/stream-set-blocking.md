---
id: "zh-php-function-function-stream-set-blocking"
language: "php"
lang: "zh"
category: "function"
name: "stream_set_blocking"
title: "为资源流设置阻塞或者阻塞模式"
signature: "bool stream_set_blocking(resource $stream, bool $enable)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-set-blocking.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为资源流设置阻塞或者阻塞模式

## 说明

```php
bool stream_set_blocking(resource $stream, bool $enable)
```

为 `$stream` 设置阻塞或者非阻塞模式。

此函数适用于支持非阻塞模式的任何资源流（常规文件，套接字资源流等）。

## 参数

- **`$stream`** — 资源流。
- **`$enable`** — 如果 `$enable` 为 `false`，资源流将会被转换为非阻塞模式；如果是 `true`，资源流将会被转换为阻塞模式。 该参数的设置将会影响到像 `fgets()` 和 `fread()` 这样的函数从资源流里读取数据。 在非阻塞模式下，调用 `fgets()` 总是会立即返回；而在阻塞模式下，将会一直等到从资源流里面获取到数据才能返回。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 注释

> 在 Windows 系统上，这对本地文件没有影响。Windows 不支持本地文件的非阻塞 IO。

## 参见

 `stream_select()`
