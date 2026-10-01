---
id: "zh-php-function-function-mysql-stat"
language: "php"
lang: "zh"
category: "function"
name: "mysql_stat"
title: "获取当前系统状态"
signature: "string mysql_stat(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前系统状态

## 说明

```php
string mysql_stat(resource $link_identifier = NULL)
```

`mysql_stat()` 返回当前服务器状态。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

返回字符串，其中包含正常运行时间、线程、查询、打开表、冲刷表和每秒查询的状态。要获得其他状态变量的完整列表，必须使用 `SHOW STATUS` SQL 命令。 如果 `$link_identifier` 无效，则返回 `null`。

## 示例

**`mysql_stat()` 示例**

```php


<?php
$link   = mysql_connect('localhost', 'mysql_user', 'mysql_password');
$status = explode('  ', mysql_stat($link));
print_r($status);
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => Uptime: 5380
    [1] => Threads: 2
    [2] => Questions: 1321299
    [3] => Slow queries: 0
    [4] => Opens: 26
    [5] => Flush tables: 1
    [6] => Open tables: 17
    [7] => Queries per second avg: 245.595
)

   
```

**替代 `mysql_stat()` 示例**

```php


<?php
$link   = mysql_connect('localhost', 'mysql_user', 'mysql_password');
$result = mysql_query('SHOW STATUS', $link);
while ($row = mysql_fetch_assoc($result)) {
    echo $row['Variable_name'] . ' = ' . $row['Value'] . "\n";
}
?>

   
```

以上示例的输出类似于：

```text


back_log = 50
basedir = /usr/local/
bdb_cache_size = 8388600
bdb_log_buffer_size = 32768
bdb_home = /var/db/mysql/
bdb_max_lock = 10000
bdb_logdir =
bdb_shared_data = OFF
bdb_tmpdir = /var/tmp/
...

   
```

## 参见

 `mysql_get_server_info()` `mysql_list_processes()`
