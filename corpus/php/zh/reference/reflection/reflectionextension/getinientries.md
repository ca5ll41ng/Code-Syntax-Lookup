---
id: "zh-php-function-reflectionextension-getinientries"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::getINIEntries"
title: "获取 ini 配置"
signature: "public array ReflectionExtension::getINIEntries()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.getinientries.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 ini 配置

## 说明

```php
public array ReflectionExtension::getINIEntries()
```

获取扩展在 ini 配置文件中的配置。

## 参数

此函数没有参数。

## 返回值

返回数组，数组索引是配置名称，值是配置值。

## 示例

**`ReflectionExtension::getINIEntries()` 示例**

```php


<?php
$ext = new ReflectionExtension('mysql');

print_r($ext->getINIEntries());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [mysql.allow_persistent] => 1
    [mysql.max_persistent] => -1
    [mysql.max_links] => -1
    [mysql.default_host] => 
    [mysql.default_user] => 
    [mysql.default_password] => 
    [mysql.default_port] => 
    [mysql.default_socket] => 
    [mysql.connect_timeout] => 60
    [mysql.trace_mode] => 
    [mysql.allow_local_infile] => 1
    [mysql.cache_size] => 2000
)

    
```

## 参见

`ini_get_all()` `ReflectionExtension::getConstants()`
