---
id: "zh-php-function-fiber-getcurrent"
language: "php"
lang: "zh"
category: "function"
name: "Fiber::getCurrent"
title: "获取当前正在执行的 Fiber 实例"
signature: "public static Fiber|null Fiber::getCurrent()"
module: "language"
source_url: "https://www.php.net/manual/zh/fiber.getcurrent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前正在执行的 Fiber 实例

## 说明

```php
public static Fiber|null Fiber::getCurrent()
```

## 参数

此函数没有参数。

## 返回值

返回当前正在执行的 `Fiber` 实例，如果在 Fiber 外部调用此方法，则返回 `null`。
