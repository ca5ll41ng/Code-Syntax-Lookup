---
id: "zh-php-syntax-class-returntypewillchange"
language: "php"
lang: "zh"
category: "syntax"
name: "class.returntypewillchange"
title: "ReturnTypeWillChange 注解"
module: "language"
source_url: "https://www.php.net/manual/zh/class.returntypewillchange.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ReturnTypeWillChange 注解

ReturnTypeWillChange

  简介  从 PHP 8.1.0 起，内部类方法开始进入向返回类型声明过渡的暂定阶段。    现在，大多数非 final 内部方法要求重写方法声明兼容的返回类型，否则会在继承验证期间发出弃用通知， 警告该签名违反协变规则。    在未来的 PHP 版本中，方法签名检查将变得严格，不匹配会导致致命错误。    如果由于 PHP 跨版本兼容性问题而无法为重写方法声明返回类型，或者重写方法声明了不兼容的返回类型， 可以添加 #[\ReturnTypeWillChange] 注解来消除弃用通知。   
> 重写用户定义类中的方法时，会严格检查返回类型。即使重写方法使用了该注解， 返回类型不匹配仍会导致致命错误。
>
> `ReturnTypeWillChange` 注解*仅*在暂定返回类型阶段抑制弃用警告。 强制执行严格类型检查后，该注解将不再生效，内部类的重写方法签名不匹配会导致致命错误。

   类摘要   `#[\Attribute]` `final` `ReturnTypeWillChange`  方法     参见 注解概览
