---
id: "zh-php-guide-class-yaf-action-abstract"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-action-abstract"
title: "Yaf_Action_Abstract 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-action-abstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Action_Abstract 类

Yaf_Action_Abstract

   简介  在 Yaf 中，动作（action）可以定义在一个单独的文件里（参见 `Yaf_Controller_Abstract`）。也就是说， 一个动作方法也可以是一个 `Yaf_Action_Abstract` 类。    由于必须有一个可以被 Yaf 调用的入口点， 所以在自定义的动作类中必须实现抽象方法 `Yaf_Action_Abstract::execute()`。      类摘要   `Yaf_Action_Abstract`    `Yaf_Action_Abstract`   `extends` `Yaf_Controller_Abstract`    属性  `protected` `_controller`  方法  继承的方法       属性 
- **`_controller`** — 拥有此动作的控制器实例，可通过 `Yaf_Action_Abstract::getController()` 获取。
