---
id: "zh-php-function-yaf-route-regex-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Regex::__construct"
title: "Yaf_Route_Regex 构造方法"
signature: "public Yaf_Route_Regex::__construct(string $match, array $route, [array $map = ...], [array $verify = ...], [string $reverse = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-regex.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Regex 构造方法

## 说明

```php
public Yaf_Route_Regex::__construct(string $match, array $route, [array $map = ...], [array $verify = ...], [string $reverse = ...])
```

## 参数

- **`$match`** — 完整的正则表达式，用来匹配请求的 uri，如果不能匹配，`Yaf_Route_Regex` 将返回 `false`。
- **`$route`** — 当路由正则匹配成功请求 uri 时，`Yaf_Route_Regex` 将会用它来决定哪一个 m/c/a 被路由。 — 数组中的 m/c/a 是可选的，如果没有分配特定的值，将路由到默认值。
- **`$map`** — 数组，用于为匹配结果中捕获的名称分配名称。
- **`$verify`**
- **`$reverse`** — 字符串，用于组合 url，参阅 `Yaf_Route_Regex::assemble()`。 > 2.3.0 起引入该参数

## 返回值

## 示例

**`Yaf_Route_Regex` 示例**

```php


<?php
   /**
    * Add a regex route to Yaf_Router route stack
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Regex(
           "#^/product/([^/]+)/([^/])+#", //match request uri leading "/product"
           array(
               'controller' => "product",  //route to product controller,
           ),
           array(
              1 => "name",   // now you can call $request->getParam("name")
              2 => "id",     // to get the first captrue in the match pattern.
           )
        )
    );
?>

   
```

**`Yaf_Route_Regex`（从 2.3.0 起）示例**

```php


<?php
   /**
    * 使用匹配结果作为 MVC 名称
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Regex(
           "#^/product/([^/]+)/([^/])+#i", //match request uri leading "/product"
           array(
              'controller' => ":name", // 路由到 :name，匹配结果中的 $1 作为控制器名称
           ),
           array(
              1 => "name",   // now you can call $request->getParam("name")
              2 => "id",     // to get the first captrue in the match pattern.
           )
        )
    );
?>

   
```

**`Yaf_Route_Regex` 和命名捕获组（从 2.3.0 起）示例**

```php


<?php
   /**
    * Use match result as MVC name
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Regex(
           "#^/product/(?<name>[^/]+)/([^/])+#i", //match request uri leading "/product"
           array(
           'controller' => ":name", // route to :name,
                                    // which is named capture group 'name' in the match result as controller name
           ),
           array(
              2 => "id",     // to get the first captrue in the match pattern.
           )
        )
    );
?>

   
```

**`Yaf_Route_Regex` 示例**

```php


<?php
   /**
    * Add a regex route to Yaf_Router route stack by calling addconfig
    */
    $config = array(
        "name" => array(
           "type"  => "regex",          //Yaf_Route_Regex route
           "match" => "#(.*)#",         //match arbitrary request uri
           "route" => array(
               'controller' => "product",  //route to product controller,
               'action'     => "dummy",    //route to dummy action
           ),
           "map" => array(
              1 => "uri",   // now you can call $request->getParam("uri")
           ),
        ),
    );
    Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
        new Yaf_Config_Simple($config));
?>

   
```

## 参见

 `Yaf_Router::addRoute()` `Yaf_Router::addConfig()` `Yaf_Route_Static` `Yaf_Route_Supervar` `Yaf_Route_Simple` `Yaf_Route_Rewrite` `Yaf_Route_Map`
