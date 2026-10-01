---
id: "zh-php-guide-yaf-setup"
language: "php"
lang: "zh"
category: "guide"
name: "yaf.setup"
title: "安装/配置"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

{{{ Installation 

## 安装

此  扩展未与 PHP 捆绑。

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [yaf](yaf).

Yaf 没有外部依赖。使用以下命令安装：

```text


$ pecl install yaf

   
```

从 3.3.8 起，Yaf 也可以使用扩展的 PHP 安装器  安装：

```text


$ pie install laruence/yaf

   
```

源码托管在 [GitHub](laruence/yaf) 上。 要从源码构建扩展：

```text


$ git clone https://github.com/laruence/yaf.git
$ cd yaf
$ phpize
$ ./configure --enable-yaf
$ make && make install

   
```

然后在 `php.ini` 中添加下面一行来加载它：

```text


extension=yaf.so

   
```

此扩展在 Windows 平台的二进制扩展 (DLL 文件) PECL 可以在 PECL 官方网站上下载。

 }}} 

 {{{ Configuration 

  

 }}}
