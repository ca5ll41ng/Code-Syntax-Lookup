---
id: "zh-php-function-yaf-dispatcher-initview"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::initView"
title: "初始化视图并返回它"
signature: "public Yaf_View_Interface|null|false Yaf_Dispatcher::initView(string $templates_dir, array|null $options = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.initview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化视图并返回它

## 说明

```php
public Yaf_View_Interface|null|false Yaf_Dispatcher::initView(string $templates_dir, array|null $options = null)
```

使用给定的模板目录初始化并返回一个绑定到分发器的 `Yaf_View_Simple` 实例。

## 参数

- **`$templates_dir`** — 存放视图模板的目录。
- **`$options`** — 传递给视图引擎的选项，参见 `Yaf_View_Simple::__construct()`。

## 返回值

成功时返回 `Yaf_View_Interface` 实例，失败时返回 `false` / `null`。

## 示例

**`Yaf_Dispatcher::initView()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

$view = Yaf_Dispatcher::getInstance()->initView(
    dirname(__FILE__) . "/application/views",
    array("tpl_suffix" => ".html")
);

$view->assign("title", "Home");
?>

   
```

## 参见

`Yaf_Dispatcher::setView()` `Yaf_View_Simple`
