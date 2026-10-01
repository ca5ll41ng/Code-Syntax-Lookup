---
id: "zh-php-function-memcached-setoption"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::setOption"
title: "设置一个 memcached 选项"
signature: "public bool Memcached::setOption(int $option, mixed $value)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.setoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置一个 memcached 选项

## 说明

```php
public bool Memcached::setOption(int $option, mixed $value)
```

这个方法用来设置 Memcached `$option` 的值。一些选项和 libmemcached 中定义的类似，还有一些则是 扩展所特有的。

## 参数

- **`$option`** — `Memcached::OPT_{*}` 常量之一。 参阅 Memcached 常量获取更多信息。
- **`$value`** — 要设置的值
  > 下面的选项列表需要通过特定的常量指定值。 `Memcached::OPT_HASH` 需要 `Memcached::HASH_{*}` 值。 `Memcached::OPT_DISTRIBUTION` 需要 `Memcached::DISTRIBUTION_{*}` 值。 `Memcached::OPT_SERIALIZER` 需要 `Memcached::SERIALIZER_{*}` 值。 `Memcached::OPT_COMPRESSION_TYPE` 需要 `Memcached::COMPRESSION_{*}` 值。



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**设置一个 memcached 选项值**

```php


<?php
$m = new Memcached();
var_dump($m->getOption(Memcached::OPT_HASH) == Memcached::HASH_DEFAULT);
$m->setOption(Memcached::OPT_HASH, Memcached::HASH_MURMUR);
$m->setOption(Memcached::OPT_PREFIX_KEY, "widgets");
echo "Prefix key is now: ", $m->getOption(Memcached::OPT_PREFIX_KEY), "\n";
?>

    
```

以上示例会输出：

```text


bool(true)
Prefix key is now: widgets

    
```

## 参见

`Memcached::getOption()` `Memcached::setOptions()` Memcached 常量
