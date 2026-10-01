---
id: "zh-php-guide-imap-installation"
language: "php"
lang: "zh"
category: "guide"
name: "imap.installation"
title: "安装"
module: "imap"
source_url: "https://www.php.net/manual/zh/imap.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

## PHP 8.4

此扩展已被移至  资源库；不再与 PHP 捆绑，从 PHP 8.4.0

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [imap](imap)。

## PHP < 8.4

要使这些函数生效，必须在编译 PHP 的时候添加 --with-imap[=DIR] 选项, DIR 表示 c-client 安装前缀。比如上面提到的例子中，可以使用 --with-imap=/usr/local/imap-2000b。根据以上描述，这个路径是指向你先前创建的文件夹。对于 Windows 用户，应该在 php.ini 文件中引入`php_imap.dll`。

> 因为取决于 c-client 是如何配置的，所以应该向 PHP 配置行添加 --with-imap-ssl=/path/to/openssl/ 或者 --with-kerberos=/path/to/kerberos 配置信息。

> IMAP 扩展不是线程安全的；它不应该被用于 ZTS 构建。

> IMAP，recode，和 YAZ 扩展不能同时使用，因为它们共享了相同 的内部符号。注意：Yaz 2.0 及以上版本不存在此问题。
