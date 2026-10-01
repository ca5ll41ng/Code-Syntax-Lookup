---
id: "zh-php-function-function-mysql-field-name"
language: "php"
lang: "zh"
category: "function"
name: "mysql_field_name"
title: "取得结果中指定字段的字段名"
signature: "string|false mysql_field_name(resource $result, int $field_offset)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-field-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得结果中指定字段的字段名

## 说明

```php
string|false mysql_field_name(resource $result, int $field_offset)
```

`mysql_field_name()` 返回指定字段索引的字段名。`$result` 必须是一个合法的结果标识符，`$field_index` 是该字段的数字偏移量。

> `$field_index` 从 0 开始。
>
> 例如，第三个字段的索引值其实是 2，第四个字段的索引值是 3，以此类推。

> 此函数返回的字段名*大小写敏感*。

**`mysql_field_name()` 例子**

```php


<?php
/* The users table consists of three fields:
 *   user_id
 *   username
 *   password.
 */
$link = mysql_connect('localhost', "mysql_user", "mysql_password");
$dbname = "mydb";
mysql_select_db($dbname, $link)
    or die("Could not set $dbname: " . mysql_error());
$res = mysql_query("select * from users", $link);

echo mysql_field_name($res, 0) . "\n";
echo mysql_field_name($res, 2);
?>

     
```

以上例子将产生如下输出：

```text


user_id
password

     
```

为向下兼容仍然可以使用 `mysql_fieldname()`，但反对这样做。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$field_offset`** — 数值型字段偏移量。 `$field_offset` 从 `0` 开始。如果 `$field_offset` 不存在，则会发出一个 `E_WARNING` 级别的错误

## 返回值

The name of the specified field index on success 或者在失败时返回 `false`.

## 示例

**`mysql_field_name()` example**

```php


<?php
/* The users table consists of three fields:
 *   user_id
 *   username
 *   password.
 */
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect to MySQL server: ' . mysql_error());
}
$dbname = 'mydb';
$db_selected = mysql_select_db($dbname, $link);
if (!$db_selected) {
    die("Could not set $dbname: " . mysql_error());
}
$res = mysql_query('select * from users', $link);

echo mysql_field_name($res, 0) . "\n";
echo mysql_field_name($res, 2);
?>

   
```

以上示例会输出：

```text


user_id
password

   
```

## 注释

> 此函数返回的字段名*大小写敏感*。

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_fieldname()`

## 参见

 `mysql_field_type()` `mysql_field_len()`
