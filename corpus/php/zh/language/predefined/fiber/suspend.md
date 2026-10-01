---
id: "zh-php-function-fiber-suspend"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::suspend"
title: "暂停当前 fiber 的执行"
signature: "public static mixed Fiber::suspend(mixed $value = null)"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.suspend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 暂停当前 fiber 的执行

## 说明

```php
public static mixed Fiber::suspend(mixed $value = null)
```

暂停当前 fiber 的执行。调用 `Fiber::start()`、 `Fiber::resume()`、 `Fiber::throw()` 将执行切换到当前 fiber 时，提供给本方法的值，也将是这几个方法所返回的值，

当 fiber 恢复后，此方法的返回值是 `Fiber::resume()` 所提供的值。 如果 fiber 使用 `Fiber::throw()` 恢复，则把传入的异常在调用本方法的位置抛出。

如果此方法是用 fiber 外部调用，将会抛出 `FiberError`。

## 参数

- **`$value`** — 该值会在调用 `Fiber::start()`、 `Fiber::resume()`、 `Fiber::throw()` 时作为返回值，并将执行切换到当前 fiber。

## 返回值

提供给 `Fiber::resume()` 的值。
