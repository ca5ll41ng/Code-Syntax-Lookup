---
id: "zh-php-function-function-opcache-is-script-cached-in-file-cache"
language: "php"
lang: "zh"
category: "function"
name: "opcache_is_script_cached_in_file_cache"
title: "用于判断脚本是否已缓存在 OPCache 文件缓存中"
signature: "bool opcache_is_script_cached_in_file_cache(string $filename)"
module: "opcache"
source_url: "https://www.php.net/manual/zh/function.opcache-is-script-cached-in-file-cache.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用于判断脚本是否已缓存在 OPCache 文件缓存中

## 说明

```php
bool opcache_is_script_cached_in_file_cache(string $filename)
```

此函数用于检查 PHP 脚本是否已缓存在 OPCache 中，可更方便地判断特定脚本的缓存“预热”状态。该函数仅检查文件缓存，不检查内存缓存；若需检查内存缓存，请使用 `opcache_is_script_cached()`。

## 参数

- **`$filename`** — 待检查的 PHP 脚本路径。

## 返回值

如果 `$filename` 已缓存在 OPCache 中，则返回 `true`，否则返回 `false`。

## 参见

 `opcache_compile_file()` `opcache_is_script_cached()`
