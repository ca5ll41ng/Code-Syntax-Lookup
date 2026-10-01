---
id: "zh-php-guide-mysqli-setup"
language: "php"
lang: "zh"
category: "guide"
name: "mysqli.setup"
title: "安装/配置"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

{{{ Requirements 

## 需求

为了使这些函数可用，必须编译支持 mysqli 扩展的 PHP。

*MySQL 8*

当运行 PHP 7.1.16 之前的版本或者 PHP 7.2.4 之前的 PHP 7.2 版本时，需要将 MySQL 8 服务器的默认密码插件设置为 *mysql_native_password*。否则在未使用 *caching_sha2_password* 时，也会看到类似这样的错误 *The server requested authentication method unknown to the client [caching_sha2_password]*。

这是因为 MySQL 8 默认使用 caching_sha2_password，这是旧版 PHP (mysqlnd) 版本无法识别的插件。然而，可以在 `my.cnf` 中设置 `default_authentication_plugin=mysql_native_password` 来变更它。从 PHP 7.4.4 开始，完全支持 *caching_sha2_password* 插件。对于旧版本，mysql_xdevapi 扩展支持。

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

  

 }}}
