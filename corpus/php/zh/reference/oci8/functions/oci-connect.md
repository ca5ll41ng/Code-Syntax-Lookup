---
id: "zh-php-function-function-oci-connect"
language: "php"
lang: "zh"
category: "function"
name: "oci_connect"
title: "建立一个到 Oracle 服务器的连接"
signature: "resource|false oci_connect(string $username, string $password, string|null $connection_string = null, string $encoding = \"\", int $session_mode = OCI_DEFAULT)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立一个到 Oracle 服务器的连接

## 说明

```php
resource|false oci_connect(string $username, string $password, string|null $connection_string = null, string $encoding = "", int $session_mode = OCI_DEFAULT)
```

返回大多数其他 OCI8 操作所需的连接标识符。

为了提高性能，大多数应用程序应该使用 `oci_pconnect()` 的持久连接而不是 `oci_connect()`。有关连接管理和连接池的基本信息，请参阅连接处理。

使用相同参数对 `oci_connect()` 的第二次和后续调用将返回从第一次调用返回的连接句柄。这意味着一个句柄中的事务也在其他句柄中，因为它们使用*相同的*底层数据库连接。如果两个句柄需要在事务上相互隔离，请改用 `oci_new_connect()`。

## 参数

- **`$username`** — Oracle 用户名。
- **`$password`** — `$username` 的密码。
- **`$connection_string`** — 包含要连接的 `Oracle 实例`。可以是 [Easy Connect 串]()，或是 `tnsnames.ora` 文件中的连接名，或是本地 Oracle 实例名。 — 如果不指定或者为 `null`，PHP 使用环境变量来确定连接的 `Oracle 实例`，诸如 `TWO_TASK`（Linux 下）或 `LOCAL`（Windows 下）与 `ORACLE_SID` 等。 — 要使用 Easy Connect 命名方法，PHP 必须与 Oracle 10*g* 或更高版本的客户端库进行链接。Oracle 10*g* 的 Easy Connect 串格式：*[//]host_name[:port][/service_name]*。Oracle 11*g* 则为：*[//]host_name[:port][/service_name][:server_type][/instance_name]*。 在 Oracle 19c 加入类更多选项，例如 timeout 和 keep-alive 设置。 请参考 Oracle 文档。 服务名可在数据库服务器机器上运行 Oracle 实用程序 `lsnrctl status` 找到。 — `tnsnames.ora` 文件可在 Oracle Net 查找路径中，此路径包括 `/your/path/to/instantclient/network/admin`、`$ORACLE_HOME/network/admin` 、`/etc`。 另一种方法是设置 `TNS_ADMIN` 以便通过 `$TNS_ADMIN/tnsnames.ora` 来读取。表确认 web 守护进程可读取此文件。
- **`$encoding`** — 使用 Oracle 客户端库来确定字符集。字符集不需要与数据库的字符集相匹配。如果不匹配，Oracle 会尽可能地将数据从数据库字符集进行转换。因为依赖于字符集，可能不能给出可用的结果。转换也增加一些时间开销。 — 如果不指定，Oracle 客户端用 `NLS_LANG` 环境变量来决定字符集。 — 传递此参数可减少连接时间。
- **`$session_mode`** — 此参数在 PHP 5（PECL OCI8 1.1）版本开始可用，并收受下列值：`OCI_DEFAULT`，`OCI_SYSOPER` 和 `OCI_SYSDBA`。如为 `OCI_SYSOPER` 或 `OCI_SYSDBA` 其中之一，此函数将会使用外部的证书建立有特权的连接。有特权的连接默认是禁用的。需要将 oci8.privileged_connect 设为 `On` 来启用。 — PHP 5.3（PECL OCI8 1.3.4）引进了 `OCI_CRED_EXT` 模式值。使用外部或操作系统认证必需在 Oracle 数据库中进行配置。`OCI_CRED_EXT` 标志只可用于用户为 "/"，密码为空的情况。oci8.privileged_connect 可为 `On` 或 `Off`。 — `OCI_CRED_EXT` 可与 `OCI_SYSOPER` 或 `OCI_SYSDBA` 模式组合使用。 — `OCI_CRED_EXT` 由于安全的原因不支持 Windows 系统。

## 返回值

返回连接标识符或出错时为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0、PECL OCI8 3.0.0 | `$connection_string` 现在可为 null。 |

## 示例

**使用 Easy Connect 语法的基础 `oci_connect()`**

```php


<?php

// Connects to the XE service (i.e. database) on the "localhost" machine
$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

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

**使用 Network Connect 名称的基础 `oci_connect()`**

```php


<?php

// Connects to the MYDB database described in tnsnames.ora file,
// One example tnsnames.ora entry for MYDB could be:
//   MYDB =
//     (DESCRIPTION =
//       (ADDRESS = (PROTOCOL = TCP)(HOST = mymachine.oracle.com)(PORT = 1521))
//       (CONNECT_DATA =
//         (SERVER = DEDICATED)
//         (SERVICE_NAME = XE)
//       )
//     )

$conn = oci_connect('hr', 'welcome', 'MYDB');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

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

**带有显式字符集的 `oci_connect()`**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE', 'AL32UTF8');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

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

**多次调用 `oci_connect()`**

```php


<?php

$c1 = oci_connect("hr", "welcome", 'localhost/XE');
$c2 = oci_connect("hr", "welcome", 'localhost/XE');

// Both $c1 and $c2 show the same PHP resource id meaning they use the
// same underlying database connection
echo "c1 is $c1<br>\n";
echo "c2 is $c2<br>\n";

function create_table($conn)
{
    $stmt = oci_parse($conn, "create table hallo (test varchar2(64))");
    oci_execute($stmt);
    echo "Created table<br>\n";
}

function drop_table($conn)
{
    $stmt = oci_parse($conn, "drop table hallo");
    oci_execute($stmt);
    echo "Dropped table<br>\n";
}

function insert_data($connname, $conn)
{
    $stmt = oci_parse($conn, "insert into hallo
              values(to_char(sysdate,'DD-MON-YY HH24:MI:SS'))");
    oci_execute($stmt, OCI_DEFAULT);
    echo "$connname inserted row without committing<br>\n";
}

function rollback($connname, $conn)
{
    oci_rollback($conn);
    echo "$connname rollback<br>\n";
}

function select_data($connname, $conn)
{
    $stmt = oci_parse($conn, "select * from hallo");
    oci_execute($stmt, OCI_DEFAULT);
    echo "$connname ----selecting<br>\n";
    while (oci_fetch($stmt)) {
        echo "    " . oci_result($stmt, "TEST") . "<br>\n";
    }
    echo "$connname ----done<br>\n";
}

create_table($c1);

insert_data('c1', $c1);   // Insert a row using c1
sleep(2);                 // sleep to show a different timestamp for the 2nd row
insert_data('c2', $c2);   // Insert a row using c2

select_data('c1', $c1);   // Results of both inserts are returned
select_data('c2', $c2);   // Results of both inserts are returned

rollback('c1', $c1);      // Rollback using c1

select_data('c1', $c1);   // Both inserts have been rolled back
select_data('c2', $c2);

drop_table($c1);

// Closing one of the connections makes the PHP variable unusable, but
// the other could be used
oci_close($c1);
echo "c1 is $c1<br>\n";
echo "c2 is $c2<br>\n";


// Output is:
//    c1 is Resource id #5
//    c2 is Resource id #5
//    Created table
//    c1 inserted row without committing
//    c2 inserted row without committing
//    c1 ----selecting
//        09-DEC-09 12:14:43
//        09-DEC-09 12:14:45
//    c1 ----done
//    c2 ----selecting
//        09-DEC-09 12:14:43
//        09-DEC-09 12:14:45
//    c2 ----done
//    c1 rollback
//    c1 ----selecting
//    c1 ----done
//    c2 ----selecting
//    c2 ----done
//    Dropped table
//    c1 is
//    c2 is Resource id #5

?>

    
```

## 注释

> 错误安装或配置的 OCI8 扩展通常会表现为连接问题或错误。有关故障排除信息，请参阅安装/配置。

## 参见

`oci_pconnect()` `oci_new_connect()` `oci_close()`
