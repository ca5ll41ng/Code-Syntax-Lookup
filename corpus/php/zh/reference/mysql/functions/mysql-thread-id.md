---
id: "zh-php-function-function-mysql-thread-id"
language: "php"
lang: "zh"
category: "function"
name: "mysql_thread_id"
title: "返回当前线程的 ID"
signature: "int|false mysql_thread_id(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-thread-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前线程的 ID

## 说明

```php
int|false mysql_thread_id(resource $link_identifier = NULL)
```

检索当前线程 ID。如果连接丢失并执行 `mysql_ping()` 重新连接，会改变线程 ID。这意味着仅能在需要的时候再去获取。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

The thread ID on success 或者在失败时返回 `false`.

## 示例

**`mysql_thread_id()` 示例**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
$thread_id = mysql_thread_id($link);
if ($thread_id){
    printf("current thread id is %d\n", $thread_id);
}
?>

   
```

以上示例的输出类似于：

```text


current thread id is 73

   
```

## 参见

 `mysql_ping()` `mysql_list_processes()`
