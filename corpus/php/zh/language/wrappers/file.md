---
id: "zh-php-function-wrappers-file"
language: "php"
lang: "zh"
category: "function"
name: "file://"
title: "访问本地文件系统"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 访问本地文件系统

## 说明

 {{{ 

`file://` 是 PHP 默认使用的封装器，表示本地文件系统。 当指定相对路径（不以 `/`、`\`、`\\` 或 Windows 驱动器号开头）时， 提供的路径将应用于当前工作目录。在许多情况下，这是脚本所在的目录，除非已更改。 使用 CLI SAPI 时，默认为从调用脚本的目录。

在某些函数里，例如 `fopen()` 和 `file_get_contents()`，`include_path` 可能也会被搜索相对路径。

 }}} 

## 用法

 {{{ 

- `/path/to/file.ext`
- `relative/path/to/file.ext`
- `fileInCwd.ext`
- `C:/path/to/winfile.ext`
- `C:\path\to\winfile.ext`
- `\\smbserver\share\path\to\winfile.ext`
- `file:///path/to/file.ext`

 }}} 

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受 allow_url_fopen 影响 | No |
| 允许读取 | Yes |
| 允许写入 | Yes |
| 允许添加 | Yes |
| 允许同时读和写 | Yes |
| 支持 `stat()` | Yes |
| 支持 `unlink()` | Yes |
| 支持 `rename()` | Yes |
| 支持 `mkdir()` | Yes |
| 支持 `rmdir()` | Yes |

 }}}
