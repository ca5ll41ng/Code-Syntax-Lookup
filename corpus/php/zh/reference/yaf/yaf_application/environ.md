---
id: "zh-php-function-yaf-application-environ"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::environ"
title: "检索环境名"
signature: "public string|null Yaf_Application::environ()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.environ.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索环境名

## 说明

```php
public string|null Yaf_Application::environ()
```

返回应用的环境名，它由 yaf.environ 指令（或构造函数的 `$environ` 参数）定义，默认值为 `"product"`。

## 参数

此函数没有参数。

## 返回值

应用的环境名。

## 示例

**`Yaf_Application::environ()` 示例**

```php


<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->environ());
?>

   
```

以上示例的输出类似于：

```text


product

   
```
