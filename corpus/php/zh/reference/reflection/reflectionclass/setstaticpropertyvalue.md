---
id: "zh-php-function-reflectionclass-setstaticpropertyvalue"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::setStaticPropertyValue"
title: "设置 public static 属性的值"
signature: "public void ReflectionClass::setStaticPropertyValue(string $name, mixed $value)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.setstaticpropertyvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 public static 属性的值

## 说明

```php
public void ReflectionClass::setStaticPropertyValue(string $name, mixed $value)
```

设置 public 静态属性的值。如果属性是 private 或 protected，则方法会失败。

`ReflectionProperty::setValue()` 允许设置 public、private 和 protected 属性的值。

## 参数

- **`$name`** — 属性的名称。
- **`$value`** — 属性的值。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 使用 `ReflectionClass::setStaticPropertyValue()` 设置 private 或 protected 静态属性现在会导致致命错误。之前会抛出 `ReflectionException`。 |

## 参见

`ReflectionClass::getStaticPropertyValue()` `ReflectionProperty::setValue()`
