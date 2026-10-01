---
id: "zh-php-function-wrappers-ftp"
language: "php"
lang: "zh"
category: "function"
name: "ftp://"
aliases: ["ftps://"]
title: "访问 FTP(s) URLs"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.ftp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 访问 FTP(s) URLs

## 说明

 {{{ 

允许通过 FTP 读取存在的文件，以及创建新文件。 如果服务器不支持被动（passive）模式的 FTP，连接会失败。

打开文件后你既可以读也可以写，但是不能同时进行。 当远程文件已经存在于 ftp 服务器上，如果尝试打开并写入文件的时候， 未指定上下文（context）选项 `overwrite`，连接会失败。 如果要通过 FTP 覆盖存在的文件， 指定上下文（context）的 `overwrite` 选项来打开、写入。 另外可使用 FTP 扩展来代替。

如果你设置了 php.ini 中的 from 指令， 这个值会作为匿名（anonymous）ftp 的密码。

 }}} 

## 用法

 {{{ 

- `ftp://example.com/pub/file.txt`
- `ftp://user:password@example.com/pub/file.txt`
- `ftps://example.com/pub/file.txt`
- `ftps://user:password@example.com/pub/file.txt`

 }}} 

## 可选项

 {{{ 

| 属性 | 是否支持 |
| --- | --- |
| 受 allow_url_fopen 影响 | 是 |
| 允许读取 | 是 |
| 允许写入 | 是 (新文件/启用 `$overwrite` 后已存在的文件) |
| 允许添加 | 是 |
| 允许同时读和写 | 否 |
| 支持 `stat()` | 仅 `filesize()`、`filemtime()`、 `filetype()`、 `file_exists()`、 `is_file()` 和 `is_dir()`。 |
| 支持 `unlink()` | 是 |
| 支持 `rename()` | 是 |
| 支持 `mkdir()` | 是 |
| 支持 `rmdir()` | 是 |

 }}} 

## 注释

 {{{ 

> FTPS 仅在 openssl 扩展开启时有效。
>
> 如果服务器不支持 SSL，这个连接会降级（falls back）到普通未加密的 ftp。

> 追加
>
> 文件可以通过 `ftp://` URL 封装器来追加（append）。

 }}} 

## 参见

 {{{ 

 `context.ftp` 

 }}}
