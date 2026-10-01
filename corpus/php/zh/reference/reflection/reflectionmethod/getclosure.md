---
id: "zh-php-function-reflectionmethod-getclosure"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::getClosure"
title: "返回动态建立的方法调用接口（译者注：可以使用这个返回值直接调用非公开方法）"
signature: "public Closure ReflectionMethod::getClosure(object|null $object = null)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.getclosure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回动态建立的方法调用接口（译者注：可以使用这个返回值直接调用非公开方法）

## 说明

```php
public Closure ReflectionMethod::getClosure(object|null $object = null)
```

调用方法创建闭包。

## 参数

- **`$object`** — 不可以用于静态方法，可以用于其他类型的方法。

## 返回值

返回新创建的 `Closure`。

## 错误／异常

如果 `$object` 为 `null`，但该方法是非静态方法，则抛出 `ValueError`。

如果 `$object` 不是该方法声明的类实例，则抛出 `ReflectionException`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$object` 现在可以为 null。 |

## 参见

 头等可调用语法
