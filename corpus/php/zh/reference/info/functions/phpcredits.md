---
id: "zh-php-function-function-phpcredits"
language: "php"
lang: "zh"
category: "function"
name: "phpcredits"
title: "打印 PHP 贡献者名单"
signature: "true phpcredits(int $flags = CREDITS_ALL)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.phpcredits.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打印 PHP 贡献者名单

## 说明

```php
true phpcredits(int $flags = CREDITS_ALL)
```

这个函数打印出了 PHP 开发者、模块等贡献者名单。 它生成了合适、可嵌入信息到页面中的 HTML 代码。

## 参数

- **`$flags`** — 生成自定义的贡献者页面，你也许想要使用 `$flags` 参数。 — | 名称 | 描述 | | --- | --- | | CREDITS_ALL | 所有贡献者，等同于使用： `CREDITS_DOCS` + `CREDITS_GENERAL` + `CREDITS_GROUP` + `CREDITS_MODULES` + `CREDITS_FULLPAGE`。 它以适当的标签产生了完整独立的 HTML 页面。 | | CREDITS_DOCS | 文档组贡献名单 | | CREDITS_FULLPAGE | 常用于和其他标志进行组合。 表示需要打印包含其他标志表示信息的独立 HTML 页面。 | | CREDITS_GENERAL | 普遍名单：语言设计与理念、PHP作者以及 SAPI 模块。 | | CREDITS_GROUP | 核心开发者名单 | | CREDITS_MODULES | PHP 扩展模块以及它们的作者的清单 | | CREDITS_SAPI | PHP 的服务器 API 模块以及他们的作者的清单 |

## 返回值

总是返回 `true`。

## 示例

**打印普遍名单**

```php


<?php
phpcredits(CREDITS_GENERAL);
?>

    
```

**打印核心开发者和文档组**

```php


<?php
phpcredits(CREDITS_GROUP | CREDITS_DOCS | CREDITS_FULLPAGE);
?>

    
```

**打印所有贡献者**

```php


<html>
 <head>
  <title>My credits page</title>
 </head>
 <body>
<?php
// 一些你自己的代码
phpcredits(CREDITS_ALL - CREDITS_FULLPAGE);
// 一些其他的代码
?>
 </body>
</html>

    
```

## 注释

> 在 CLI 模式下 `phpcredits()` 输出明文而不是 HTML。

## 参见

`phpversion()` `phpinfo()`
