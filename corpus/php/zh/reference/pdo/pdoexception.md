---
id: "zh-php-guide-class-pdoexception"
language: "php"
lang: "zh"
category: "guide"
name: "class.pdoexception"
title: "PDOException 异常类"
module: "pdo"
source_url: "https://www.php.net/manual/zh/class.pdoexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PDOException 异常类

PDOException

   简介  代表一个由 PDO 产生的错误。在自己的代码不应抛出一个 `PDOException` 异常。关于 PHP 异常的更多信息请参见 异常 。      类摘要    PDOException   `extends` `RuntimeException`  属性  `protected` `int|string` `code`   `public` `array|null` `errorInfo` null  继承的属性  继承的方法        属性 
- **`errorInfo`** — 相当于 `PDO::errorInfo()` 或 `PDOStatement::errorInfo()`
- **`code`** — `SQLSTATE` 错误码。用 `Exception::getCode()` 来访问。
