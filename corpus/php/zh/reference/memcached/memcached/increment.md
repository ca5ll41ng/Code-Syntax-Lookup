---
id: "zh-php-function-memcached-increment"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::increment"
title: "增加数值元素的值"
signature: "public int|false Memcached::increment(string $key, int $offset = 1, int $initial_value = 0, int $expiry = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.increment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 增加数值元素的值

## 说明

```php
public int|false Memcached::increment(string $key, int $offset = 1, int $initial_value = 0, int $expiry = 0)
```

`Memcached::increment()` 将数值元素增加 `$offset` 大小。如果元素的值不是数值类型，将返回错误。如果 key 不存在，`Memcached::increment()` 会将元素设置为 `$initial_value` 参数。

## 参数

- **`$key`** — 要增加值的元素的 key。
- **`$offset`** — 要将元素的值增加的大小。
- **`$initial_value`** — 如果元素不存在，要设置的默认值。
- **`$expiry`** — 设置元素值的过期时间。

## 返回值

成功时返回元素的新值 或者在失败时返回 `false`。

## 示例

**`Memcached::increment()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('counter', 0);
$m->increment('counter');
$n = $m->increment('counter', 10);
var_dump($n);

$m->set('counter', 'abc');
$n = $m->increment('counter');
// ^ will fail due to item value not being numeric
var_dump($n);
?>

    
```

以上示例会输出：

```text


int(11)
bool(false)

    
```

## 参见

`Memcached::decrement()` `Memcached::decrementByKey()` `Memcached::incrementByKey()`
