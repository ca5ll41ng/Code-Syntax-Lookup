---
id: "zh-php-guide-memcache-examples"
language: "php"
lang: "zh"
category: "guide"
name: "memcache.examples"
title: "示例"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 基础用法

**memcache 扩展概述示例**

在这个例子中，一个对象被保存到缓存中，又被取回。存储之前会序列化对象和其他非标量类型，因此不能在缓存中存储资源（即连接标识符和其它）。

```php


<?php

$memcache = new Memcache;
$memcache->connect('localhost', 11211) or die ("Could not connect");

$version = $memcache->getVersion();
echo "Server's version: ".$version."<br/>\n";

$tmp_object = new stdClass;
$tmp_object->str_attr = 'test';
$tmp_object->int_attr = 123;

$memcache->set('key', $tmp_object, false, 10) or die ("Failed to save data at the server");
echo "Store data in the cache (data will expire in 10 seconds)<br/>\n";

$get_result = $memcache->get('key');
echo "Data from the cache:<br/>\n";

var_dump($get_result);

?>

   
```

**使用 memcache session 处理程序**

```php


<?php

$session_save_path = "tcp://$host:$port?persistent=1&weight=2&timeout=2&retry_interval=10,  ,tcp://$host:$port  ";
ini_set('session.save_handler', 'memcache');
ini_set('session.save_path', $session_save_path);

?>

   
```
