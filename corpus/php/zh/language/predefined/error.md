---
id: "zh-php-syntax-class-error"
language: "php"
lang: "zh"
category: "syntax"
name: "class.error"
title: "Error"
module: "language"
source_url: "https://www.php.net/manual/zh/class.error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Error

Error

   简介  `Error` 是所有PHP内部错误类的基类。      类摘要    Error   `implements` Throwable  属性  `protected` `string` `message` ""   `private` `string` `string` ""   `protected` `int` `code`   `protected` `string` `file` ""   `protected` `int` `line`   `private` `array` `trace` []   `private` `Throwable|null` `previous` null  方法        属性 
- **`message`** — 错误消息内容
- **`code`** — 错误代码
- **`file`** — 抛出错误的文件名
- **`line`** — 抛出错误的行数
- **`previous`** — 之前抛出的异常
- **`string`** — 字符串形式的堆栈跟踪
- **`trace`** — 数组形式的堆栈跟踪
