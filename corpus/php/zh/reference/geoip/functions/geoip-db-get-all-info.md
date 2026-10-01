---
id: "zh-php-function-function-geoip-db-get-all-info"
language: "php"
lang: "zh"
category: "function"
name: "geoip_db_get_all_info"
title: "返回所有 GeoIP 数据库类型的详细信息"
signature: "array geoip_db_get_all_info()"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-db-get-all-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所有 GeoIP 数据库类型的详细信息

## 说明

```php
array geoip_db_get_all_info()
```

`geoip_db_get_all_info()` 函数将会返回包含所有 GeoIP 数据库类型详细信息的多维数组

即使没有安装数据库，这个函数依旧可用。它将会列出数据库是否可用。

返回的关联数组，各键值所代表的含义如下：

- "available" -- 布尔值, 表示数据库是否可用(请参考 `geoip_db_avail()`)
- "description" -- 数据库的描述
- "filename" -- 磁盘上的数据库文件名(请参考 `geoip_db_filename()`)

## 参数

此函数没有参数。

## 返回值

返回一个关联数组。

## 示例

**`geoip_db_get_all_info()` 使用范例：**

以下代码将会打印包含所有信息的数组。

```php


<?php
$infos = geoip_db_get_all_info();
if (is_array($infos)) {
    var_dump($infos);
}
?>

   
```

以上示例会输出：

```text


array(11) {
  [1]=>
  array(3) {
    ["available"]=>
    bool(true)
    ["description"]=>
    string(21) "GeoIP Country Edition"
    ["filename"]=>
    string(32) "/usr/share/GeoIP/GeoIP.dat"
  }

[ ... ]

  [11]=>
  array(3) {
    ["available"]=>
    bool(false)
    ["description"]=>
    string(25) "GeoIP Domain Name Edition"
    ["filename"]=>
    string(38) "/usr/share/GeoIP/GeoIPDomain.dat"
  }
}

   
```

**`geoip_db_get_all_info()` 使用范例：**

你可以使用不同的常量作为键来获取部分信息。

```php


<?php
$infos = geoip_db_get_all_info();
if ($infos[GEOIP_COUNTRY_EDITION]['available']) {
    echo $infos[GEOIP_COUNTRY_EDITION]['description'];
}
?>

   
```

以上示例会输出：

```text


GeoIP Country Edition

   
```
