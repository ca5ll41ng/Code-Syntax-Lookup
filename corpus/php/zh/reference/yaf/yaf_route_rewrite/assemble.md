---
id: "zh-php-function-yaf-route-rewrite-assemble"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Rewrite::assemble"
title: "组合 url"
signature: "public string Yaf_Route_Rewrite::assemble(array $info, [array $query = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-rewrite.assemble.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 组合 url

## 说明

```php
public string Yaf_Route_Rewrite::assemble(array $info, [array $query = ...])
```

根据指定参数和自定义参数将 rewrite 这个 route 组合成一个 url

## 参数

- **`$info`** — 需要传入一个数组，数组中每个 key 必须和初始化 rewrite route 时 $match 参数中的带冒号的参数名一致
- **`$query`** — 用户自定义的 query 字符串，将根据此路由规则拼接在 url 中

## 返回值

返回 `string`。

## 示例

**`Yaf_Route_Rewrite::assemble()` 示例**

```php


router = new Yaf_Router();

$route  = new Yaf_Route_Rewrite(
                "/product/:name/:id/*",
                array(
                        'controller' => "product",
                ),
                array()
);

$router->addRoute("rewrite", $route);

var_dump($router->getRoute('rewrite')->assemble(
                        array(
                                ':name' => 'foo',
                                ':id' => 'bar',
                                ':tmpkey1' => 'tmpval1'
                        ),
                        array(
                                'tkey1' => 'tval1',
                                'tkey2' => 'tval2'
                             )
                        )
);


   
```

以上示例的输出类似于：

```text


string(57) "/product/foo/bar/tmpkey1/tmpval1/?tkey1=tval1&tkey2=tval2"

   
```
