---
id: "zh-php-function-memcached-getversion"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getVersion"
title: "获取服务器池中所有服务器的版本信息"
signature: "public array|false Memcached::getVersion()"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取服务器池中所有服务器的版本信息

## 说明

```php
public array|false Memcached::getVersion()
```

`Memcached::getVersion()` 返回一个包含所有可用 memcached 服务器版本信息的数组。 （译注：经实验，服务器池中有不可用服务器时，返回 false）

## 参数

此函数没有参数。

## 返回值

服务器版本信息的数组，每个服务器占一项。

## 示例

**`Memcached::getVersion()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

print_r($m->getVersion());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [localhost:11211] => 1.2.6
)

    
```
