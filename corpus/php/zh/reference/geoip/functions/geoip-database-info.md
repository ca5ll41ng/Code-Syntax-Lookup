---
id: "zh-php-function-function-geoip-database-info"
language: "php"
lang: "zh"
category: "function"
name: "geoip_database_info"
title: "获取 GeoIP 数据库的信息"
signature: "string geoip_database_info(int $database = GEOIP_COUNTRY_EDITION)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-database-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 GeoIP 数据库的信息

## 说明

```php
string geoip_database_info(int $database = GEOIP_COUNTRY_EDITION)
```

`geoip_database_info()` 函数返回 GeoIP 数据库版本的信息。

如果无参调用该函数，则返回 GeoIP 免费国家版的版本信息。

## 参数

- **`$database`** — 该变量的类型为整型。你可以使用该扩展的预定义常量(类似: GEOIP_*_EDITION)。

## 返回值

如果成功，返回数据库的版本信息，错误则返回`null` 。

## 示例

**`geoip_database_info()` 函数的使用范例：**

以下代码将会输出数据库的相关信息。

```php


<?php
print geoip_database_info(GEOIP_COUNTRY_EDITION);
?>

   
```

以上示例会输出：

```text


GEO-106FREE 20060801 Build 1 Copyright (c) 2006 MaxMind LLC All Rights Reserved

   
```
