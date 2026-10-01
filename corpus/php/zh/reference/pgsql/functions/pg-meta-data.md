---
id: "zh-php-function-function-pg-meta-data"
language: "php"
lang: "zh"
category: "function"
name: "pg_meta_data"
title: "获得表的元数据"
signature: "array|false pg_meta_data(PgSql\\Connection $connection, string $table_name, bool $extended = false)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-meta-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得表的元数据

## 说明

```php
array|false pg_meta_data(PgSql\Connection $connection, string $table_name, bool $extended = false)
```

`pg_metadata()` 以数组形式返回 `table_name` 的表定义。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 表名。
- **`$extended`** — 用于返回扩展元数据的 flag。默认为 `false`。

## 返回值

以 `array` 形式返回表定义， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**取得表的元数据**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  $meta = pg_meta_data($dbconn, 'authors');
  if (is_array($meta)) {
      echo '<pre>';
      var_dump($meta);
      echo '</pre>';
  }
?>

    
```

以上示例会输出：

```text


array(3) {
["author"]=>
array(5) {
  ["num"]=>
  int(1)
  ["type"]=>
  string(7) "varchar"
  ["len"]=>
  int(-1)
  ["not null"]=>
  bool(false)
  ["has default"]=>
  bool(false)
}
["year"]=>
array(5) {
  ["num"]=>
  int(2)
  ["type"]=>
  string(4) "int2"
  ["len"]=>
  int(2)
  ["not null"]=>
  bool(false)
  ["has default"]=>
  bool(false)
}
["title"]=>
array(5) {
  ["num"]=>
  int(3)
  ["type"]=>
  string(7) "varchar"
  ["len"]=>
  int(-1)
  ["not null"]=>
  bool(false)
  ["has default"]=>
  bool(false)
}
}

    
```

## 参见

`pg_convert()`
