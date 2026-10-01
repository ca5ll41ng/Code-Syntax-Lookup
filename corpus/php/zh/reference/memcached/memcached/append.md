---
id: "zh-php-function-memcached-append"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::append"
title: "向已存在元素追加数据"
signature: "public bool|null Memcached::append(string $key, string $value)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向已存在元素追加数据

## 说明

```php
public bool|null Memcached::append(string $key, string $value)
```

`Memcached::append()` 向已存在的元素值末尾追加 `$value` 字符串。`$value` 强制为字符串的原因是因为对于 mix 类型的追加没有明确定义。

> 如果启用 `Memcached::OPT_COMPRESSION`，该操作将会失败并引发警告，因为无法向已压缩的数据追加压缩数据。

## 参数

- **`$key`** — 用于存储值的键名。
- **`$value`** — 将要追加的值。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 当打开压缩时，返回 `null`。

## 错误／异常

当压缩启用时返回 `null` 并引发 `E_WARNING`。

## 示例

**`Memcached::append()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);
$m->setOption(Memcached::OPT_COMPRESSION, false);

$m->set('foo', 'abc');
$m->append('foo', 'def');
var_dump($m->get('foo'));
?>

    
```

以上示例会输出：

```text


string(6) "abcdef"

    
```

## 参见

`Memcached::appendByKey()` `Memcached::prepend()`
