---
id: "zh-php-function-function-geoip-setup-custom-directory"
language: "php"
lang: "zh"
category: "function"
name: "geoip_setup_custom_directory"
title: "自定义 GeoIP 数据库的目录"
signature: "void geoip_setup_custom_directory(string $path)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-setup-custom-directory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 自定义 GeoIP 数据库的目录

## 说明

```php
void geoip_setup_custom_directory(string $path)
```

`geoip_setup_custom_directory()` 函数将会更改 GeoIP 数据库的默认目录。这个设置和直接在 php 配置文件中设置的geoip.custom_directory参数效果是一样的。

## 参数

- **`$path`** — 磁盘上 GeoIP 数据库的绝对路径。

## 返回值

没有返回值。

## 示例

**`geoip_setup_custom_directory()` 例子：**

以下示例将会更改 GeoIP 默认数据库的路径。

```php


<?php

geoip_setup_custom_directory('/some/other/path');

print geoip_db_filename(GEOIP_COUNTRY_EDITION);

?>

   
```

以上示例会输出：

```text


/some/other/path/GeoIP.dat

   
```
