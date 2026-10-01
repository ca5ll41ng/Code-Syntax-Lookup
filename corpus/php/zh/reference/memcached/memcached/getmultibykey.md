---
id: "zh-php-function-memcached-getmultibykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getMultiByKey"
title: "从特定服务器检索多个元素"
signature: "public array|false Memcached::getMultiByKey(string $server_key, array $keys, int $get_flags = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getmultibykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从特定服务器检索多个元素

## 说明

```php
public array|false Memcached::getMultiByKey(string $server_key, array $keys, int $get_flags = 0)
```

`Memcached::getMultiByKey()`除了可以通过`$server_key`参数自由的指定`$key` 所映射的服务器外， 在功能上等同于`Memcached::getMulti()`。(译注: 关于*ByKey系列方法及$server_key的工作原理请参照addByKey方法文档)

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$keys`** — 要检索的key的数组。
- **`$get_flags`** — get操作的附加选项。

## 返回值

返回检索到的元素的数组 或者在失败时返回 `false`. 如需要则使用 `Memcached::getResultCode()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL memcached 3.0.0 | 移除 `$cas_tokens` 参数。 新增 `Memcached::GET_EXTENDED`，当作为 flag 传递时，确保获取到 CAS token。 |

## 参见

`Memcached::getMulti()` `Memcached::get()` `Memcached::getDelayed()`
