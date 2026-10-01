---
id: "zh-php-function-memcached-get"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::get"
title: "检索元素"
signature: "public mixed Memcached::get(string $key, callable|null $cache_cb = null, int $get_flags = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索元素

## 说明

```php
public mixed Memcached::get(string $key, callable|null $cache_cb = null, int $get_flags = 0)
```

`Memcached::get()` 返回之前存储在 `$key` 下的元素。如果元素被找到，并且 `$get_flags` 指定为 `Memcached::GET_EXTENDED`，也会返回该元素的 CAS 记号。关于 CAS 记号的使用，参阅 `Memcached::cas()`。可以通过 `$cache_cb` 参数指定 通读缓存回调。

## 参数

- **`$key`** — 要检索的元素的 key。
- **`$cache_cb`** — 通读缓存回掉函数或 `null`。
- **`$get_flags`** — flag 控制返回结果。当指定为 `Memcached::GET_EXTENDED` 时，该函数还将返回 CAS 记号。

## 返回值

返回存储在缓存中的值，否则返回 `false`。 如果 `$get_flags` 设置为 `Memcached::GET_EXTENDED`，则返回包含值和 CAS 记号的数组，而不仅仅返回值。如果 key 不存在，`Memcached::getResultCode()` 将返回 `Memcached::RES_NOTFOUND`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL memcached 3.0.0 | 移除 `$cas_token` 参数。 相反，添加 `$get_flags`，当赋予 `Memcached::GET_EXTENDED` 的值时，将确保获取 CAS 记号。 |

## 示例

**`Memcached::get()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('foo', 100);
var_dump($m->get('foo'));
?>

    
```

以上示例会输出：

```text


int(100)

    
```

**`Memcached::get()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

if (!($ip = $m->get('ip_block'))) {
    if ($m->getResultCode() == Memcached::RES_NOTFOUND) {
        $ip = array();
        $m->set('ip_block', $ip);
    } else {
        /* log error */
        /* ...       */
    }
}
?>

    
```

## 参见

`Memcached::getByKey()` `Memcached::getMulti()` `Memcached::getDelayed()`
