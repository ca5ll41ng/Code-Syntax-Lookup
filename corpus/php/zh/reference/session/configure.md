---
id: "zh-php-guide-session-installation"
language: "php"
lang: "zh"
category: "guide"
name: "session.installation"
title: "安装"
module: "session"
source_url: "https://www.php.net/manual/zh/session.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

此扩展默认为启用，编译时可通过下列选项禁用： --disable-session

要为会话存储使用共享内存分配（mm），配置 PHP 时指定 --with-mm[=DIR]。

PHP 的 Windows 版本已内建对此扩展的支持。不需要载入额外的扩展来使用这些函数。

> 默认情况下，所有与特定会话相关的数据都被存储在由 INI 选项 session.save_path 指定的目录下的一个文件中。对每个会话会建立一个文件（不论是否有数据与该会话相关）。这是由于每打开一个会话即建立一个文件，不论是否有数据写入到该文件中。注意由于和文件系统协同工作的限制，此行为有个副作用，有可能造成用户定制的会话处理器（例如用数据库）丢失了未存储数据的会话。
