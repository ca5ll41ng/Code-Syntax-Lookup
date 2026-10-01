---
id: "zh-php-guide-svm-setup"
language: "php"
lang: "zh"
category: "guide"
name: "svm.setup"
title: "安装/配置"
module: "svm"
source_url: "https://www.php.net/manual/zh/svm.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

Libsvm 本身是必需的，而且可以通过一些包管理获得：基于 RPM 系统的是 libsvm-devel，基于 Debian 系统的是 libsvm-dev。也可以直接从网站上获得。如果从[官网]()安装，则需要执行一些步骤，因为软件包不会自动安装。例如，假设最新版本是 3.1：

```text


wget http://www.csie.ntu.edu.tw/~cjlin/cgi-bin/libsvm.cgi?+http://www.csie.ntu.edu.tw/~cjlin/libsvm+tar.gz
tar xvzf libsvm-3.1.tar.gz
cd libsvm-3.1
make lib
cp libsvm.so.1 /usr/lib
ln -s libsvm.so.1 libsvm.so
ldconfig
ldconfig --print | grep libsvm

  
```

最后一步应该显示 libsvm 已安装。

## 安装

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [svm](svm)
