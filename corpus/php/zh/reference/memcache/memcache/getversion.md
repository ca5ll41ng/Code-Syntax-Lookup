---
id: "zh-php-function-memcache-getversion"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::getVersion"
aliases: ["memcache_get_version"]
title: "返回服务器版本信息"
signature: "string|false Memcache::getVersion()"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.getversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回服务器版本信息

## 说明

```php
string|false Memcache::getVersion()
```

```php
string|false memcache_get_version(Memcache $memcache)
```

`Memcache::getVersion()` 返回包含服务器版本号的字符串。

## 参数

此函数没有参数。

## 返回值

返回包含服务端版本号的字符串 或者在失败时返回 `false`。

## 示例

**`Memcache::getVersion()` 示例**

```php


<?php

/* OO API */
$memcache = new Memcache;
$memcache->connect('memcache_host', 11211);
echo $memcache->getVersion();

/* procedural API */
$memcache = memcache_connect('memcache_host', 11211);
echo memcache_get_version($memcache);

?>

   
```

## 参见

 `Memcache::getExtendedStats()` `Memcache::getStats()`
