---
id: "zh-php-function-function-realpath-cache-get"
language: "php"
lang: "zh"
category: "function"
name: "realpath_cache_get"
title: "获取真实目录缓存的详情"
signature: "array realpath_cache_get()"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.realpath-cache-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取真实目录缓存的详情

## 说明

```php
array realpath_cache_get()
```

获得真实路径缓存的详情。

## 参数

此函数没有参数。

## 返回值

返回真实路径缓存详情的数组。键是原始路径以及值为具体信息数组，含有该解析的路径，过期时间以及其他的更多选项。

## 示例

**`realpath_cache_get()` 示例**

```php


<?php
var_dump(realpath_cache_get());
?>

    
```

以上示例的输出类似于：

```text


array(2) {
  ["/test"]=>
  array(4) {
    ["key"]=>
    int(123456789)
    ["is_dir"]=>
    bool(true)
    ["realpath"]=>
    string(5) "/test"
    ["expires"]=>
    int(1260318939)
  }
  ["/test/test.php"]=>
  array(4) {
    ["key"]=>
    int(987654321)
    ["is_dir"]=>
    bool(false)
    ["realpath"]=>
    string(12) "/root/test.php"
    ["expires"]=>
    int(1260318939)
  }
}

    
```

## 参见

`realpath_cache_size()`
