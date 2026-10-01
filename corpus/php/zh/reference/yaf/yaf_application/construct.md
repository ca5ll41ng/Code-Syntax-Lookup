---
id: "zh-php-function-yaf-application-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::__construct"
title: "Yaf_Application 的构造函数"
signature: "public Yaf_Application::__construct(string|array $config, string|null $environ = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Application 的构造函数

## 说明

```php
public Yaf_Application::__construct(string|array $config, string|null $environ = null)
```

实例化一个 `Yaf_Application`。构造函数同时会初始化 单例应用、`Yaf_Loader` 和 `Yaf_Dispatcher`，因此在使用它们之前必须先调用构造函数。

## 参数

- **`$config`** — INI 配置文件的路径，或者配置数组。 — 如果是 INI 配置文件，其中应该有一个以 yaf.environ 定义的名称命名的配置节， 默认是 `"product"`。 — 应用程序配置项（及其默认值）在 应用程序配置中有说明： — **INI 配置文件示例** ```ini [product] ;这一项必须始终定义，且没有默认值 application.directory=APPLICATION_PATH ;以下配置项有默认值，可能不需要定义 application.library = APPLICATION_PATH . "/library" application.dispatcher.throwException=1 application.dispatcher.catchException=1 application.baseUri="" ;php 脚本的扩展名 application.ext=php ;视图模板的扩展名 application.view.ext=phtml application.dispatcher.defaultModule=Index application.dispatcher.defaultController=Index application.dispatcher.defaultAction=index ;定义的模块 application.modules=Index ```
- **`$environ`** — 指定哪个配置节将作为最终配置被加载。如果未提供， 则使用 yaf.environ 指令的值。

## 错误／异常

如果 `Yaf_Application` 已经被实例化，或者配置无效， 将抛出 Yaf_Exception_StartupError 异常 （当 `Yaf_Dispatcher::throwException()` 关闭时， 则触发 `YAF_ERR_STARTUP_FAILED` 错误）。

## 示例

**`Yaf_Application::__construct()` 示例**

```php


<?php
defined('APPLICATION_PATH')                  // APPLICATION_PATH 将在 ini 配置文件中使用
    || define('APPLICATION_PATH', __DIR__);

$application = new Yaf_Application(APPLICATION_PATH.'/conf/application.ini');
$application->bootstrap()->run();
?>

   
```

**`Yaf_Application::__construct()` 示例**

```php


<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
$application->bootstrap()->run();
?>

   
```

## 参见

`Yaf_Config_Ini` 应用程序配置
