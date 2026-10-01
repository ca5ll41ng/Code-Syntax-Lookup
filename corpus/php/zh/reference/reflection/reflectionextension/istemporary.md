---
id: "zh-php-function-reflectionextension-istemporary"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::isTemporary"
title: "返回扩展是否是临时载入"
signature: "public bool ReflectionExtension::isTemporary()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.istemporary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回扩展是否是临时载入

## 说明

```php
public bool ReflectionExtension::isTemporary()
```

检测扩展是否为临时的。

当使用 `dl()` 加载扩展时，扩展是临时的。

## 参数

此函数没有参数。

## 返回值

如果扩展被`dl()`载入则返回`true` ，否则返回 `false` 。

## 参见

`ReflectionExtension::isPersistent()`
