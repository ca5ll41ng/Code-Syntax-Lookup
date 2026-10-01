---
id: "zh-php-function-function-rewind"
language: "php"
lang: "zh"
category: "function"
name: "rewind"
title: "倒回文件指针的位置"
signature: "bool rewind(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 倒回文件指针的位置

## 说明

```php
bool rewind(resource $stream)
```

将 `$stream` 的文件位置指针设为文件流的开头。

> 如果将文件以附加（"a" 或者 "a+"）模式打开，无论文件指针位置如何，写入文件的任何数据总是会被附加在后面。

## 参数

- **`$stream`** — 文件指针必须合法，并且指向由 `fopen()` 成功打开的文件。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`rewind()` overwriting example**

```php


<?php
$handle = fopen('output.txt', 'r+');

fwrite($handle, 'Really long sentence.');
rewind($handle);
fwrite($handle, 'Foo');
rewind($handle);

echo fread($handle, filesize('output.txt'));

fclose($handle);
?>

    
```

以上示例的输出类似于：

```text


Foolly long sentence.

    
```

## 参见

`fread()` `fseek()` `ftell()` `fwrite()`
