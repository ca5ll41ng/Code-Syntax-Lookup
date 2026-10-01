---
id: "zh-php-guide-taint-setup"
language: "php"
lang: "zh"
category: "guide"
name: "taint.setup"
title: "安装/配置"
module: "taint"
source_url: "https://www.php.net/manual/zh/taint.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

Taint 3.x 需要 PHP 8.0 及以上版本。PHP 7.x 请使用 taint 2.1.x 系列，PHP 5.x 请使用 taint 1.x 系列。

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

  

 }}} 

## 资源类型

Taint 不定义任何资源类型。污点标记本身存储于内部的 `zend_string` 结构中，而不是某种用户可见的资源。
