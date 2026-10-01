---
id: "zh-php-function-function-filemtime"
language: "php"
lang: "zh"
category: "function"
name: "filemtime"
title: "取得文件修改时间"
signature: "int|false filemtime(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.filemtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件修改时间

## 说明

```php
int|false filemtime(string $filename)
```

本函数返回文件中的数据块上次被写入的时间，也就是说，文件的内容上次被修改的时间。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回文件上次被修改的时间， 或者在失败时返回 `false`。时间以 Unix 时间戳的方式返回，可用于 `date()`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`filemtime()` 例子**

```php


<?php
// outputs e.g.  somefile.txt was last modified: December 29 2002 22:16:23.

$filename = 'somefile.txt';
if (file_exists($filename)) {
    echo "$filename was last modified: " . date ("F d Y H:i:s.", filemtime($filename));
}
?>

    
```

## 注释

> 注意：不同文件系统对时间的判断方法可能是不相同的。

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`filectime()` `stat()` `touch()` `getlastmod()`
