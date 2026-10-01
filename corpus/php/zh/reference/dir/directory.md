---
id: "zh-php-guide-class-directory"
language: "php"
lang: "zh"
category: "guide"
name: "class.directory"
title: "Directory 类"
module: "dir"
source_url: "https://www.php.net/manual/zh/class.directory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Directory 类

Directory

   简介  `Directory` 实例是通过调用 `dir()` 函数创建的，而不是 new 操作符。      类摘要    `final` `Directory`  属性  `public` `readonly` `string` `path`   `public` `readonly` `resource` `handle`  方法       属性 
- **`path`** — 被打开目录的地址。
- **`handle`** — 目录句柄。可以被其他的目录操作函数使用，例如 `readdir()`、`rewinddir()` 和 `closedir()`。

   更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 该类现为最终类。 |
| 8.1.0 | 现在 `path` 和 `handle` 属性是只读的。 |
