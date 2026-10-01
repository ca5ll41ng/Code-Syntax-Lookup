---
id: "zh-php-function-function-fileatime"
language: "php"
lang: "zh"
category: "function"
name: "fileatime"
title: "取得文件的上次访问时间"
signature: "int|false fileatime(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fileatime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件的上次访问时间

## 说明

```php
int|false fileatime(string $filename)
```

取得文件的上次访问时间。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回文件上次被访问的时间， 或者在失败时返回 `false`。时间以 Unix 时间戳的方式返回。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`fileatime()` 例子**

```php


<?php

// 输出类似：somefile.txt was last accessed: December 29 2002 22:16:23.

$filename = 'somefile.txt';
if (file_exists($filename)) {
    echo "$filename was last accessed: " . date("F d Y H:i:s.", fileatime($filename));
}

?>

    
```

## 注释

> 注意：一个文件的 atime 应该在不论何时读取了此文件中的数据块时被更改。当一个应用程序定期访问大量文件或目录时很影响性能。
>
> 有些 Unix 文件系统可以在加载时关闭 atime 的更新以提高这类程序的性能。USENET 新闻组假脱机是一个常见的例子。在这种文件系统下本函数没有用处。

> 注意：不同文件系统对时间的判断方法可能是不相同的。

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`filemtime()` `fileinode()` `date()`
