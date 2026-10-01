---
id: "zh-php-function-yaf-application-getmodules"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::getModules"
title: "获取定义的模块名"
signature: "public array|null Yaf_Application::getModules()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.getmodules.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取定义的模块名

## 说明

```php
public array|null Yaf_Application::getModules()
```

获取在 application.modules 配置项中定义的模块名。如果没有定义，则始终有一个名为 `"Index"` 的模块。

## 参数

此函数没有参数。

## 返回值

模块名数组，如果应用没有正确初始化则返回 `null`。

## 示例

**`Yaf_Application::getModules()` 示例**

```php


<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->getModules());
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => Index
)

   
```
