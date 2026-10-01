---
id: "zh-php-function-pdo-prepare"
language: "php"
lang: "zh"
category: "function"
name: "PDO::prepare"
title: "预处理要执行的语句，并返回语句对象"
signature: "public PDOStatement|false PDO::prepare(string $query, array $options = [])"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预处理要执行的语句，并返回语句对象

## 说明

```php
public PDOStatement|false PDO::prepare(string $query, array $options = [])
```

为 `PDOStatement::execute()` 方法预处理待执行的 SQL 语句。 语句模板可以包含零个或多个参数占位标记，格式是命名（:name）或问号（?）的形式，当它执行时将用真实数据取代。 在同一个语句模板里，命名形式和问号形式不能同时使用；只能选择其中一种参数形式。 请用参数形式绑定用户输入的数据，不要直接字符串拼接到查询里。

调用 `PDOStatement::execute()` 时，每一个值的参数占位标记，名称必须唯一。 除非启用模拟（emulation）模式，同一个语句里无法使用重名的参数。

> 参数占位符仅能字面上展示完整的数据。不能是字面的一部分，不能是关键词，不能是标识符，不能是其他任意的范围。 举例说明：不能把多个值绑到单个参数里，然后在 SQL 语句里用 IN() 查询。

如果用不同参数，通过 `PDO::prepare()` 和 `PDOStatement::execute()` 多次调用同一个 SQL 语句，将提升应用的性能 —— 驱动可以让客户端/服务器缓存查询和元信息。 同时，调用 `PDO::prepare()` 和 `PDOStatement::execute()` 还能阻止 SQL 注入攻击，不需要给参数手动加引号与转义。

如果内置驱动不支持参数，PDO 将模拟出参数的功能；如果驱动仅仅支持其中一种风格（命名参数和问号参数两种），也会自动重写到另外一种风格。

> The parser used for emulated prepared statements and for rewriting named or question mark style parameters supports the non standard backslash escapes for single- and double quotes. That means that terminating quotes immediately preceeded by a backslash are not recognized as such, which may result in wrong detection of parameters causing the prepared statement to fail when it is executed. A work-around is to not use emulated prepares for such SQL queries, and to avoid rewriting of parameters by using a parameter style which is natively supported by the driver.

自 PHP 7.4.0 起，可以通过两个问号来转义问号。这意味着 `??` 在发送查询到数据库时会转换成 `?`。

## 参数

- **`$query`** — 必须是对目标数据库服务器有效的 SQL 语句模板。
- **`$options`** — 数组包含一个或多个 key=>value 键值对，为返回的 PDOStatement 对象设置属性。 常见用法是：设置 `PDO::ATTR_CURSOR` 为 `PDO::CURSOR_SCROLL`，将得到可滚动的光标。 某些驱动有驱动级的选项，在 prepare 时就设置。

## 返回值

如果数据库服务器已经成功预处理语句，`PDO::prepare()` 返回 `PDOStatement` 对象。 如果数据库服务器无法预处理语句，`PDO::prepare()` 返回 `false` 或抛出 `PDOException` (取决于 错误处理)。

> 模拟模式下的预处理语句不会和数据库服务器交互，所以 `PDO::prepare()` 不会检查语句。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**命名参数形式的 SQL 语句模板**

```php


<?php
/* 传入数组的值，并执行已预处理的语句 */
$sql = 'SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour';
$sth = $dbh->prepare($sql, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
$sth->execute(['calories' => 150, 'colour' => 'red']);
$red = $sth->fetchAll();
/* Array keys can be prefixed with colons ":" too (optional) */
$sth->execute([':calories' => 175, ':colour' => 'yellow']);
$yellow = $sth->fetchAll();
?>

    
```

**问号形式的 SQL 语句模板**

```php


<?php
/* 传入数组的值，并执行已预处理的语句 */
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->execute([150, 'red']);
$red = $sth->fetchAll();
$sth->execute([175, 'yellow']);
$yellow = $sth->fetchAll();
?>

    
```

**问号转义的 SQL 语句模板**

```php


<?php
/* note: this is only valid on PostgreSQL databases */
$sth = $dbh->prepare('SELECT * FROM issues WHERE tag::jsonb ?? ?');
$sth->execute(['feature']);
$featureIssues = $sth->fetchAll();
$sth->execute(['performance']);
$performanceIssues = $sth->fetchAll();
?>

    
```

## 参见

`PDO::exec()` `PDO::query()` `PDOStatement::execute()`
