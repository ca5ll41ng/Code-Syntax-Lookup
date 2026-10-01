---
id: "zh-php-function-function-filectime"
language: "php"
lang: "zh"
category: "function"
name: "filectime"
title: "取得文件的 inode 修改时间"
signature: "int|false filectime(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.filectime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件的 inode 修改时间

## 说明

```php
int|false filectime(string $filename)
```

取得文件的 inode 修改时间。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回文件上次 inode 被修改的时间， 或者在失败时返回 `false`。 时间以 Unix 时间戳的方式返回。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`filectime()` 例子**

```php


<?php

// 输出类似：  somefile.txt was last changed: December 29 2002 22:16:23.

$filename = 'somefile.txt';
if (file_exists($filename)) {
    echo "$filename was last changed: " . date("F d Y H:i:s.", filectime($filename));
}

?>

    
```

## 注释

> 注意：在大多数 Unix 文件系统中，当一个文件的 inode 数据被改变时则该文件被认为是修改了。也就是说，当文件的权限，所有者，所有组或其它 inode 中的元数据被更新时。参见 `filemtime()`（这才是你想用于在 Web 页面中建立“最后更新时间”脚注的函数）和 `fileatime()`。

> 注意某些 Unix 说明文本中把 ctime 说成是该文件建立的时间，这是错的。在大多数 Unix 文件系统中没有 Unix 文件的建立时间。

> 注意：不同文件系统对时间的判断方法可能是不相同的。

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`filemtime()`
