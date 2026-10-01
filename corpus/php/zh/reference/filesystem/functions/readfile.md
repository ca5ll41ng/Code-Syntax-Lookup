---
id: "zh-php-function-function-readfile"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "readfile"
title: "输出文件"
signature: "int|false readfile(string $filename, bool $use_include_path = false, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.readfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出文件

## 说明

```php
int|false readfile(string $filename, bool $use_include_path = false, resource|null $context = null)
```

读取文件并写入到输出缓冲。

## 参数

- **`$filename`** — 要读取的文件名。
- **`$use_include_path`** — 想要在 include_path 中搜索文件，可使用这个可选的第二个参数，设为 `true`。
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

成功时返回从文件中读入的字节数， 或者在失败时返回 `false`

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**使用 `readfile()` 强制下载**

```php


<?php
$file = 'monkey.gif';

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($file).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
}
?>

    
```

以上示例的输出类似于：

## 注释

> `readfile()` 自身不会导致任何内存问题。 如果出现内存不足的错误，使用 `ob_get_level()` 确保输出缓存已经关闭。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参见

`fpassthru()` `file()` `fopen()` `include()` `require()` `virtual()` `file_get_contents()` `wrappers`
