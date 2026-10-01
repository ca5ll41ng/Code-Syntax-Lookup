---
id: "zh-php-function-mysqli-close"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::close"
aliases: ["mysqli_close"]
title: "关闭先前打开的数据库连接"
signature: "public true mysqli::close()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭先前打开的数据库连接

## 说明

面向对象风格

```php
public true mysqli::close()
```

过程化风格

```php
true mysqli_close(mysqli $mysql)
```

关闭先前打开的数据库连接。

当打开的非持久 MySQL 连接和结果集的对象销毁时会自动关闭。显式关闭打开的连接和释放结果集不是必需的。但是，如果脚本在获得结果后仍有大量工作要做，那么最好在脚本执行完所有数据库操作后立即关闭连接。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数始终返回 `true`。之前失败时返回 `false`。 |

## 示例

**`mysqli::close()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

/* Close the connection as soon as it's no longer needed */
$mysqli->close();

foreach ($result as $row) {
    /* Processing of the data retrieved from the database */
}

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($mysqli, "SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

/* Close the connection as soon as it's no longer needed */
mysqli_close($mysqli);

foreach ($result as $row) {
    /* Processing of the data retrieved from the database */
}

   
```

## 注释

> `mysqli_close()` 不会关闭持久连接。更多详情，查看持久连接的相关手册页。

## 参见

`mysqli::__construct()` `mysqli_init()` `mysqli_real_connect()` `mysqli_free_result()`
