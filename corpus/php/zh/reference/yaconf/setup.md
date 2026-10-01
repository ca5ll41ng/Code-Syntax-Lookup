---
id: "zh-php-guide-yaconf-setup"
language: "php"
lang: "zh"
category: "guide"
name: "yaconf.setup"
title: "安装/配置"
module: "yaconf"
source_url: "https://www.php.net/manual/zh/yaconf.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

Yaconf 需要 PHP 7.0 及以上版本。

## 安装

Yaconf 有三种安装方式：通过 PECL 安装、通过 PIE 安装， 或者从源码编译。

此  扩展未与 PHP 捆绑。

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [yaconf](yaconf).

此扩展在 Windows 平台的二进制扩展 (DLL 文件) PECL 可以在 PECL 官方网站上下载。

**使用 PECL 安装 Yaconf**

```shell


pecl install yaconf

   
```

从 Yaconf 1.2.0 起，还可以使用扩展安装器  （PHP Installer for Extensions）来安装，在命令行中执行：

**使用 PIE 安装 Yaconf**

```shell


pie install laruence/yaconf

   
```

源码托管在 [GitHub](laruence/yaconf) 上。如需从源码编译安装，请在命令行中执行以下命令， 并将路径替换为本地 PHP 安装的实际路径：

**从源码编译 Yaconf**

```shell


/path/to/phpize
./configure --with-php-config=/path/to/php-config
make && make install

   
```

  

## 资源类型
