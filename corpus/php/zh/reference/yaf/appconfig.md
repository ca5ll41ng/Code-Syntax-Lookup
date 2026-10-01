---
id: "zh-php-guide-yaf-appconfig"
language: "php"
lang: "zh"
category: "guide"
name: "yaf.appconfig"
title: "应用程序配置"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf.appconfig.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 应用程序配置

应该为 `Yaf_Application::__construct()` 提供配置数组或者 ini 配置文件（参阅 `Yaf_Config_Ini`）路径。

Yaf 将会自动合并应用程序配置和用户配置。应用程序配置有前缀“yaf.”或“application.”。如果“yaf.”和“application.”同时存在，将会优先接受“application.”。

**PHP 数组示例**

```php


<?php

$configs = array(
    "application" => array(
        "directory" => dirname(__FILE__),
        "dispatcher" => array(
            "catchException" => 0,
        ),
        "view" => array(
            "ext" => "phtml",
        ),
    ),
);

$app = new Yaf_Application($configs);

?>

   
```

**ini 文件示例**

```ini


[yaf]
yaf.directory = APPLICATION_PATH "/application"
yaf.dispatcher.catchException = 0

[product : yaf]
; user configuration list here

   
```

> 当配置变得庞大时，每次请求都会重新解析 ini 文件的 `Yaf_Config_Ini` 会带来明显的开销。 [Yaconf](yaconf) 只在 PHP 启动时 把某个目录下的所有 ini 文件解析一次，并把解析结果保存在共享内存中。 将 `yaconf.directory` 设置为存放配置的目录，然后把返回的数组传给 `Yaf_Application::__construct()`：
>
> ```php
>
>
> <?php
> // in php.ini: yaconf.directory = /path/to/app/conf
> $app = new Yaf_Application(Yaconf::get("application"));
> ?>
>
>    
> ```
>
> 包含 `[section]` 标头的文件会按分节暴露为多个条目（继承关系， 如 `[product : yaf]`，会被自动解析）。可以用点号获取单个分节， `Yaconf::get("application.product")`，然后改传该数组； 它的键恰好是该分节合并后的各个条目。

| 名字 | 默认 | 更新日志 |
| --- | --- | --- |
| application.directory |  |  |
| application.ext | "php" |  |
| application.view.ext | "phtml" |  |
| application.modules | "index" |  |
| application.library | application.directory . "/library" |  |
| application.library.directory | application.directory . "/library" |  |
| application.library.namespace | "" |  |
| application.bootstrap | application.directory . "/Bootstrap" . application.ext |  |
| application.baseUri | "" |  |
| application.dispatcher.defaultRoute |  |  |
| application.dispatcher.throwException | 1 |  |
| application.dispatcher.catchException | 0 |  |
| application.dispatcher.defaultModule | "index" |  |
| application.dispatcher.defaultController | "index" |  |
| application.dispatcher.defaultAction | "index" |  |
| application.system |  |  |

这是配置指令的简短说明。

- **`$application.directory` `string`** — 应用程序的目录，文件夹包含“controllers”、“views”、“models”、“plugins”。 — > 此为唯一没有默认值的配置条目，应该始终手动定义它。
- **`$application.ext` `string`** — PHP 脚本的扩展名，类的自动加载需要（`Yaf_Loader`）。
- **`$application.view.ext` `string`** — 视图模板脚本的文件扩展名。
- **`$application.modules` `string`** — 注册的模块列表，以逗号分隔，用于路由处理，特别是当PATH_INFO超过三段的时候， — Yaf需要用它来判断第一段是否是一个模块。
- **`$application.library` `string`** — 本地类库的目录，参见 `Yaf_Loader` 和 yaf.library。
  > Yaf 2.1.6 以后，该配置项可以是数组。类库的路径将尝试使用 application.library.directory 中设置的条目。


- **`$application.library.directory` `string`** — application.library 的别名。 自 Yaf 2.1.6 引入
- **`$application.library.namespace` `string`** — 逗号分隔的本地类库命名空间前缀。 — Yaf2.1.6以后加入
- **`$application.bootstrap` `string`** — Bootstrap类脚本文件的绝对路径。
- **`$application.baseUri` `string`** — 路由处理中需要忽略的路径前缀。举个例子，请求"/prefix/controller/action"时。如果你将application.baseUri设置为"/prefix"，那么只有"/controller/action"会被当做路由路径。 — 通常不需要设置此值。
- **`$application.dispatcher.throwException` `bool`** — 如果设置为 On，Yaf 会在发生错误的地方抛出异常。参见 `Yaf_Dispatcher::throwException()`。
- **`$application.dispatcher.catchException` `bool`** — 如果设置为 On，当在存在未处理的异常时，Yaf 将转发到 Error controller/Action。参见 `Yaf_Dispatcher::catchException()`。
- **`$application.dispatcher.defaultRoute` `string`** — 默认路由，如果未指定，默认使用静态路由。参见 `Yaf_Router::addRoute()`。
- **`$application.dispatcher.defaultModule` `string`** — 默认模块名，参见 `Yaf_Dispatcher::setDefaultModule()`。
- **`$application.dispatcher.defaultController` `string`** — 默认控制器名，参见 `Yaf_Dispatcher::setDefaultController()`。
- **`$application.dispatcher.defaultAction` `string`** — 默认动作名，参见 `Yaf_Dispatcher::setDefaultAction()`。
- **`$application.system` `string`** — 在application.ini中设置Yaf运行时配置，如： application.system.lowcase_path > 仅有 `INI_ALL` 配置项能这样设置
