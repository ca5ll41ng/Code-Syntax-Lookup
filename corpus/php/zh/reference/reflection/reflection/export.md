---
id: "zh-php-function-reflection-export"
language: "php"
lang: "zh"
category: "function"
name: "Reflection::export"
title: "导出"
signature: "public static string Reflection::export(Reflector $reflector, bool $return = false)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflection.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出

## 说明

```php
public static string Reflection::export(Reflector $reflector, bool $return = false)
```

导出反射（reflection）。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$reflector`** — 导出的反射。
- **`$return`** — 设为 `true` 时返回导出结果，设为 `false`（默认值）则忽略返回。

## 返回值

如果参数 `$return` 设为 `true`，导出结果将作为 `string` 返回，否则返回 `null`。

## 参见

`Reflection::getModifierNames()`
