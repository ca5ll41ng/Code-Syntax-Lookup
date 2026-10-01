---
id: "zh-php-function-reflectionreference-fromarrayelement"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionReference::fromArrayElement"
title: "从数组元素创建一个 ReflectionReference"
signature: "public static ReflectionReference|null ReflectionReference::fromArrayElement(array $array, int|string $key)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionreference.fromarrayelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从数组元素创建一个 ReflectionReference

## 说明

```php
public static ReflectionReference|null ReflectionReference::fromArrayElement(array $array, int|string $key)
```

从数组元素创建一个 `ReflectionReference`。

## 参数

- **`$array`** — 包含潜在引用的 `array`。
- **`$key`** — 一个 `integer` 或者 `string` 类型的 key。

## 返回值

如果 `$array[$key]` 是引用，返回 `ReflectionReference` 实例，否则返回 `null`。

## 错误／异常

如果 `$array` 不是一个 `array`，或者 `$key` 不是 `integer` 或者 `string` 类型，会抛出 `TypeError`。 如果 `$array[$key]` 不存在， 会抛出 `ReflectionException`。
