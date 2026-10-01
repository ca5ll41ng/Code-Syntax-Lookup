---
id: "zh-php-guide-mcrypt-setup"
language: "php"
lang: "zh"
category: "guide"
name: "mcrypt.setup"
title: "安装/配置"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/mcrypt.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

{{{ Requirements 

## 需求

这些函数需要使用 [mcrypt]() 库。 请从 []() 下载 `libmcrypt-x.x.tar.gz`， 并按以下指导完成安装。

你需要使用 libmcrypt 2.5.6 或更高版本。

PHP 5.2 的 Windows 二进制发行版中已经包含了本库。 PHP 5.3 的 Windows 二进制发行版中开始使用 MCrypt 静态库， 所以不再需要 DLL。

如果使用 libmcrypt 2.4.x 或更高版本链接编译 PHP，支持以下附加的分组加密算法： CAST，LOKI97，RIJNDAEL，SAFERPLUS，SERPENT， 以及以下流密码：ENIGMA（加密）， PANAMA，RC4 和 WAKE。 如果使用 libmcrypt 2.4.x 或更高版本，那么还支持 nOFB 密码模式。

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

  

 }}} 

 {{{ Resources 

## 资源类型

`mcrypt_module_open()` 返回加密描述符。

 }}}
