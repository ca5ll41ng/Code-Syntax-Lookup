---
id: "zh-php-function-memcached-fetch"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::fetch"
title: "读取下一个结果"
signature: "public array|false Memcached::fetch()"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取下一个结果

## 说明

```php
public array|false Memcached::fetch()
```

`Memcached::fetch()` 从最后一次请求中检索下一个结果。

## 参数

此函数没有参数。

## 返回值

返回下一个结果或其他情况下返回 `false`。如果结果集已经检索完毕，`Memcached::getResultCode()` 将返回 `Memcached::RES_END`。

## 示例

**`Memcached::fetch()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('int', 99);
$m->set('string', 'a simple string');
$m->set('array', array(11, 12));

$m->getDelayed(array('int', 'array'), true);
while ($result = $m->fetch()) {
    var_dump($result);
}
?>

    
```

以上示例的输出类似于：

```text


array(3) {
  ["key"]=>
  string(3) "int"
  ["value"]=>
  int(99)
  ["cas"]=>
  float(2363)
}
array(3) {
  ["key"]=>
  string(5) "array"
  ["value"]=>
  array(2) {
    [0]=>
    int(11)
    [1]=>
    int(12)
  }
  ["cas"]=>
  float(2365)
}

    
```

## 参见

`Memcached::fetchAll()` `Memcached::getDelayed()`
