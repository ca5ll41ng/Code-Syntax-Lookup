---
id: "zh-php-function-function-tempnam"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "tempnam"
title: "建立一个具有唯一文件名的文件"
signature: "string|false tempnam(string $directory, string $prefix)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.tempnam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立一个具有唯一文件名的文件

## 说明

```php
string|false tempnam(string $directory, string $prefix)
```

在指定目录中建立一个具有唯一文件名的文件。如果该目录不存在或不可写，`tempnam()` 会在系统临时目录中生成一个文件，并返回该文件包含文件名的完整路径。

## 参数

- **`$directory`** — 将在其中创建临时文件名的目录。
- **`$prefix`** — 产生临时文件的前缀。
  > 仅使用前缀的前 63 个字符，忽略其它字符。Windows 仅使用前缀的前三个字符。



## 返回值

返回新的带路径的临时文件名，出错返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 当回退到系统的临时目录时 `tempnam()` 会发出一个通知。 |

## 示例

**`tempnam()` 例子**

```php


<?php
$tmpfname = tempnam("/tmp", "FOO");

$handle = fopen($tmpfname, "w");
fwrite($handle, "writing to tempfile");
fclose($handle);

// do something here

unlink($tmpfname);
?>

    
```

## 注释

> 如果 PHP 不能在指定的 `$directory`参数中创建文件，则退回到系统默认值。在 NTFS 文件系统中，同样的情况也发生在 `$directory` 中文件数超过 65534 个的时候。

## 参见

`tmpfile()` `sys_get_temp_dir()` `unlink()`
