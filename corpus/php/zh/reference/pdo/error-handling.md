---
id: "zh-php-guide-pdo-error-handling"
language: "php"
lang: "zh"
category: "guide"
name: "pdo.error-handling"
title: "错误与错误处理"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.error-handling.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 错误与错误处理

PDO 提供了三种不同的错误处理模式，以满足不同风格的应用开发：

- `PDO::ERRMODE_SILENT` 在PHP8.0.0之前，此为默认模式。 PDO 将只简单地设置错误码，可使用 `PDO::errorCode()` 和 `PDO::errorInfo()` 方法来检查语句和数据库对象。如果错误是由于对语句对象的调用而产生的，那么可以调用那个对象的 `PDOStatement::errorCode()` 或 `PDOStatement::errorInfo()` 方法。如果错误是由于调用数据库对象而产生的，那么可以在数据库对象上调用上述两个方法。
- `PDO::ERRMODE_WARNING` 除设置错误码之外，PDO 还将发出一条传统的 E_WARNING 信息。如果只是想看看发生了什么问题且不中断应用程序的流程，那么此设置在调试/测试期间非常有用。
- `PDO::ERRMODE_EXCEPTION` 从PHP 8.0.0开始，这是默认模式。 除设置错误码之外，PDO 还将抛出一个 `PDOException` 异常类并设置它的属性来反射错误码和错误信息。此设置在调试期间也非常有用，因为它会有效地放大脚本中产生错误的点，从而可以非常快速地指出代码中有问题的潜在区域（记住：如果异常导致脚本终止，则事务被自动回滚）。 异常模式另一个非常有用的是，相比传统 PHP 风格的警告，可以更清晰地构建自己的错误处理，而且比起静默模式和显式地检查每种数据库调用的返回值，异常模式需要的代码/嵌套更少。 See Exceptions for more information about Exceptions in PHP.

PDO 使用 SQL-92 SQLSTATE 来规范错误码字符串；不同 PDO 驱动程序负责将它们的本地代码映射为适当的 SQLSTATE 代码。`PDO::errorCode()` 方法返回一个单独的 SQLSTATE 码。如果需要更多此错误的细节信息，PDO 还提供了一个 `PDO::errorInfo()` 方法来返回一个包含 SQLSTATE 码、特定驱动错误码以及此驱动的错误字符串的数组。

**创建 PDO 实例并设置错误模式**

```php


<?php
$dsn = 'mysql:dbname=testdb;host=127.0.0.1';
$user = 'dbuser';
$password = 'dbpass';

$dbh = new PDO($dsn, $user, $password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// This will cause PDO to throw a PDOException (when the table doesn't exist)
$dbh->query("SELECT wrongcolumn FROM wrongtable");

   
```

以上示例会输出：

```text


Fatal error: Uncaught PDOException: SQLSTATE[42S02]: Base table or view not found: 1146 Table 'testdb.wrongtable' doesn't exist in /tmp/pdo_test.php:10
Stack trace:
#0 /tmp/pdo_test.php(10): PDO->query('SELECT wrongcol...')
#1 {main}
  thrown in /tmp/pdo_test.php on line 10

   
```

> 不管当前是否设置了 `PDO::ATTR_ERRMODE` ，如果连接失败，`PDO::__construct()` 将总是抛出一个 `PDOException` 异常。

**创建 PDO 实例并在构造函数中设置错误模式**

```php


<?php
$dsn = 'mysql:dbname=test;host=127.0.0.1';
$user = 'googleguy';
$password = 'googleguy';

$dbh = new PDO($dsn, $user, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));

// 这里将导致 PDO 抛出一个 E_WARNING 级别的错误，而不是 一个异常 （当数据表不存在时）
$dbh->query("SELECT wrongcolumn FROM wrongtable");

   
```

以上示例会输出：

```text


Warning: PDO::query(): SQLSTATE[42S02]: Base table or view not found: 1146 Table 'test.wrongtable' doesn't exist in
/tmp/pdo_test.php on line 9

    
```
