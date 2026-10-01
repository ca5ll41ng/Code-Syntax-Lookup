---
id: "zh-php-function-fiber-getreturn"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::getReturn"
title: "获取 Fiber 的返回值"
signature: "public mixed Fiber::getReturn()"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.getreturn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 Fiber 的返回值

## 说明

```php
public mixed Fiber::getReturn()
```

## 参数

此函数没有参数。

## 返回值

返回的值是 `Fiber::__construct()` 参数 `callable` 所返回的值。 如果因为 Fiber 没有启动、没有正常终止、抛出异常等等，导致没有返回值，将抛出 `FiberError` 异常。
