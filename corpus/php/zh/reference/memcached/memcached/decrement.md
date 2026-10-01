---
id: "zh-php-function-memcached-decrement"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::decrement"
title: "减小数值元素的值"
signature: "public int|false Memcached::decrement(string $key, int $offset = 1, int $initial_value = 0, int $expiry = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.decrement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 减小数值元素的值

## 说明

```php
public int|false Memcached::decrement(string $key, int $offset = 1, int $initial_value = 0, int $expiry = 0)
```

`Memcached::decrement()` 减小数值元素的值，减小多少由参数 `$offset` 决定。如果元素的值不是数值，则会导致错误。如果减小后的值小于 0,则新值会设为 0。如果键不存在，`Memcached::decrement()` 会将元素设置为 `$initial_value` 参数。

## 参数

- **`$key`** — 将要减小值的元素的 key。
- **`$offset`** — 要减少的元素值要减少的数量。
- **`$initial_value`** — 如果 key 不存在的时候设置到元素的值。
- **`$expiry`** — 设置的元素过期时间。

## 返回值

成功时返回元素的新值， 或者在失败时返回 `false`。

## 示例

**`Memcached::decrement()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('counter', 5);
$n = $m->decrement('counter');
var_dump($n);

$n = $m->decrement('counter', 10);
var_dump($n);

var_dump($m->get('counter'));

$m->set('counter', 'abc');
$n = $m->increment('counter');
// ^ will fail due to item value not being numeric
var_dump($n);
?>

    
```

以上示例会输出：

```text


int(4)
int(0)
int(0)
bool(false)

    
```

## 参见

`Memcached::increment()` `Memcached::incrementByKey()` `Memcached::decrementByKey()`
