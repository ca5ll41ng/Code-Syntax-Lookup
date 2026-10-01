---
id: "zh-php-function-reflectionmethod-export"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::export"
title: "导出 reflection 方法"
signature: "public static string ReflectionMethod::export(string $class, string $name, bool $return = false)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出 reflection 方法

## 说明

```php
public static string ReflectionMethod::export(string $class, string $name, bool $return = false)
```

导出 ReflectionMethod。

## 参数

- **`$class`** — 类名称。
- **`$name`** — 方法名称。
- **`$return`** — 设为 `true` 时返回导出结果，设为 `false`（默认值）则忽略返回。

## 返回值

如果参数 `$return` 设为 `true`，导出结果将作为 `string` 返回，否则返回 `null`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数已移除。 |
| 7.4.0 | 此函数已废弃。 |

## 参见

`ReflectionMethod::__construct()` `ReflectionMethod::__toString()`
