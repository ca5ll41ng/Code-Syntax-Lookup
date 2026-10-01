---
id: "zh-php-function-function-mysql-list-processes"
language: "php"
lang: "zh"
category: "function"
name: "mysql_list_processes"
title: "列出 MySQL 进程"
signature: "resource|false mysql_list_processes(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-list-processes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出 MySQL 进程

## 说明

```php
resource|false mysql_list_processes(resource $link_identifier = NULL)
```

检索当前 MySQL 服务器线程。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

A result pointer `resource` on success 或者在失败时返回 `false`.

## 示例

**`mysql_list_processes()` 示例**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');

$result = mysql_list_processes($link);
while ($row = mysql_fetch_assoc($result)){
    printf("%s %s %s %s %s\n", $row["Id"], $row["Host"], $row["db"],
        $row["Command"], $row["Time"]);
}
mysql_free_result($result);
?>

   
```

以上示例的输出类似于：

```text


1 localhost test Processlist 0
4 localhost mysql sleep 5

   
```

## 参见

 `mysql_thread_id()` `mysql_stat()`
