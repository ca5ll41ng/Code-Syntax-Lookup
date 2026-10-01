---
id: "zh-php-function-yaf-route-simple-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Simple::__construct"
title: "构造一个 Simple 路由"
signature: "public Yaf_Route_Simple::__construct(string $module_name, string $controller_name, string $action_name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-simple.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造一个 Simple 路由

## 说明

```php
public Yaf_Route_Simple::__construct(string $module_name, string $controller_name, string $action_name)
```

构造一个 Simple 路由。Simple 路由会从与三个参数同名的查询变量中读取 module、controller 和 action 名。例如，当构造参数为 `module`、`controller`、`action` 时，该路由会匹配形如 `/?module=foo&controller=bar&action=list` 的请求。

## 参数

- **`$module_name`** — 携带 module 名的查询变量名。
- **`$controller_name`** — 携带 controller 名的查询变量名。
- **`$action_name`** — 携带 action 名的查询变量名。

## 返回值

不返回任何值。

## 示例

**`Yaf_Route_Simple::__construct()` 示例**

```php


<?php
/**
 * 向 Yaf_Router 路由栈添加一个 Simple 路由。
 *
 * 该路由会匹配如下请求：
 * http://yourdomain.com/index.php?m=main&c=product&a=detail
 */
Yaf_Dispatcher::getInstance()->getRouter()->addRoute("simple",
    new Yaf_Route_Simple("m", "c", "a")
);
?>

   
```

以上示例的输出类似于：

```text


/* http://yourdomain.com/index.php?m=main&c=product&a=detail
 * 会路由为以下值：
 */
array(
  "module"     => "main",
  "controller" => "product",
  "action"     => "detail",
)

   
```

## 参见

 `Yaf_Route_Simple::route()` `Yaf_Route_Simple::assemble()`
