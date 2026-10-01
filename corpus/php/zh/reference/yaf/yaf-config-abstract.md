---
id: "zh-php-guide-class-yaf-config-abstract"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-config-abstract"
title: "Yaf_Config_Abstract 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-config-abstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Config_Abstract 类

Yaf_Config_Abstract

   简介  `Yaf_Config_Abstract` 是配置适配器的基类。 它提供了一种统一的方式来访问一组配置值， 支持嵌套属性语法（`$config->section->key`）、 数组访问和迭代。具体实现有 `Yaf_Config_Ini`（只读、支持节继承的 INI 文件） 和 `Yaf_Config_Simple`（PHP 数组、可修改）。      类摘要   `Yaf_Config_Abstract`    `abstract` `Yaf_Config_Abstract`    属性  `protected` `_config`   `protected` `_readonly`  方法       属性 
- **`_config`**
- **`_readonly`**
