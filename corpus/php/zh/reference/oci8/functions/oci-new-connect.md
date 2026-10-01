---
id: "zh-php-function-function-oci-new-connect"
language: "php"
lang: "zh"
category: "function"
name: "oci_new_connect"
title: "使用唯一连接，连接到 Oracle 服务器"
signature: "resource|false oci_new_connect(string $username, string $password, string|null $connection_string = null, string $encoding = \"\", int $session_mode = OCI_DEFAULT)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-new-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用唯一连接，连接到 Oracle 服务器

## 说明

```php
resource|false oci_new_connect(string $username, string $password, string|null $connection_string = null, string $encoding = "", int $session_mode = OCI_DEFAULT)
```

建立与 Oracle 服务器的新连接并登录。

与 `oci_connect()` 和 `oci_pconnect()` 不同，`oci_new_connect()` 不缓存连接并且始终返回全新的刚打开的连接句柄。如果应用程序需要在两组查询之间进行事务隔离，这将很有用。

## 参数

- **`$username`** — Oracle 用户名。
- **`$password`** — `$username` 的密码。
- **`$connection_string`** — 包含要连接的 `Oracle 实例`。可以是 [Easy Connect 串]()，或是 `tnsnames.ora` 文件中的连接名，或是本地 Oracle 实例名。 — 如果不指定或者为 `null`，PHP 使用环境变量来确定连接的 `Oracle 实例`，诸如 `TWO_TASK`（Linux 下）或 `LOCAL`（Windows 下）与 `ORACLE_SID` 等。 — 要使用 Easy Connect 命名方法，PHP 必须与 Oracle 10*g* 或更高版本的客户端库进行链接。Oracle 10*g* 的 Easy Connect 串格式：*[//]host_name[:port][/service_name]*。Oracle 11*g* 则为：*[//]host_name[:port][/service_name][:server_type][/instance_name]*。 在 Oracle 19c 加入类更多选项，例如 timeout 和 keep-alive 设置。 请参考 Oracle 文档。 服务名可在数据库服务器机器上运行 Oracle 实用程序 `lsnrctl status` 找到。 — `tnsnames.ora` 文件可在 Oracle Net 查找路径中，此路径包括 `/your/path/to/instantclient/network/admin`、`$ORACLE_HOME/network/admin` 、`/etc`。 另一种方法是设置 `TNS_ADMIN` 以便通过 `$TNS_ADMIN/tnsnames.ora` 来读取。表确认 web 守护进程可读取此文件。
- **`$encoding`** — 使用 Oracle 客户端库来确定字符集。字符集不需要与数据库的字符集相匹配。如果不匹配，Oracle 会尽可能地将数据从数据库字符集进行转换。因为依赖于字符集，可能不能给出可用的结果。转换也增加一些时间开销。 — 如果不指定，Oracle 客户端用 `NLS_LANG` 环境变量来决定字符集。 — 传递此参数可减少连接时间。
- **`$session_mode`** — 此参数在 PHP 5（PECL OCI8 1.1）版本开始可用，并收受下列值：`OCI_DEFAULT`，`OCI_SYSOPER` 和 `OCI_SYSDBA`。如为 `OCI_SYSOPER` 或 `OCI_SYSDBA` 其中之一，此函数将会使用外部的证书建立有特权的连接。有特权的连接默认是禁用的。需要将 oci8.privileged_connect 设为 `On` 来启用。 — PHP 5.3（PECL OCI8 1.3.4）引进了 `OCI_CRED_EXT` 模式值。使用外部或操作系统认证必需在 Oracle 数据库中进行配置。`OCI_CRED_EXT` 标志只可用于用户为 "/"，密码为空的情况。oci8.privileged_connect 可为 `On` 或 `Off`。 — `OCI_CRED_EXT` 可与 `OCI_SYSOPER` 或 `OCI_SYSDBA` 模式组合使用。 — `OCI_CRED_EXT` 由于安全的原因不支持 Windows 系统。

## 返回值

返回连接标识符或错误时为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0、PECL OCI8 3.0.0 | `$connection_string` 现在可为 null。 |

## 示例

下面演示了如何分离连接。

**`oci_new_connect()` 示例**

```php


<?php

// create table mytab (mycol number);

function query($name, $c)
{
    echo "Querying $name\n";
    $s = oci_parse($c, "select * from mytab");
    oci_execute($s, OCI_NO_AUTO_COMMIT);
    $row = oci_fetch_array($s, OCI_ASSOC);
    if (!$row) {
        echo "No rows\n";
    } else {
        do {
            foreach ($row as $item)
                echo $item . " ";
            echo "\n";
        } while (($row = oci_fetch_array($s, OCI_ASSOC)) != false);
    }
}

$c1 = oci_connect("hr", "welcome", "localhost/orcl");
$c2 = oci_new_connect("hr", "welcome", "localhost/orcl");

$s = oci_parse($c1, "insert into mytab values(1234)");
oci_execute($s, OCI_NO_AUTO_COMMIT);

query("basic connection", $c1);
query("new connection", $c2);
oci_commit($c1);
query("new connection after commit", $c2);

// Output is:
//   Querying basic connection
//   1234 
//   Querying new connection
//   No rows
//   Querying new connection after commit
//   1234 

?>

    
```

有关参数使用的更多示例，请参见 `oci_connect()`。

## 参见

`oci_connect()` `oci_pconnect()`
