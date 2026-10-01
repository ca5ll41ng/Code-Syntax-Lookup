---
id: "zh-php-guide-zip-setup"
language: "php"
lang: "zh"
category: "guide"
name: "zip.setup"
title: "安装/配置"
module: "zip"
source_url: "https://www.php.net/manual/zh/zip.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

{{{ Requirements 

## 需求

此扩展需要 [libzip]()。在 7.3 及其以前的版本，1.1.2 版本都捆绑在 PHP 中。

最低支持版本为 0.11，但强烈建议使用更高版本。

加密支持需要版本 1.2，参阅 `ZipArchive::setEncryptionIndex()` 进度支持需要版本 1.3，参阅 `ZipArchive::registerProgressCallback()` 取消支持（cancel support）需要版本 1.6 版，参阅 `ZipArchive::registerCancelCallback()`

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Resources 

## 资源类型

在 Zip 模块里用到两种资源类型。第一种是 Zip 文档的 Zip 目录，第二种是文档条目的 Zip 条目。

 }}}
