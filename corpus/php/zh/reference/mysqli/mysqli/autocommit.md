---
id: "zh-php-function-mysqli-autocommit"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::autocommit"
aliases: ["mysqli_autocommit"]
title: "打开或关闭本次数据库连接的自动命令提交事务模式"
signature: "public bool mysqli::autocommit(bool $enable)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.autocommit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开或关闭本次数据库连接的自动命令提交事务模式

## 说明

面向对象风格

```php
public bool mysqli::autocommit(bool $enable)
```

过程化风格

```php
bool mysqli_autocommit(mysqli $mysql, bool $enable)
```

打开或关闭本次数据库连接的自动命令提交事务模式。

如需要确认当前连接的自动事务提交状态，可执行这个 SQL 请求 `SELECT @@autocommit`。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$enable`** — 是否开启自动提交。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

**`mysqli::autocommit()` 示例**

面向对象风格

```php


<?php

/* Tell mysqli to throw an exception if an error occurs */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* The table engine has to support transactions */
$mysqli->query("CREATE TABLE IF NOT EXISTS language (
    Code text NOT NULL,
    Speakers int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

/* Turn autocommit off */
$mysqli->autocommit(false);

$result = $mysqli->query("SELECT @@autocommit");
$row = $result->fetch_row();
printf("Autocommit is %s\n", $row[0]);

try {
    /* Prepare insert statement */
    $stmt = $mysqli->prepare('INSERT INTO language(Code, Speakers) VALUES (?,?)');
    $stmt->bind_param('ss', $language_code, $native_speakers);

    /* Insert some values */
    $language_code = 'DE';
    $native_speakers = 50_123_456;
    $stmt->execute();
    $language_code = 'FR';
    $native_speakers = 40_546_321;
    $stmt->execute();

    /* Commit the data in the database. This doesn't set autocommit=true */
    $mysqli->commit();
    print "Committed 2 rows in the database\n";

    $result = $mysqli->query("SELECT @@autocommit");
    $row = $result->fetch_row();
    printf("Autocommit is %s\n", $row[0]);

    /* Try to insert more values */
    $language_code = 'PL';
    $native_speakers = 30_555_444;
    $stmt->execute();
    $language_code = 'DK';
    $native_speakers = 5_222_444;
    $stmt->execute();

    /* Setting autocommit=true will trigger a commit */
    $mysqli->autocommit(true);

    print "Committed 2 row in the database\n";
} catch (mysqli_sql_exception $exception) {
    $mysqli->rollback();

    throw $exception;
}

   
```

过程化风格

```php


<?php

/* Tell mysqli to throw an exception if an error occurs */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

/* The table engine has to support transactions */
mysqli_query($mysqli, "CREATE TABLE IF NOT EXISTS language (
    Code text NOT NULL,
    Speakers int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

/* Turn autocommit off */
mysqli_autocommit($mysqli, false);

$result = mysqli_query($mysqli, "SELECT @@autocommit");
$row = mysqli_fetch_row($result);
printf("Autocommit is %s\n", $row[0]);

try {
    /* Prepare insert statement */
    $stmt = mysqli_prepare($mysqli, 'INSERT INTO language(Code, Speakers) VALUES (?,?)');
    mysqli_stmt_bind_param($stmt, 'ss', $language_code, $native_speakers);

    /* Insert some values */
    $language_code = 'DE';
    $native_speakers = 50_123_456;
    mysqli_stmt_execute($stmt);
    $language_code = 'FR';
    $native_speakers = 40_546_321;
    mysqli_stmt_execute($stmt);

    /* Commit the data in the database. This doesn't set autocommit=true */
    mysqli_commit($mysqli);
    print "Committed 2 rows in the database\n";

    $result = mysqli_query($mysqli, "SELECT @@autocommit");
    $row = mysqli_fetch_row($result);
    printf("Autocommit is %s\n", $row[0]);

    /* Try to insert more values */
    $language_code = 'PL';
    $native_speakers = 30_555_444;
    mysqli_stmt_execute($stmt);
    $language_code = 'DK';
    $native_speakers = 5_222_444;
    mysqli_stmt_execute($stmt);

    /* Setting autocommit=true will trigger a commit */
    mysqli_autocommit($mysqli, true);

    print "Committed 2 row in the database\n";
} catch (mysqli_sql_exception $exception) {
    mysqli_rollback($mysqli);

    throw $exception;
}

   
```

以上示例会输出：

```text


Autocommit is 0
Committed 2 rows in the database
Autocommit is 0
Committed 2 row in the database
Autocommit is 0
Committed 2 rows in the database
Autocommit is 0
Committed 2 row in the database

   
```

## 注释

> 此方法在不支持事务的表类型中不生效，如 MyISAM 或 ISAM。

## 参见

`mysqli_begin_transaction()` `mysqli_commit()` `mysqli_rollback()`
