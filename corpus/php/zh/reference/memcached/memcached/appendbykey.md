---
id: "zh-php-function-memcached-appendbykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::appendByKey"
title: "向指定服务器上已存在元素追加数据"
signature: "public bool|null Memcached::appendByKey(string $server_key, string $key, string $value)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.appendbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向指定服务器上已存在元素追加数据

## 说明

```php
public bool|null Memcached::appendByKey(string $server_key, string $key, string $value)
```

`Memcached::appendByKey()` 在功能上等同于 `Memcached::append()`。区别在于使用 `$server_key` 可以自由的将 `$key` 映射到指定服务器。

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$key`** — 用于存储值的键名。
- **`$value`** — 要追加的字符串。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 当打开压缩时，返回 `null`。

## 错误／异常

当压缩启用时返回 `null` 并引发 `E_WARNING`。

## 参见

`Memcached::append()` `Memcached::prepend()`
