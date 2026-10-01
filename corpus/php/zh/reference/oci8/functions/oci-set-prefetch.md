---
id: "zh-php-function-function-oci-set-prefetch"
language: "php"
lang: "zh"
category: "function"
name: "oci_set_prefetch"
title: "设置查询预读取的行数"
signature: "bool oci_set_prefetch(resource $statement, int $rows)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-set-prefetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置查询预读取的行数

## 说明

```php
bool oci_set_prefetch(resource $statement, int $rows)
```

在调用 `oci_execute()` 成功查询以及对数据库的每个后续内部读取请求之后，设置 Oracle 客户端库缓冲的行数。对于返回大量行的查询，可以通过在默认 oci8.default_prefetch 值上增加预读取数来显着提高性能。

预读取是 Oracle 在每个网络请求中从数据库返回多个数据行的有效方式。这可以提高网络和 CPU 利用率。行缓冲是 OCI8 的内部操作，无论预取数如何，OCI8 提取函数的行为都不会改变。例如，`oci_fetch_row()` 将始终返回一行。预读取缓冲区是针对单个语句的，不会被重新执行的语句或其他连接使用。

在调用 `oci_execute()` 之前调用 `oci_set_prefetch()`。

调整目标是将预读取值设置为网络和数据库要处理的合理大小。对于返回大量行的查询，如果以多个块的形式从数据库中检索行（即设置预读取值小于行数），则整体系统效率可能会更好。这允许数据库在 PHP 脚本处理行的当前集合的同时处理其他用户的语句。

Oracle 8*i* 中引入了查询预读取。REF CURSOR 预读取是在 Oracle 11*g*R2 中引入的，当 PHP 与 Oracle 11*g*R2（或更高版本）客户端库链接时发生。嵌套游标预读取是在 Oracle 11*g*R2 中引入的，它要求 Oracle Client 库和数据库都是 11*g*R2 或更高版本。

当查询包含 LONG 或 LOB 列时，不支持预读取。预读取值将会忽略，并且在不支持预读取的所有情况下都将使用单行获取。

使用 Oracle Database 12*c* 时，PHP 设置的预读取值可以被 Oracle 的客户端 `oraaccess.xml` 配置文件覆盖。有关详细信息，请参阅 Oracle 文档。

## 参数

- **`$statement`** — 有效的 OCI8 报表标识符 由 `oci_parse()` 创建，被 `oci_execute()` 或 `REF CURSOR` statement 标识执行。
- **`$rows`** — 要预读取的行数，>= 0

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**更改查询的默认预读取值**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'SELECT * FROM myverybigtable');
oci_set_prefetch($stid, 300);  // 调用 oci_execute() 之前设置
oci_execute($stid);

echo "<table border='1'>\n";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "    <td>".($item !== null ? htmlentities($item, ENT_QUOTES) : "")."</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";

oci_free_statement($stid);
oci_close($conn);

?>

    
```

**更改 REF CURSOR 获取的默认预获取值**

```php


<?php
/*
  Create the PL/SQL stored procedure as:

  CREATE OR REPLACE PROCEDURE myproc(p1 OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN p1 FOR SELECT * FROM all_objects WHERE ROWNUM < 5000;
  END;
*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'BEGIN myproc(:rc); END;');
$refcur = oci_new_cursor($conn);
oci_bind_by_name($stid, ':rc', $refcur, -1, OCI_B_CURSOR);
oci_execute($stid);

// Change the prefetch before executing the cursor.
// REF CURSOR prefetching works when PHP is linked with Oracle 11gR2 or later Client libraries
oci_set_prefetch($refcur, 200);
oci_execute($refcur);

echo "<table border='1'>\n";
while ($row = oci_fetch_array($refcur, OCI_ASSOC+OCI_RETURN_NULLS)) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "    <td>".($item !== null ? htmlentities($item, ENT_QUOTES) : "")."</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";

oci_free_statement($refcur);
oci_free_statement($stid);
oci_close($conn);

?> 

    
```

如果 PHP OCI8 从 REF CURSOR 获取数据，然后将 REF CURSOR 传回给第二个 PL/SQL 过程进行进一步处理，则将 REF CURSOR 预读取值设置为 `0`，以避免结果集中的行被“丢失”。预读取值是每个 OCI8 内部请求到数据库中获取的额外行数，因此将其设置为 `0` 意味着每次只获取一行。

**将 REF CURSOR 传回 Oracle 时设置读取值**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/orcl');

// get the REF CURSOR
$stid = oci_parse($conn, 'BEGIN myproc(:rc_out); END;');
$refcur = oci_new_cursor($conn);
oci_bind_by_name($stid, ':rc_out', $refcur, -1, OCI_B_CURSOR);
oci_execute($stid);

// Display two rows, but don't prefetch any extra rows otherwise
// those extra rows would not be passed back to myproc_use_rc().
// A prefetch value of 0 is allowed in PHP 5.3.2 and PECL OCI8 1.4
oci_set_prefetch($refcur, 0);
oci_execute($refcur);
$row = oci_fetch_array($refcur);
var_dump($row);
$row = oci_fetch_array($refcur);
var_dump($row);

// pass the REF CURSOR to myproc_use_rc() to do more data processing
// with the result set
$stid = oci_parse($conn, 'begin myproc_use_rc(:rc_in); end;'); 
oci_bind_by_name($stid, ':rc_in', $refcur, -1, OCI_B_CURSOR);
oci_execute($stid);

?>

    
```

## 参见

oci8.default_prefetch ini 选项
