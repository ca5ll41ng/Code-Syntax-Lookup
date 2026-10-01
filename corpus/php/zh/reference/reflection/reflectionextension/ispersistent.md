---
id: "zh-php-function-reflectionextension-ispersistent"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::isPersistent"
title: "返回扩展是否持久化的"
signature: "public bool ReflectionExtension::isPersistent()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.ispersistent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回扩展是否持久化的

## 说明

```php
public bool ReflectionExtension::isPersistent()
```

检测扩展是否为持久化的。

当使用 php.ini 加载时，则扩展是持久化的。当使用 `dl()` 加载扩展时，扩展是临时的，而不是持久化的。

## 参数

此函数没有参数。

## 返回值

扩展在 `extension` 配置中被载入返回 `true`，否则返回 `false`。

## 参见

`ReflectionExtension::isTemporary()`
