---
id: "zh-php-function-function-oci-execute"
language: "php"
lang: "zh"
category: "function"
name: "oci_execute"
title: "执行语句"
signature: "bool oci_execute(resource $statement, int $mode = OCI_COMMIT_ON_SUCCESS)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行语句

## 说明

```php
bool oci_execute(resource $statement, int $mode = OCI_COMMIT_ON_SUCCESS)
```

执行先前从 `oci_parse()` 返回的 `$statement`。

执行后，像 `INSERT` 这样的语句默认会将数据提交到数据库中。对于像 `SELECT` 这样的语句，执行查询的逻辑。随后可以使用 `oci_fetch_array()` 等函数在 PHP 中获取查询结果。

每个已解析的语句可能会执行多次，节省了重新解析的成本。当使用 `oci_bind_by_name()` 绑定数据时，这通常用于 `INSERT` 语句。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。
- **`$mode`** — 可选的第二个参数可以是以下常量之一： | 常量 | 说明 | | --- | --- | | `OCI_COMMIT_ON_SUCCESS` | 当语句成功时，自动提交此连接的所有未完成更改。这是默认设置。 | | `OCI_DESCRIBE_ONLY` | 使查询元数据可用于 `oci_field_name()` 等函数，但不创建结果集。任何后续的读取调用（例如 `oci_fetch_array()`）都将失败。 | | `OCI_NO_AUTO_COMMIT` | 不要自动提交更改。 | — 使用 `OCI_NO_AUTO_COMMIT` 模式启动或继续事务。当连接关闭或脚本结束时，事务会自动回滚。显式调用 `oci_commit()` 来提交事务，或调用 `oci_rollback()` 来中止它。 — 插入或更新数据时，出于关系数据一致性和性能原因，建议使用事务。 — If `OCI_NO_AUTO_COMMIT` mode is used for any statement including queries, and `oci_commit()` or `oci_rollback()` is not subsequently called, then OCI8 will perform a rollback at the end of the script even if no data was changed. To avoid an unnecessary rollback, many scripts do not use `OCI_NO_AUTO_COMMIT` mode for queries or PL/SQL. Be careful to ensure the appropriate transactional consistency for the application when using `oci_execute()` with different modes in the same script.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`oci_execute()` 用于查询**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

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

**`oci_execute()` 未指定模式示例**

```php


<?php

// Before running, create the table:
//   CREATE TABLE MYTABLE (col1 NUMBER);

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'INSERT INTO mytab (col1) VALUES (123)');

oci_execute($stid); // The row is committed and immediately visible to other users

?>

    
```

**`oci_execute()` 和 `OCI_NO_AUTO_COMMIT` 示例**

```php


<?php

// Before running, create the table:
//   CREATE TABLE MYTABLE (col1 NUMBER);

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'INSERT INTO mytab (col1) VALUES (:bv)');
oci_bind_by_name($stid, ':bv', $i, 10);
for ($i = 1; $i <= 5; ++$i) {
    oci_execute($stid, OCI_NO_AUTO_COMMIT);
}
oci_commit($conn);  // commits all new values: 1, 2, 3, 4, 5

?>

    
```

**具有不同提交模式的 `oci_execute()` 示例**

```php


<?php

// Before running, create the table:
//   CREATE TABLE MYTABLE (col1 NUMBER);

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'INSERT INTO mytab (col1) VALUES (123)');
oci_execute($stid, OCI_NO_AUTO_COMMIT);  // data not committed

$stid = oci_parse($conn, 'INSERT INTO mytab (col1) VALUES (456)');
oci_execute($stid);  // commits both 123 and 456 values

?>

    
```

**`oci_execute()` 与 `OCI_DESCRIBE_ONLY` 示例**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'SELECT * FROM locations');
oci_execute($s, OCI_DESCRIBE_ONLY);
for ($i = 1; $i <= oci_num_fields($stid); ++$i) {
    echo oci_field_name($stid, $i) . "<br>\n";
}

?>

    
```

## 注释

> Transactions are automatically rolled back when connections are closed, or when the script ends, whichever is soonest. Explicitly call `oci_commit()` to commit a transaction.
>
> Any call to `oci_execute()` that uses `OCI_COMMIT_ON_SUCCESS` mode explicitly or by default will commit any previous uncommitted transaction.
>
> Any Oracle DDL statement such as `CREATE` or `DROP` will automatically commit any uncommitted transaction.

> Because the `oci_execute()` function generally sends the statement to the database, `oci_execute()` can identify some statement syntax errors that the lightweight, local `oci_parse()` function does not.

## 参见

`oci_parse()`
