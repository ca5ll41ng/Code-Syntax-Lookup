---
id: "zh-php-function-function-unlink"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "unlink"
title: "删除文件"
signature: "bool unlink(string $filename, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.unlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除文件

## 说明

```php
bool unlink(string $filename, resource|null $context = null)
```

删除 `$filename`。和 Unix C 的 unlink() 函数相似。 发生错误时会产生一个 `E_WARNING` 级别的错误。

## 参数

- **`$filename`** — 文件的路径。 — 如果文件是符号链接，将会删除符号链接。在 Windows 上，删除目录的符号链接，必须使用 `rmdir()`。
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 现在 Windows 也可以用 `unlink()` 删除文件句柄还在使用中的文件了，在此之前是无法删除的。 然而，还是无法重新创建文件，需要等到所有句柄都关闭才可以。 |

## 示例

**基本的 `unlink()` 用法**

```php


<?php
$fh = fopen('test.html', 'a');
fwrite($fh, '<h1>Hello world!</h1>');
fclose($fh);

unlink('test.html');
?>

    
```

## 参见

`rmdir()`
