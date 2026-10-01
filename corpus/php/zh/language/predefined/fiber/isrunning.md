---
id: "zh-php-function-fiber-isrunning"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::isRunning"
title: "确认 fiber 是否正在运行"
signature: "public bool Fiber::isRunning()"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.isrunning.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 确认 fiber 是否正在运行

## 说明

```php
public bool Fiber::isRunning()
```

## 参数

此函数没有参数。

## 返回值

仅在 fiber 运行时返回 `true`。在调用 `Fiber::start()`、`Fiber::resume()`、 `Fiber::throw()` 还没有返回之后，将认为 fiber 正在运行。如果 fiber 没有运行则返回 `false`。
