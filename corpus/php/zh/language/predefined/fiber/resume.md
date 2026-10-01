---
id: "zh-php-function-fiber-resume"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::resume"
title: "使用值恢复 fiber 的执行"
signature: "public mixed Fiber::resume(mixed $value = null)"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.resume.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用值恢复 fiber 的执行

## 说明

```php
public mixed Fiber::resume(mixed $value = null)
```

使用给定值作为当前 `Fiber::suspend()` 调用的结果来恢复 fiber。

如果调用此方法时 fiber 还没挂起，将会抛出 `FiberError`。

## 参数

- **`$value`** — 恢复 fiber 的值。这个值将会从当前调用 `Fiber::suspend()` 中返回。

## 返回值

如果 fiber 已返回，将是 `null`；否则就是下次调用 `Fiber::suspend()` 时提供的值。 如果 fiber 暂停前抛出一个异常，它将会从调用本方法时的位置抛出异常。
