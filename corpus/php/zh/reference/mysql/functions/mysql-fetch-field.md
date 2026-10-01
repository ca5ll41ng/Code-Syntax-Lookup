---
id: "zh-php-function-function-mysql-fetch-field"
language: "php"
lang: "zh"
category: "function"
name: "mysql_fetch_field"
title: "从结果集中取得列信息并作为对象返回"
signature: "object mysql_fetch_field(resource $result, [int $field_offset = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-fetch-field.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中取得列信息并作为对象返回

## 说明

```php
object mysql_fetch_field(resource $result, [int $field_offset = ...])
```

返回一个包含字段信息的对象。

`mysql_fetch_field()` 可以用来从某个查询结果中取得字段的信息。如果没有指定字段偏移量，则下一个尚未被 `mysql_fetch_field()` 取得的字段被提取。

对象的属性为：

- name - 列名
- table - 该列所在的表名，which is the alias name if one is defined
- max_length - 该列最大长度
- not_null - 1，如果该列不能为 `null`
- primary_key - 1，如果该列是 primary key
- unique_key - 1，如果该列是 unique key
- multiple_key - 1，如果该列是 non-unique key
- numeric - 1，如果该列是 numeric
- blob - 1，如果该列是 BLOB
- type - 该列的类型
- unsigned - 1，如果该列是无符号数
- zerofill - 1，如果该列是 zero-filled

> 此函数返回的字段名*大小写敏感*。

**`mysql_fetch_field()`**

```php


<?php
mysql_connect('localhost:3306', $user, $password)
    or die("Could not connect: " . mysql_error());
mysql_select_db("database");
$result = mysql_query("select * from table")
    or die("Query failed: " . mysql_error());
/* get column metadata */
$i = 0;
while ($i < mysql_num_fields($result)) {
    echo "Information for column $i:<br />\n";
    $meta = mysql_fetch_field($result);
    if (!$meta) {
        echo "No information available<br />\n";
    }
    echo "<pre>
blob:         $meta->blob
max_length:   $meta->max_length
multiple_key: $meta->multiple_key
name:         $meta->name
not_null:     $meta->not_null
numeric:      $meta->numeric
primary_key:  $meta->primary_key
table:        $meta->table
type:         $meta->type
unique_key:   $meta->unique_key
unsigned:     $meta->unsigned
zerofill:     $meta->zerofill
</pre>";
    $i++;
}
mysql_free_result($result);
?>

     
```

参见 `mysql_field_seek()`。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$field_offset`** — The numerical field offset. If the field offset is not specified, the next field that was not yet retrieved by this function is retrieved. The `$field_offset` starts at `0`.

## 返回值

Returns an `object` containing field information. The properties of the object are:

- name - column name
- table - name of the table the column belongs to
- max_length - maximum length of the column
- not_null - 1 if the column cannot be `null`
- primary_key - 1 if the column is a primary key
- unique_key - 1 if the column is a unique key
- multiple_key - 1 if the column is a non-unique key
- numeric - 1 if the column is numeric
- blob - 1 if the column is a BLOB
- type - the type of the column
- unsigned - 1 if the column is unsigned
- zerofill - 1 if the column is zero-filled

## 示例

**`mysql_fetch_field()` example**

```php


<?php
$conn = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}
mysql_select_db('database');
$result = mysql_query('select * from table');
if (!$result) {
    die('Query failed: ' . mysql_error());
}
/* get column metadata */
$i = 0;
while ($i < mysql_num_fields($result)) {
    echo "Information for column $i:<br />\n";
    $meta = mysql_fetch_field($result, $i);
    if (!$meta) {
        echo "No information available<br />\n";
    }
    echo "<pre>
blob:         $meta->blob
max_length:   $meta->max_length
multiple_key: $meta->multiple_key
name:         $meta->name
not_null:     $meta->not_null
numeric:      $meta->numeric
primary_key:  $meta->primary_key
table:        $meta->table
type:         $meta->type
unique_key:   $meta->unique_key
unsigned:     $meta->unsigned
zerofill:     $meta->zerofill
</pre>";
    $i++;
}
mysql_free_result($result);
?>

   
```

## 注释

> 此函数返回的字段名*大小写敏感*。

> If field or tablenames are aliased in the SQL query the aliased name will be returned. The original name can be retrieved for instance by using `mysqli_result::fetch_field()`.

## 参见

 `mysql_field_seek()`
