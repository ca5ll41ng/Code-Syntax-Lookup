---
id: "zh-php-function-mysqli-thread-safe"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::thread_safe"
aliases: ["mysqli_thread_safe"]
title: "返回是否线程安全"
signature: "public bool mysqli::thread_safe()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.thread-safe.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回是否线程安全

## 说明

面向对象风格

```php
public bool mysqli::thread_safe()
```

过程化风格

```php
bool mysqli_thread_safe()
```

告知本数据库客户端库是否编译为线程安全的。

## 参数

此函数没有参数。

## 返回值

如果客户端线程安全为 `true`，否则为 `false`。
