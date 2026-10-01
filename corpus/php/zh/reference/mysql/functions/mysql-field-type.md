---
id: "zh-php-function-function-mysql-field-type"
language: "php"
lang: "zh"
category: "function"
name: "mysql_field_type"
title: "取得结果集中指定字段的类型"
signature: "string mysql_field_type(resource $result, int $field_offset)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-field-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得结果集中指定字段的类型

## 说明

```php
string mysql_field_type(resource $result, int $field_offset)
```

`mysql_field_type()` 和 `mysql_field_name()` 函数相似。参数完全相同，但返回的是字段类型而不是字段名。字段类型有“int”，“real”，“string”，“blob”以及其它，详见 [MySQL 手册]()。

**`mysql_field_type()` 例子**

```php


<?php
    mysql_connect("localhost", "mysql_username", "mysql_password");
    mysql_select_db("mysql");
    $result = mysql_query("SELECT * FROM func");
    $fields = mysql_num_fields($result);
    $rows   = mysql_num_rows($result);
    $table = mysql_field_table($result, 0);
    echo "Your '".$table."' table has ".$fields." fields and ".$rows." record(s)\n";
    echo "The table has the following fields:\n";
    for ($i=0; $i < $fields; $i++) {
        $type  = mysql_field_type($result, $i);
        $name  = mysql_field_name($result, $i);
        $len   = mysql_field_len($result, $i);
        $flags = mysql_field_flags($result, $i);
        echo $type." ".$name." ".$len." ".$flags."\n";
    }
    mysql_free_result($result);
    mysql_close();
?>

      
```

以上例子将产生如下输出：

```text


Your 'func' table has 4 fields and 1 record(s)
The table has the following fields:
string name 64 not_null primary_key binary
int ret 1 not_null
string dl 128 not_null
string type 9 not_null enum

      
```

为向下兼容仍然可以使用 `mysql_fieldtype()`，但反对这样做。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$field_offset`** — 数值型字段偏移量。 `$field_offset` 从 `0` 开始。如果 `$field_offset` 不存在，则会发出一个 `E_WARNING` 级别的错误

## 返回值

The returned field type will be one of `"int"`, `"real"`, `"string"`, `"blob"`, and others as detailed in the [MySQL documentation]().

## 示例

**`mysql_field_type()` example**

```php


<?php
mysql_connect("localhost", "mysql_username", "mysql_password");
mysql_select_db("mysql");
$result = mysql_query("SELECT * FROM func");
$fields = mysql_num_fields($result);
$rows   = mysql_num_rows($result);
$table  = mysql_field_table($result, 0);
echo "Your '" . $table . "' table has " . $fields . " fields and " . $rows . " record(s)\n";
echo "The table has the following fields:\n";
for ($i=0; $i < $fields; $i++) {
    $type  = mysql_field_type($result, $i);
    $name  = mysql_field_name($result, $i);
    $len   = mysql_field_len($result, $i);
    $flags = mysql_field_flags($result, $i);
    echo $type . " " . $name . " " . $len . " " . $flags . "\n";
}
mysql_free_result($result);
mysql_close();
?>

   
```

以上示例的输出类似于：

```text


Your 'func' table has 4 fields and 1 record(s)
The table has the following fields:
string name 64 not_null primary_key binary
int ret 1 not_null
string dl 128 not_null
string type 9 not_null enum

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_fieldtype()`

## 参见

 `mysql_field_name()` `mysql_field_len()`
