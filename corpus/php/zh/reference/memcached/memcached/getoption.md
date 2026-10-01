---
id: "zh-php-function-memcached-getoption"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getOption"
title: "获取 Memcached 的选项值"
signature: "public mixed Memcached::getOption(int $option)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 Memcached 的选项值

## 说明

```php
public mixed Memcached::getOption(int $option)
```

这个方法返回 `$option` 指定的 Memcached 选项的值。一些选项是和 libmemcached 中相对应的， 也有一些特殊的选项仅仅是扩展自身的。关于选项的更多信息请查看 Memcached 常量。

## 参数

- **`$option`** — `Memcached::OPT_*` 系列常量中的一个。

## 返回值

返回请求的选项的值，或者在发生错误时返回 `false`。

## 示例

**获取 Memcached 选项**

```php


<?php
$m = new Memcached();
var_dump($m->getOption(Memcached::OPT_COMPRESSION));
var_dump($m->getOption(Memcached::OPT_POLL_TIMEOUT));
?>

    
```

以上示例的输出类似于：

```text


bool(true)
int(1000)

    
```

## 参见

`Memcached::getOption()` `Memcached::setOption()` Memcached 常量
