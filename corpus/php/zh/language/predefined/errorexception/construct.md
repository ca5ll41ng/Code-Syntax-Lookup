---
id: "zh-php-function-errorexception-construct"
language: "php"
lang: "zh"
category: "function"
name: "ErrorException::__construct"
title: "构造一个异常（Exception）"
signature: "public ErrorException::__construct(string $message = \"\", int $code = 0, int $severity = E_ERROR, string|null $filename = null, int|null $line = null, Throwable|null $previous = null)"
module: "language"
source_url: "https://www.php.net/manual/zh/errorexception.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造一个异常（Exception）

## 说明

```php
public ErrorException::__construct(string $message = "", int $code = 0, int $severity = E_ERROR, string|null $filename = null, int|null $line = null, Throwable|null $previous = null)
```

构造一个异常（Exception）。

## 参数

- **`$message`** — 抛出的异常消息内容。
- **`$code`** — 异常代码。
- **`$severity`** — 异常的严重级别。
  > severity 可以是任意 `int` 值，即错误常量里面的值。


- **`$filename`** — 抛出异常所在的文件名。
- **`$line`** — 抛出异常所在的行号。
- **`$previous`** — 异常链中的前一个异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$filename` 和 `$line` 可以为空。 之前，它们的默认值分别是 `__FILE__` 和 `__LINE__` 。 |
