---
id: "zh-php-function-function-oci-parse"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "oci_parse"
title: "预处理用于执行的 Oracle 语句"
signature: "resource|false oci_parse(resource $connection, string $sql)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预处理用于执行的 Oracle 语句

## 说明

```php
resource|false oci_parse(resource $connection, string $sql)
```

使用 `$connection` 预处理 `$sql` 并返回语句标识符，语句标识符可跟 `oci_bind_by_name()`、`oci_execute()` 和其它函数一起使用。

语句标识符可使用 `oci_free_statement()` 或将变量设置为 `null` 来释放。

## 参数

- **`$connection`** — Oracle 连接标识符，由 `oci_connect()`、`oci_pconnect()` 或 `oci_new_connect()` 返回。
- **`$sql`** — SQL 或 PL/SQL 语句。 — SQL 语句*不应*以分号（";"）结尾。PL/SQL 语句*应*以分号（";"）结尾。

## 返回值

成功时返回语句句柄，错误时为 `false`。

## 示例

**`oci_parse()` 的 SQL 语句示例**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

// Parse the statement. Note there is no final semi-colon in the SQL statement
$stid = oci_parse($conn, 'SELECT * FROM employees');
oci_execute($stid);

echo "<table border='1'>\n";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";

?>

    
```

**`oci_parse()` 的 PL/SQL 语句示例**

```php


<?php

/*
  Before running the PHP program, create a stored procedure in
  SQL*Plus or SQL Developer:

  CREATE OR REPLACE PROCEDURE myproc(p1 IN NUMBER, p2 OUT NUMBER) AS
  BEGIN
      p2 := p1 * 2;
  END;

*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$p1 = 8;

// When parsing PL/SQL programs, there should be a final semi-colon in the string
$stid = oci_parse($conn, 'begin myproc(:p1, :p2); end;');
oci_bind_by_name($stid, ':p1', $p1);
oci_bind_by_name($stid, ':p2', $p2, 40);

oci_execute($stid);

print "$p2\n";   // prints 16

oci_free_statement($stid);
oci_close($conn);

?>

    
```

## 注释

> 本函数*并不*验证 `$sql`。要知道 `$sql` 是否是合法的 SQL 或 PL/SQL 语句的唯一方法是执行它。

## 参见

`oci_execute()` `oci_free_statement()`
