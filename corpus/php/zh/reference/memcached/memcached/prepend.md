---
id: "zh-php-function-memcached-prepend"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::prepend"
title: "向一个已存在的元素前面追加数据"
signature: "public bool Memcached::prepend(string $key, string $value)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向一个已存在的元素前面追加数据

## 说明

```php
public bool Memcached::prepend(string $key, string $value)
```

`Memcached::prepend()` 向已存在元素的字符串值前追加 `$value`。 `$value` 被强制转换成字符串类型主要是因为对于 mix 类型的追加没有很好的定义。

> 如果 `Memcached::OPT_COMPRESSION` 常量开启，这个操作会失败，并引发一个警告，因为向压缩数据 后追加数据可能会导致解压不了。

## 参数

- **`$key`** — 要向前追加数据的元素的 key。
- **`$value`** — 要追加的字符串。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 当打开压缩时，返回 `null`。

## 错误／异常

当压缩启用时返回 `null` 并引发 `E_WARNING`。

## 示例

**`Memcached::prepend()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);
$m->setOption(Memcached::OPT_COMPRESSION, false);

$m->set('foo', 'abc');
$m->prepend('foo', 'def');
var_dump($m->get('foo'));
?>

    
```

以上示例会输出：

```text


string(6) "defabc"

    
```

## 参见

`Memcached::prependByKey()` `Memcached::append()`
