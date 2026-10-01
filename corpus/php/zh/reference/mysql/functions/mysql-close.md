---
id: "zh-php-function-function-mysql-close"
language: "php"
lang: "zh"
category: "function"
name: "mysql_close"
title: "关闭 MySQL 连接"
signature: "bool mysql_close(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 MySQL 连接

## 说明

```php
bool mysql_close(resource $link_identifier = NULL)
```

`mysql_close()` 关闭指定的连接标识所关联的到 MySQL 服务器的非持久连接。如果没有指定 `$link_identifier`，则关闭上一个打开的连接。

建立非持久性的 MySQL 连接，会在 PHP 执行完毕后自动销毁，所以手动关闭连接，并释放资源是可选的。但是还是推荐你在代码中显性的执行该操作，这对提高代码性能有帮助。参考文档 资源释放

## 参数

- **`$link_identifier`** — MySQL 连接. 如果该连接标识符未给出, 将使用最近一次`mysql_connect()`建立的连接. 如果没有找到可使用的连接, 将产生一个 `E_WARNING` 错误.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`mysql_close()` 示例**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);
?>

   
```

以上示例会输出：

```text


Connected successfully

   
```

## 注释

> `mysql_close()` 不会关闭由 `mysql_pconnect()` 建立的持久连接。 有关其他详细信息，请参阅有关持久连接的手册页。

## 参见

 `mysql_connect()` `mysql_free_result()`
