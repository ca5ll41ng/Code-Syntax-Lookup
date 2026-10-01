---
id: "zh-php-function-yaf-route-map-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Map::__construct"
title: "构造一个 Map 路由"
signature: "public Yaf_Route_Map::__construct(bool $controller_prefer = false, string $delimiter = '')"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-map.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造一个 Map 路由

## 说明

```php
public Yaf_Route_Map::__construct(bool $controller_prefer = false, string $delimiter = '')
```

构造一个 Map 路由。Map 路由将整个 URI 映射为一个 controller 名或 action 名。

## 参数

- **`$controller_prefer`** — 是否将 URI 映射为 controller 名。若为 `false`，则 URI 会被映射为 action 名。
- **`$delimiter`** — 用于在 URI 中分隔映射名称与请求参数的分隔符。若它作为以斜杠开头的路径段出现，则其后的所有内容都会被解析为请求参数，而不再属于映射名称。若为空，路由时不会进行这样的拆分。

## 返回值

不返回任何值。

## 示例

**`Yaf_Route_Map` 示例**

```php


<?php
/**
 * 向 Yaf_Router 路由栈添加一个 Map 路由
 */
Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
    new Yaf_Route_Map());
?>

   
```

以上示例的输出类似于：

```text


/* 对于 http://yourdomain.com/product/foo/bar
 * 请求将会携带以下值：
 */
array(
  "action" => "product_foo_bar",
)

   
```

**`Yaf_Route_Map` 示例**

```php


<?php
/**
 * 向 Yaf_Router 路由栈添加一个带分隔符的 Map 路由
 */
Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
    new Yaf_Route_Map(true, "_"));
?>

   
```

以上示例的输出类似于：

```text


/* 对于 http://yourdomain.com/user/list/_/foo/22
 * 请求将会携带以下值：
 */
array(
    "controller" => "User_List",
)

/**
 * 以及请求参数：
 */
array(
  "foo" => "22",
)

   
```

**`Yaf_Route_Map` 示例**

```php


<?php
/**
 * 通过调用 addConfig 向路由栈添加一个 Map 路由
 */
$config = array(
    "name" => array(
       "type"             => "map", // Yaf_Route_Map 路由
       "controllerPrefer" => FALSE,
       "delimiter"        => "#!",
    ),
);
Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
    new Yaf_Config_Simple($config));
?>

   
```

## 参见

 `Yaf_Route_Map::route()` `Yaf_Route_Map::assemble()`
