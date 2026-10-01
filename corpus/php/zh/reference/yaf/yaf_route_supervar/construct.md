---
id: "zh-php-function-yaf-route-supervar-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Supervar::__construct"
title: "构造超级变量路由"
signature: "public Yaf_Route_Supervar::__construct(string $supervar_name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-supervar.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造超级变量路由

## 说明

```php
public Yaf_Route_Supervar::__construct(string $supervar_name)
```

构造一个超级变量路由。超级变量路由期望某个查询变量携带 PATH_INFO 风格的 URI。

## 参数

- **`$supervar_name`** — 携带 URI 的查询变量名。

## 返回值

不返回值。

## 示例

**`Yaf_Route_Supervar::__construct()` 示例**

```php


<?php
/**
 * 向 Yaf_Router 的路由栈中添加一个超级变量路由。
 *
 * 期望 URI 携带在下面指定的查询变量中，
 * 例如：http://yourdomain.com/index.php?_url=/product/detail/id/10
 */
Yaf_Dispatcher::getInstance()->getRouter()->addRoute("supervar",
    new Yaf_Route_Supervar("_url")
);
?>

   
```

以上示例的输出类似于：

```text


/* http://yourdomain.com/index.php?_url=/product/detail/id/10
 * 将路由到以下值：
 */
array(
  "controller" => "product",
  "module"     => "index", //(default)
  "action"     => "detail", //(default)
)

/**
 * 以及请求参数：
 */
array(
  "id" => 10
)

   
```

## 参见

 `Yaf_Route_Supervar::route()` `Yaf_Route_Supervar::assemble()`
