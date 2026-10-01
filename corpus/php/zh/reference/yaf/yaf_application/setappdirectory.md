---
id: "zh-php-function-yaf-application-setappdirectory"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::setAppDirectory"
title: "改变应用目录"
signature: "public Yaf_Application|null|false Yaf_Application::setAppDirectory(string $directory)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.setappdirectory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 改变应用目录

## 说明

```php
public Yaf_Application|null|false Yaf_Application::setAppDirectory(string $directory)
```

改变应用目录，Yaf 在该目录下查找控制器、视图和模块。 新目录必须是绝对路径。

## 参数

- **`$directory`** — 新应用目录的绝对路径。

## 返回值

成功时返回 `Yaf_Application` 对象本身， 如果 `$directory` 为空或不是绝对路径则返回 `false`， 如果应用没有正确初始化则返回 `null`。

## 示例

**`Yaf_Application::setAppDirectory()` 示例**

```php


<?php
$app = Yaf_Application::app();

/* 成功时返回应用本身，可以链式调用 */
var_dump($app->setAppDirectory("/srv/legacy/mvc/app"));
var_dump($app->getAppDirectory());

/* 空路径或相对路径会被拒绝 */
var_dump($app->setAppDirectory(""));
var_dump($app->setAppDirectory("relative/path"));
?>

   
```

以上示例的输出类似于：

```text


object(Yaf_Application)#1 (0) {
}
string(20) "/srv/legacy/mvc/app"
bool(false)
bool(false)

   
```

## 参见

`Yaf_Application::getAppDirectory()`
