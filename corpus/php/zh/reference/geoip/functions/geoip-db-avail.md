---
id: "zh-php-function-function-geoip-db-avail"
language: "php"
lang: "zh"
category: "function"
name: "geoip_db_avail"
title: "GeoIP 数据库是否可用"
signature: "bool geoip_db_avail(int $database)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-db-avail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# GeoIP 数据库是否可用

## 说明

```php
bool geoip_db_avail(int $database)
```

`geoip_db_avail()` 函数返回 GeoI P数据库是否可以在磁盘上打开并且可用。

该函数不能用来判断是否是个合适的数据库，除非这个数据库可读。

## 参数

- **`$database`** — 变量类型为整型。你可以使用该扩展的预定义常量(比如: GEOIP_*_EDITION)。

## 返回值

如果存在则返回 `true` , 未找到则返回 `false` , 错误则返回 `null` 。

## 示例

**`geoip_db_avail()` 函数的使用范例：**

以下代码将会输出当前数据库的版本信息。

```php


<?php

if (geoip_db_avail(GEOIP_COUNTRY_EDITION))
    print geoip_database_info(GEOIP_COUNTRY_EDITION);
?>

   
```

以上示例会输出：

```text


GEO-106FREE 20080801 Build 1 Copyright (c) 2006 MaxMind LLC All Rights Reserved

   
```
