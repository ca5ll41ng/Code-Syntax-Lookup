---
id: "zh-php-function-yaf-view-simple-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::__construct"
title: "Yaf_View_Simple 的构造方法"
signature: "public Yaf_View_Simple::__construct(string $template_dir, array $options = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_View_Simple 的构造方法

## 说明

```php
public Yaf_View_Simple::__construct(string $template_dir, array $options = NULL)
```

`Yaf_View_Simple` 是 Yaf 开箱即用的默认视图引擎，也是唯一的内置引擎。应用启动时，`Yaf_Dispatcher` 会自动创建实例；只有在分发流程之外渲染模板时，才需要手动实例化。

`$template_dir` 参数必须指向一个已存在的、包含视图脚本的目录；它会成为视图的脚本路径，之后可以通过 `Yaf_View_Simple::setScriptPath()` 修改。

## 参数

- **`$template_dir`** — 存放模板脚本的目录。
- **`$options`** — 以数组形式传递的可选视图配置项。该参数为自定义视图引擎实现预留；内置引擎会接受但不会使用它。

## 返回值

没有返回值。

## 示例

**`Yaf_View_Simple::__construct()` 示例**

```php


<?php
define("TEMPLATE_DIRECTORY", APPLICATION_PATH . '/views');
$view = new Yaf_View_Simple(TEMPLATE_DIRECTORY);
$view->assign("name", "world");
echo $view->render("greeting.phtml");
?>

   
```

## 参见

 `Yaf_View_Simple::render()` `Yaf_View_Simple::display()` `Yaf_View_Simple::setScriptPath()`
