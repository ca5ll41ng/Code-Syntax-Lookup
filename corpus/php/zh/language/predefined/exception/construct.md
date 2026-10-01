---
id: "zh-php-function-exception-construct"
language: "php"
lang: "zh"
category: "function"
name: "Exception::__construct"
title: "异常构造函数"
signature: "public Exception::__construct(string $message = \"\", int $code = 0, Throwable|null $previous = null)"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 异常构造函数

## 说明

```php
public Exception::__construct(string $message = "", int $code = 0, Throwable|null $previous = null)
```

异常构造函数。

## 参数

- **`$message`** — 抛出的异常消息内容。
- **`$code`** — 异常代码。
- **`$previous`** — 异常链中的前一个异常。

> 如果子类的 $code 和 $message 属性已设置，在调用 Exception 父类的构造器时可以省略默认参数。

## 注释

> `$message` *不*是二进制安全的。
