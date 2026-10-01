---
id: "zh-php-function-function-geoip-db-filename"
language: "php"
lang: "zh"
category: "function"
name: "geoip_db_filename"
title: "返回 GeoIP 数据库相对应的文件名"
signature: "string geoip_db_filename(int $database)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-db-filename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 GeoIP 数据库相对应的文件名

## 说明

```php
string geoip_db_filename(int $database)
```

`geoip_db_filename()` 函数将会返回和 GeoIP 数据库相对应的文件名。

这个函数不会判别文件是否存在在磁盘上，只会表明拓展库在哪里查找数据库。

## 参数

- **`$database`** — 该参数为整型。你可以使用该扩展的预定义常量 (比如: GEOIP_*_EDITION)。

## 返回值

成功则返回相对应的数据库文件名，错误则返回`null` 。

## 示例

**`geoip_db_filename()`函数的使用范例：**

如下代码将会打印数据库相对应的文件名。

```php


<?php

print geoip_db_filename(GEOIP_COUNTRY_EDITION);

?>

   
```

以上示例会输出：

```text


/usr/share/GeoIP/GeoIP.dat

   
```
