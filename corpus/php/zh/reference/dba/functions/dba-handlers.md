---
id: "zh-php-function-function-dba-handlers"
language: "php"
lang: "zh"
category: "function"
name: "dba_handlers"
title: "列出所有可用的处理器"
signature: "array dba_handlers(bool $full_info = false)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-handlers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出所有可用的处理器

## 说明

```php
array dba_handlers(bool $full_info = false)
```

`dba_handlers()` 列出此扩展支持的所有处理器。

## 参数

- **`$full_info`** — 用于开启/关闭结果中的完整信息显示。

## 返回值

返回一个数据库处理器的数组。如果 `$full_info` 设置为 `true`， 数组将是关联数组，处理器名称作为键，版本信息作为值。否则，结果将是处理器名称的索引数组。

> 当使用内部 cdb 库时，你会看到 `cdb` 和 `cdb_make`。

## 示例

**`dba_handlers()` 示例**

```php


<?php

echo "Available DBA handlers:\n";
foreach (dba_handlers(true) as $handler_name => $handler_version) {
  // clean the versions
  $handler_version = str_replace('$', '', $handler_version);
  echo " - $handler_name: $handler_version\n";
}

?>

   
```

以上示例的输出类似于：

```text


Available DBA handlers:
 - cdb: 0.75, Revision: 1.3.2.3
 - cdb_make: 0.75, Revision: 1.2.2.4
 - db2: Sleepycat Software: Berkeley DB 2.7.7: (08/20/99)
 - inifile: 1.0, Revision: 1.6.2.3
 - flatfile: 1.0, Revision: 1.5.2.4

   
```
