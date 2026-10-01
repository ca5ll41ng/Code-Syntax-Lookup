---
id: "zh-php-function-error-construct"
language: "php"
lang: "zh"
category: "function"
name: "Error::__construct"
title: "初始化 error 对象"
signature: "public Error::__construct(string $message = \"\", int $code = 0, Throwable|null $previous = null)"
module: "language"
source_url: "https://www.php.net/manual/zh/error.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 error 对象

## 说明

```php
public Error::__construct(string $message = "", int $code = 0, Throwable|null $previous = null)
```

初始化 Error。

## 参数

- **`$message`** — 错误信息。
- **`$code`** — 错误代码。
- **`$previous`** — 先前的 throwable，用于异常链。

## 注释

> `$message` *不是*二进制安全的。
