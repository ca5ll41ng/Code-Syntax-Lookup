---
id: "zh-php-guide-yaf-tutorials"
language: "php"
lang: "zh"
category: "guide"
name: "yaf.tutorials"
title: "示例"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf.tutorials.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 快速入门

**一个典型的应用目录结构**

```text


- .htaccess           // 重写规则
+ public/
  | - index.php       // 应用入口
  | + css/
  | + js/
  | + img/
+ conf/
  | - application.ini // 应用配置
- application/
  - Bootstrap.php     // 引导
  + controllers/
     - Index.php      // 默认控制器
  + views/
     |+ index/
        - index.phtml // 默认动作的视图模板
  + library/          // 类库
  + models/           // 模型
  + plugins/          // 插件

  
```

将 web 服务器的 `DocumentRoot` 设置为 `public` 目录，这样从 web 就只能访问公开资源。

**多模块应用的目录结构**

```text


+ public/
+ conf/
+ application/
  + modules/
    + Index/       // 默认模块
      + controllers/
      + views/
    + Admin/       // 另一个模块
      + controllers/
      + views/
  + library/
  + models/
  + plugins/
  - Bootstrap.php

  
```

在多模块应用中，每个模块在 `application/modules/<ModuleName>/` 下都有自己的 `controllers` 和 `views` 目录。 已注册的模块在 application.modules 中声明。

**入口**

public 目录下的 `index.php` 是整个应用的唯一入口， 应该把所有请求都重写到它（在 Apache + mod_php 下可以使用 `.htaccess`，或者你的 web 服务器中的等效配置，见下文）。

```php


<?php
define("APPLICATION_PATH",  dirname(dirname(__FILE__)));

$app  = new Yaf_Application(APPLICATION_PATH . "/conf/application.ini");
$app->bootstrap() //call bootstrap methods defined in Bootstrap.php
 ->run();
?>

   
```

**重写规则**

```text


#for apache (.htaccess)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule .* index.php

#for nginx
server {
  listen 80;
  server_name domain.com;
  root   document_root;
  index  index.php index.html index.htm;

  location / {
    try_files $uri $uri/ /index.php?$args;
  }
}

#for lighttpd
$HTTP["host"] =~ "(www.)?domain.com$" {
  url.rewrite = (
     "^/(.+)/?$"  => "/index.php/$1",
  )
}

  
```

**引导**

`Bootstrap` 类中所有名称以 `_init` 开头的方法都会被 `Yaf_Application::bootstrap()` 按定义顺序自动调用。每个这样的方法都会收到 `Yaf_Dispatcher` 实例作为参数。 名称为其他名称的方法不会被自动调用。

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initConfig(Yaf_Dispatcher $dispatcher)
    {
        // called first
    }

    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        // called second
    }

    public function _initRoute(Yaf_Dispatcher $dispatcher)
    {
        // called third
    }
}
?>

  
```

**应用配置**

`application.ini` 是应用的配置文件。 其中可以使用 `index.php` 中定义的常量， 并且各个分节之间可以相互继承。

```ini


[yaf]
;APPLICATION_PATH is the constant defined in index.php
application.directory=APPLICATION_PATH "/application/"

;product section inherit from yaf section
[product:yaf]
foo=bar

   
```

**使用 PHP 数组作为应用配置**

除了 INI 配置文件，也可以把一个普通的 PHP 数组作为配置传递给 `Yaf_Application::__construct()`。

```php


<?php
$config = array(
    "application" => array(
        "directory" => APPLICATION_PATH . "/application/",
    ),
);

$app = new Yaf_Application($config);
?>

   
```

**默认控制器**

在 Yaf 中，默认控制器名为 `IndexController`：

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    // default action name
    public function indexAction()
    {
        $this->getView()->content = "Hello World";
    }
}
?>

   
```

**默认视图模板**

默认控制器/动作的视图脚本是 `application/views/index/index.phtml`。Yaf 提供了一个 名为 `Yaf_View_Simple` 的小型视图引擎， 它的模板是普通的 PHP 脚本。

```php


<html>
 <head>
   <title>Hello World</title>
 </head>
 <body>
   <?php echo $content;?>
 </body>
</html>

   
```

**运行应用**

将浏览器指向已配置的域名 （例如 `http://www.example.com`），响应将如下所示：

以上示例的输出类似于：

```text


<html>
 <head>
   <title>Hello World</title>
 </head>
 <body>
   hello world
 </body>
</html>

  
```

> 上面的最小示例也可以使用随 [Yaf 源码仓库](laruence/yaf/tree/master/tools/cg) 一起发布的 Yaf 代码生成器 （`tools/cg/yaf_cg`）生成：
>
> ```text
>
>
> $ cd tools/cg
> $ ./yaf_cg -d output_directory [-a application_name] [--namespace]
>
>    
> ```
>
> `yaf_cg` 会生成比本教程所示更完整、带注释的骨架： 一个带重写规则的 `public/` 入口、配置了插件和自定义路由的 Bootstrap、示例模型、错误控制器以及视图模板。它是开发实际应用的 一个良好起点。

## 自定义路由

**自定义路由**

除了默认的 `Yaf_Route_Static` 路由， 还可以使用 `Yaf_Router::addRoute()` 在 `Yaf_Router` 路由栈上注册自定义路由， 通常在 Bootstrap 的 `_initRoute` 方法中进行。 也可以在配置文件中声明路由，并使用 `Yaf_Router::addConfig()` 加载。

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initRoute(Yaf_Dispatcher $dispatcher)
    {
        $router = $dispatcher->getRouter();

        // /user/123 -> controller=user, action=index, id=123
        $router->addRoute("user", new Yaf_Route_Rewrite(
            "/user/:id",
            array("controller" => "user", "action" => "index")
        ));
    }
}
?>

  
```

## 插件

**插件**

插件通过继承 `Yaf_Plugin_Abstract` 并重写其六个 钩子方法中的一个或多个来挂入分发循环，然后通常在 Bootstrap 中使用 `Yaf_Dispatcher::registerPlugin()` 注册到分发器上：

```php


<?php
class UserPlugin extends Yaf_Plugin_Abstract
{
    public function routerStartup(
        Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        // before routing: inspect or rewrite the raw request URI
    }

    public function routerShutdown(
        Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        // after routing: module/controller/action are known, good for per-route access control
    }

    public function dispatchLoopStartup(
        Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        // before the dispatch loop: one-time setup shared by all dispatches
    }

    public function preDispatch(
        Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        // before each dispatch: filter parameters or redirect before the action runs
    }

    public function postDispatch(
        Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        // after each dispatch: decorate the response or the rendered view
    }

    public function dispatchLoopShutdown(
        Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        // after the dispatch loop: final cleanup, logging or flushing
    }
}

class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->registerPlugin(new UserPlugin());
    }
}
?>

  
```
