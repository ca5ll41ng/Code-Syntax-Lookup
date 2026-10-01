---
id: "zh-php-function-memcached-set"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::set"
title: "存储一个元素"
signature: "public bool Memcached::set(string $key, mixed $value, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 存储一个元素

## 说明

```php
public bool Memcached::set(string $key, mixed $value, int $expiration = 0)
```

`Memcached::set()` 将 `$value` 存储在一个 memcached 服务器上的 `$key` 下。`$expiration` 参数 用于控制值的过期时间。

值可以是任何有效的非资源型 php 类型，因为资源类型不能被序列化存储。如果 `Memcached::OPT_COMPRESSION` 选项开启，序列化的值同样会被压缩存储。

## 参数

- **`$key`** — 用于存储值的键名。
- **`$value`** — 存储的值。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 示例

**`Memcached::set()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('int', 99);
$m->set('string', 'a simple string');
$m->set('array', array(11, 12));
/* 'object' 这个 key 将在 5 分钟后过期 */
$m->set('object', new stdClass, time() + 300);


var_dump($m->get('int'));
var_dump($m->get('string'));
var_dump($m->get('array'));
var_dump($m->get('object'));
?>

    
```

以上示例的输出类似于：

```text


int(99)
string(15) "a simple string"
array(2) {
  [0]=>
  int(11)
  [1]=>
  int(12)
}
object(stdClass)#1 (0) {
}

    
```

## 参见

`Memcached::setByKey()` `Memcached::add()` `Memcached::replace()`
