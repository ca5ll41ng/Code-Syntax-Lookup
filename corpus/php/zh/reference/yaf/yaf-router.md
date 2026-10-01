---
id: "zh-php-guide-class-yaf-router"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-router"
title: "Yaf_Router 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-router.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Router 类

Yaf_Router

   简介  `Yaf_Router` 是标准的框架路由。路由是获取 URI 端点（位于基本 URI 之后的 URI 部分：参考 `Yaf_Request_Abstract::setBaseUri()`）并将其分解为参数得到哪个 module、controller 和 action 需要接收请求。module、controller、action 和其它参数打包到 `Yaf_Request_Abstract` 对象中，然后由 `Yaf_Dispatcher` 处理。路由只发生一次：最初接到请求和在第一个 controller 分发之前。 `Yaf_Router` 是设计来允许使用纯 PHP 结构的类似 mod_rewrite 的功能。它非常松散的基于 Ruby on Rails 的路由，并且不需要提前知悉 webserver URL 重写的相关知识。它设计为跟单个 Apache mod_rewrite（或其中之一个） 规则一起使用： 
**Apache 重写规则**

```conf

RewriteEngine on
RewriteRule !\.(js|ico|gif|jpg|png|css|html)$ index.php

   
```

 或者（首选）： 
**Apache 重写规则**

```conf

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]
RewriteRule ^.*$ index.php [NC,L]

   
```

 如果使用 Lighttpd，以下重写规则有效： 
**Lighttpd 重写规则**

```conf

url.rewrite-once = (
  ".*\?(.*)$" => "/index.php?$1",
  ".*\.(js|ico|gif|jpg|png|css|html)$" => "$0",
  "" => "/index.php"
)

   
```

 如果使用 Nginx，以下重写规则有效： 
**Nginx 重写规则**

```conf

server {
  listen ****;
  server_name  yourdomain.com;
  root   document_root;
  index  index.php index.html;

  if (!-e $request_filename) {
    rewrite ^/(.*)  /index.php/$1 last;
  }
}

   
```

      默认路由  `Yaf_Router` 预设了默认路由 `Yaf_Route_Static`，将以 controller/action 的形式匹配 URI。此外，module 名可以被指定为第一个路径元素，允许 URI 设置为 module/controller/action 形式的 URI。最后，它也会匹配默认追加到 URI 中所有附加参数——controller/action/var1/value1/var2/value2。 
> Module 名必须在配置中定义，就 application.module="Index,Foo,Bar" 而言，在这种情况下，仅 index、foo 和 bar 可以认做 module 名。如果没有配置，那么 Yaf 使用默认 module 名“Index”。

    如何匹配这些路由的一些例子： 
**`Yaf_Route_Static`（默认路由）示例**

```conf

// Assuming the following configure:
$conf = array(
   "application" => array(
      "modules" => "Index,Blog",
   ),
);

Controller only:
http://example/news
    controller == news
Action only(when defined yaf.action_prefer=1 in php.ini)
    action  == news
 
Invalid module maps to controller name:
http://example/foo
    controller == foo
 
Module + controller:
http://example/blog/archive
    module     == blog
    controller == archive
 
Module + controller + action:
http://example/blog/archive/list
    module     == blog
    controller == archive
    action     == list
 
Module + controller + action + params:
http://example/blog/archive/list/sort/alpha/date/desc
    module     == blog
    controller == archive
    action     == list
    sort       == alpha
    date       == desc

   
```

     类摘要   `Yaf_Router`    `Yaf_Router`    属性  `protected` `_routes`   `protected` `_current`  方法        属性 
- **`_routes`** — 已注册路由栈
- **`_current`** — 在路由阶段后，这用于指示当前请求的路由名称。 可以通过 `Yaf_Router::getCurrentRoute()` 获取此名称。
