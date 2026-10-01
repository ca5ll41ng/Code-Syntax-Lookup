---
id: "zh-php-syntax-language-types-relative-class-types"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.relative-class-types"
title: "相对类类型"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.relative-class-types.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 相对类类型

这些类型声明只能在类中使用。

### `self`

该值必须是与类型声明所在类相同的类的  实例。

### `parent`

值必须是  使用了类型声明的父级类。

### static

`static` 是仅用于返回值的类型，要求返回的值必须是调用该方法的类的  实例。自 PHP 8.0.0 起可用。
