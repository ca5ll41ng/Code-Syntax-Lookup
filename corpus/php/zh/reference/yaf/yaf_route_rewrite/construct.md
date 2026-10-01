---
id: "zh-php-function-yaf-route-rewrite-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Rewrite::__construct"
title: "Yaf_Route_Rewrite 构造方法"
signature: "public Yaf_Route_Rewrite::__construct(string $match, array $route, [array $verify = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-rewrite.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Rewrite 构造方法

## 说明

```php
public Yaf_Route_Rewrite::__construct(string $match, array $route, [array $verify = ...])
```

## 参数

- **`$match`** — 正则表达式，用于匹配请求 uri，如果没有匹配到，`Yaf_Route_Rewrite` 会返回 `false`。 — 可以使用 :name 样式来命名要匹配的段，并使用 * 匹配剩余的 URL 段。
- **`$route`** — 当匹配模式与请求 uri 匹配时，`Yaf_Route_Rewrite` 将会用它来决定哪个 module/controller/action 作为目标。 — 数组中的 module/controller/action 是可选的，如果没有分配特定的值，将路由到默认值。
- **`$verify`**

## 返回值

## 示例

**`Yaf_Route_Rewrite` 示例**

```php


<?php
   /**
    * Add a rewrite route to Yaf_Router route stack
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Rewrite(
           "/product/:name/:id/*", //match request uri leading "/product"
           array(
               'controller' => "product",  //route to product controller,
           ),
        )
    );
?>

   
```

以上示例的输出类似于：

```text


/* for http://yourdomain.com/product/foo/22/foo/bar
 * route will result in following values:
 */
array(
  "controller" => "product",
  "module"     => "index", //(default)
  "action"     => "index", //(default)
)

/**
 * and request parameters:
 */
array(
  "name" => "foo",
  "id"   => 22,
  "foo"  => bar
)

   
```

**`Yaf_Route_Rewrite` 示例**

```php


    <?php
   /**
    * Add a rewrite route to Yaf_Router route stack by calling addconfig
    */
    $config = array(
        "name" => array(
           "type"  => "rewrite",        //Yaf_Route_Rewrite route
           "match" => "/user-list/:id", //match only /user/list/?/
           "route" => array(
               'controller' => "user",  //route to user controller,
               'action'     => "list",  //route to list action
           ),
        ),
    );
    Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
        new Yaf_Config_Simple($config));
?>

   
```

以上示例的输出类似于：

```text


/* for http://yourdomain.com/user-list/22
 * route will result in following values:
 */
array(
  "controller" => "user",
  "action"     => "list",
  "module"     => "index", //(default)
)

/**
 * and request parameters:
 */
array(
  "id"   => 22,
)

   
```

**`Yaf_Route_Rewrite`（自 2.3.0 起）示例**

```php


    <?php
   /**
    * 添加重写的路由，使用匹配结果作为 m/c/a 名称
    */
    $config = array(
        "name" => array(
           "type"  => "rewrite",        
           "match" => "/user-list/:a/:id", //match only /user-list/*
           "route" => array(
               'controller' => "user",   //route to user controller,
               'action'     => ":a",     // 路由到 :a action
           ),
        ),
    );
    Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
        new Yaf_Config_Simple($config));
?>

   
```

以上示例的输出类似于：

```text


/* for http://yourdomain.com/user-list/list/22
 * route will result in following values:
 */
array(
  "controller" => "user",
  "action"     => "list",
  "module"     => "index", //(default)
)

/**
 * and request parameters:
 */
array(
  "id"   => 22,
)

   
```

## 参见

 `Yaf_Router::addRoute()` `Yaf_Router::addConfig()` `Yaf_Route_Static` `Yaf_Route_Supervar` `Yaf_Route_Simple` `Yaf_Route_Regex` `Yaf_Route_Map`
