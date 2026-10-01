---
id: "zh-php-function-fiber-throw"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::throw"
title: "用一个异常来恢复 fiber 的执行"
signature: "public mixed Fiber::throw(Throwable $exception)"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.throw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用一个异常来恢复 fiber 的执行

## 说明

```php
public mixed Fiber::throw(Throwable $exception)
```

在当前调用 `Fiber::suspend()` 的位置抛出指定的异常，恢复 fiber 执行。

如果调用此方法时 fiber 未挂起，将抛出 `FiberError`。

## 参数

- **`$exception`** — 在当前调用 `Fiber::suspend()` 所在的位置，要抛出的异常。

## 返回值

下次调用 `Fiber::suspend()` 所提供的值；如果 fiber 已返回，则是 `null`。 如果 fiber 暂停前抛出一个异常，它将会从调用本方法的位置抛出。
