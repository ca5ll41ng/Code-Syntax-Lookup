---
id: "zh-php-function-function-mysql-fetch-object"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "mysql_fetch_object"
title: "从结果集中取得一行作为对象返回"
signature: "object mysql_fetch_object(resource $result, [string $class_name = ...], [array $params = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-fetch-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中取得一行作为对象返回

## 说明

```php
object mysql_fetch_object(resource $result, [string $class_name = ...], [array $params = ...])
```

返回一个对象，其属性与获取的行相对应，并将内部数据指针向前移动。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$class_name`** — 要实例化、设置属性并返回的类的名称，如果不指定，默认返回 `stdClass` 对象。
- **`$params`** — 可选 `array` 数组参数，会传递给 `$class_name` 类的构造函数。

## 返回值

返回根据所取得的行生成的对象 `object`，如果没有更多行则返回 `false`。

## 示例

**`mysql_fetch_object()` example**

```php


<?php
mysql_connect("hostname", "user", "password");
mysql_select_db("mydb");
$result = mysql_query("select * from mytable");
while ($row = mysql_fetch_object($result)) {
    echo $row->user_id;
    echo $row->fullname;
}
mysql_free_result($result);
?>

   
```

**`mysql_fetch_object()` example**

```php


<?php
class foo {
    public $name;
}

mysql_connect("hostname", "user", "password");
mysql_select_db("mydb");

$result = mysql_query("select name from mytable limit 1");
$obj = mysql_fetch_object($result, 'foo');
var_dump($obj);
?>

   
```

## 注释

> Performance
>
> 速度上，本函数和 `mysql_fetch_array()` 一样，也几乎和 `mysql_fetch_row()` 一样快（差别很不明显）。

> `mysql_fetch_object()` 和 `mysql_fetch_array()` 类似，只有一点区别 - 返回一个对象而不是数组。间接地也意味着只能通过字段名来访问数组，而不是偏移量（数字是合法的属性名）。

> 此函数返回的字段名*大小写敏感*。

> 此函数将 NULL 字段设置为 PHP `null` 值。

## 参见

 `mysql_fetch_array()` `mysql_fetch_assoc()` `mysql_fetch_row()` `mysql_data_seek()` `mysql_query()`
