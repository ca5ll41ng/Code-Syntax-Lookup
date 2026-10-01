---
id: "zh-php-function-reflectionextension-info"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::info"
title: "输出扩展信息"
signature: "public void ReflectionExtension::info()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出扩展信息

## 说明

```php
public void ReflectionExtension::info()
```

输出“`phpinfo()`”信息中的扩展信息。

## 参数

此函数没有参数。

## 返回值

扩展信息。

## 示例

**`ReflectionExtension::info()` 示例**

```php


<?php
$ext = new ReflectionExtension('mysqli');
$ext->info();
?>

    
```

以上示例的输出类似于：

```text


mysqli

MysqlI Support => enabled
Client API library version => mysqlnd 8.3.17
Active Persistent Links => 0
Inactive Persistent Links => 0
Active Links => 0
Persistent cache => enabled
put_hits => 0
put_misses => 0
get_hits => 0
get_misses => 0
size => 2000
free_items => 2000
references => 2

Directive => Local Value => Master Value
mysqli.max_links => Unlimited => Unlimited
mysqli.max_persistent => Unlimited => Unlimited
mysqli.allow_persistent => On => On
mysqli.default_host => no value => no value
mysqli.default_user => no value => no value
mysqli.default_pw => no value => no value
mysqli.default_port => 3306 => 3306
mysqli.default_socket => no value => no value
mysqli.reconnect => Off => Off
mysqli.allow_local_infile => On => On
mysqli.cache_size => 2000 => 2000

    
```

## 参见

`ReflectionExtension::getName()` `phpinfo()`
