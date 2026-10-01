---
id: "zh-php-function-function-opcache-reset"
language: "php"
lang: "zh"
category: "function"
name: "opcache_reset"
title: "重置字节码缓存的内容"
signature: "bool opcache_reset()"
module: "opcache"
source_url: "https://www.php.net/manual/zh/function.opcache-reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重置字节码缓存的内容

## 说明

```php
bool opcache_reset()
```

该函数将重置整个字节码缓存。在调用 `opcache_reset()` 之后，所有的脚本将会重新载入并且在下次命中的时候重新解析。此函数仅重置内存中的缓存，不会重置文件缓存。

## 参数

此函数没有参数。

## 返回值

如果重置字节码缓存成功，则返回 `true`；如果字节码缓存被禁用或等待重启或正在重启（参阅 `opcache_get_status()`），则返回 `false`。

## 参见

 `opcache_invalidate()` `opcache_get_status()`
