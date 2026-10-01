---
id: "zh-php-function-function-copy"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "copy"
title: "拷贝文件"
signature: "bool copy(string $from, string $to, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 拷贝文件

## 说明

```php
bool copy(string $from, string $to, resource|null $context = null)
```

将文件从 `$from` 拷贝到 `$to`。

如果要移动文件的话，请使用 `rename()` 函数。

## 参数

- **`$from`** — 源文件路径。
- **`$to`** — 目标路径。如果 `$to` 是一个 URL，则如果封装协议不支持覆盖已有的文件时拷贝操作会失败。
  > 如果目标文件已存在，将会被覆盖。


- **`$context`** — A valid context resource created with `stream_context_create()`.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`copy()` 例子**

```php


<?php
$file = 'example.txt';
$newfile = 'example.txt.bak';

if (!copy($file, $newfile)) {
    echo "failed to copy $file...\n";
}
?>

    
```

## 参见

`move_uploaded_file()` `rename()` The section of the manual about handling file uploads
