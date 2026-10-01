---
id: "zh-php-function-function-opcache-invalidate"
language: "php"
lang: "zh"
category: "function"
name: "opcache_invalidate"
title: "废除脚本缓存"
signature: "bool opcache_invalidate(string $filename, bool $force = false)"
module: "opcache"
source_url: "https://www.php.net/manual/zh/function.opcache-invalidate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 废除脚本缓存

## 说明

```php
bool opcache_invalidate(string $filename, bool $force = false)
```

该函数的作用是使得指定脚本的字节码缓存失效。如果 `$force` 没有设置或者传入的是 `false`，那么只有当脚本的修改时间比对应字节码的时间更新，脚本的缓存才会失效。此函数仅使内存缓存无效，而不是文件缓存。

## 参数

- **`$filename`** — 缓存需要被作废对应的脚本路径
- **`$force`** — 如果该参数设置为`true`，那么不管是否必要，该脚本的缓存都将被废除。

## 返回值

如果 `$filename` 的字节码缓存失效设置成功或者该脚本本来就没有缓存，则返回 `true`；如果字节码缓存被禁用，则返回`false`。

## 参见

 `opcache_compile_file()` `opcache_reset()`
