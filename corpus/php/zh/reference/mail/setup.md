---
id: "zh-php-guide-mail-setup"
language: "php"
lang: "zh"
category: "guide"
name: "mail.setup"
title: "安装/配置"
module: "mail"
source_url: "https://www.php.net/manual/zh/mail.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

{{{ Requirements 

## 需求

为了使邮件功能可用，PHP 在编译时必须能够访问系统上的 `sendmail` 二进制文件。如果使用其他邮件程序，例如 qmail 或 postfix， 请确保使用相应的包装器。PHP 首先会在你的 PATH 中查找 sendmail，然后在以下位置查找： `/usr/bin:/usr/sbin:/usr/etc:/etc:/usr/ucblib:/usr/lib`。 强烈建议将 sendmail 添加到你的 PATH 中。 另外，编译 PHP 的用户必须有权限访问 sendmail 二进制文件。

 }}} 

 {{{ Configuration 

  

 }}}
