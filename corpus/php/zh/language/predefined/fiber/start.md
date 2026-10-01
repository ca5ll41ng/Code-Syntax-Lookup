---
id: "zh-php-function-fiber-start"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::start"
title: "启动 fiber 的执行"
signature: "public mixed Fiber::start(mixed $args)"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.start.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启动 fiber 的执行

## 说明

```php
public mixed Fiber::start(mixed $args)
```

当构造 fiber 时提供用于 callable 的可变参数列表。

如果调用此方法时 fiber 已经启动，则会抛出 `FiberError`。

## 参数

- **`$args`** — 该参数用于调用 fiber 构造函数内指定的 callable。

## 返回值

首次调用 `Fiber::suspend()` 提供的值；如果 fiber 已返回，则是 `null`。 如果 fiber 在挂起前抛出异常，那么会在调用此方法时的位置抛出异常。
