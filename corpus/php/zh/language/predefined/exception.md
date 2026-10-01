---
id: "zh-php-syntax-class-exception"
language: "php"
lang: "zh"
category: "syntax"
name: "class.exception"
title: "Exception"
module: "language"
source_url: "https://www.php.net/manual/zh/class.exception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exception

Exception

   简介  `Exception`是所有用户级异常的基类。      类摘要    Exception   `implements` Throwable  属性  `protected` `string` `message` ""   `private` `string` `string` ""   `protected` `int` `code`   `protected` `string` `file` ""   `protected` `int` `line`   `private` `array` `trace` []   `private` `Throwable|null` `previous` null  方法        属性 
- **`message`** — 异常消息内容
- **`code`** — 异常代码
- **`file`** — 抛出异常的文件名
- **`line`** — 抛出异常在该文件中的行号
- **`previous`** — 之前抛出的异常
- **`string`** — 字符串形式的堆栈跟踪
- **`trace`** — 数组形式的堆栈跟踪
