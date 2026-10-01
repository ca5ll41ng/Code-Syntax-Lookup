---
id: "zh-php-guide-taint-installation"
language: "php"
lang: "zh"
category: "guide"
name: "taint.installation"
title: "安装"
module: "taint"
source_url: "https://www.php.net/manual/zh/taint.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [taint](taint).

通过 PECL 安装：

```text


$ pecl install taint

  
```

源码托管在 [GitHub](laruence/taint) 上。如需从源码编译安装该扩展：

```text


$ git clone https://github.com/laruence/taint.git
$ cd taint
$ phpize
$ ./configure
$ make
$ sudo make install

  
```

然后在 php.ini 中添加 `extension=taint.so`（Windows 下为 `extension=php_taint.dll`）启用该扩展，并将 taint.enable 设置为 `1`。

> Taint 是开发和审计工具。不要在生产环境中启用它： 插桩会拖慢每个请求并禁用 OPcache JIT， 而且警告信息可能会把请求数据泄露到日志中。
