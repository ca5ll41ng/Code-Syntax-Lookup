---
id: "zh-php-function-memcached-fetchall"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::fetchAll"
title: "读取所有剩余结果"
signature: "public array|false Memcached::fetchAll()"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.fetchall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取所有剩余结果

## 说明

```php
public array|false Memcached::fetchAll()
```

`Memcached::fetchAll()` 从最后一次请求中检索所有剩余结果。

## 参数

此函数没有参数。

## 返回值

返回结果集 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 示例

**`Memcached::getDelayed()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('int', 99);
$m->set('string', 'a simple string');
$m->set('array', array(11, 12));

$m->getDelayed(array('int', 'array'), true);
var_dump($m->fetchAll());
?>

    
```

以上示例会输出：

```text


array(2) {
  [0]=>
  array(3) {
    ["key"]=>
    string(3) "int"
    ["value"]=>
    int(99)
    ["cas"]=>
    float(2363)
  }
  [1]=>
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
}

    
```

## 参见

`Memcached::fetch()` `Memcached::getDelayed()`
