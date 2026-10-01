---
id: "zh-php-function-reflectionextension-export"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::export"
title: "Export"
signature: "public static string ReflectionExtension::export(string $name, string $return = false)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export

## 说明

```php
public static string ReflectionExtension::export(string $name, string $return = false)
```

导出可以被反射的扩展。输出格式同CLI argument `--re [extension]`.

## 参数

- **`$name`** — 导出的反射。
- **`$return`** — 设为 `true` 时返回导出结果，设为 `false`（默认值）则忽略返回。

## 返回值

如果参数 `$return` 设为 `true`，导出结果将作为 `string` 返回，否则返回 `null`。

## 参见

`ReflectionExtension::info()` `ReflectionExtension::__toString()`
