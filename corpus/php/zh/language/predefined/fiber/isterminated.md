---
id: "zh-php-function-fiber-isterminated"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::isTerminated"
title: "确认 fiber 是否终止"
signature: "public bool Fiber::isTerminated()"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.isterminated.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 确认 fiber 是否终止

## 说明

```php
public bool Fiber::isTerminated()
```

## 参数

此函数没有参数。

## 返回值

如果 fiber 因为已返回或抛出了异常，处于终止状态，则返回 `true`，否则返回 `false`。
