---
id: "zh-php-function-fiber-construct"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::__construct"
title: "创建新的 Fiber 实例"
signature: "public Fiber::__construct(callable $callback)"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新的 Fiber 实例

## 说明

```php
public Fiber::__construct(callable $callback)
```

## 参数

- **`$callback`** — 启动 fiber 时调用 `callable`。提供给 `Fiber::start()` 的参数，也将是调用 callable 时的参数。
