---
id: "zh-php-function-memcached-cas"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::cas"
title: "比较并交换值"
signature: "public bool Memcached::cas(string|int|float $cas_token, string $key, mixed $value, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.cas.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 比较并交换值

## 说明

```php
public bool Memcached::cas(string|int|float $cas_token, string $key, mixed $value, int $expiration = 0)
```

`Memcached::cas()` 执行“检查并设置”的操作，因此仅在当前客户端最后一次取值后，该 key 对应的值没有被其他客户端修改的情况下，才能够将值写入。检查是通过 `$cas_token` 参数进行的，这个参数是 memcache 分配给已存在元素的唯一 64 位值。怎样获取这个值请查看 `Memcached::get*()` 系列方法的文档。注意：这个值作为 float 类型是因为 PHP 的整型空间限制。

译注：这是 Memcached 扩展比 Memcache 扩展一个非常重要的优势，在这样一个系统级（Memcache 自身提供）的冲突检测机制（乐观锁）下，才能保证高并发下的数据安全。

## 参数

- **`$cas_token`** — 与已存在元素关联的唯一的值，由 Memcache 生成。
- **`$key`** — 用于存储值的键名。
- **`$value`** — 存储的值。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果在元素尝试存储时发现在本客户端最后一次获取后被其他客户端修改，`Memcached::getResultCode()` 将返回 `Memcached::RES_DATA_EXISTS`。

## 示例

**`Memcached::cas()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

do {
    /* 获取ip列表以及它的标记 */
    $ips = $m->get('ip_block', null, $cas);
    /* 如果列表不存在， 创建并进行一个原子添加（如果其他客户端已经添加， 这里就返回false）*/
    if ($m->getResultCode() == Memcached::RES_NOTFOUND) {
        $ips = array($_SERVER['REMOTE_ADDR']);
        $m->add('ip_block', $ips);
    /* 其他情况下，添加ip到列表中， 并以cas方式去存储， 这样当其他客户端修改过， 则返回false */
    } else { 
        $ips[] = $_SERVER['REMOTE_ADDR'];
        $m->cas($cas, 'ip_block', $ips);
    }   
} while ($m->getResultCode() != Memcached::RES_SUCCESS);

?>

    
```

## 参见

`Memcached::casByKey()`
