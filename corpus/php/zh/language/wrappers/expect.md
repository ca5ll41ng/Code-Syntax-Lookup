---
id: "zh-php-function-wrappers-expect"
language: "php"
lang: "zh"
category: "function"
name: "expect://"
title: "处理交互式的流"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.expect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 处理交互式的流

## 说明

 {{{ 

由 `expect://` 封装协议打开的数据流 PTY 通过提供了对进程 stdio、stdout 和 stderr 的访问。

> 该封装协议默认未开启
>
> 为了使用 `expect://` 封装协议，必须从  中安装有效的 [Expect](expect) 扩展。

`expect://` (PECL)

 }}} 

## 用法

 {{{ 

- `expect://command`

 }}} 

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受 allow_url_fopen 影响 | No |
| 允许读取 | Yes |
| 允许写入 | Yes |
| 允许添加 | Yes |
| 允许同时读和写 | No |
| 支持 `stat()` | No |
| 支持 `unlink()` | No |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |

 }}}
