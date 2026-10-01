---
id: "zh-php-function-yaf-request-abstract-setcontrollername"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setControllerName"
title: "设置控制器名"
signature: "public Yaf_Request_Abstract|null Yaf_Request_Abstract::setControllerName(string $controller, bool $format_name = true)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setcontrollername.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置控制器名

## 说明

```php
public Yaf_Request_Abstract|null Yaf_Request_Abstract::setControllerName(string $controller, bool $format_name = true)
```

设置请求对象的控制器名，通常由自定义路由器用于设置路由结果的控制器名。

## 参数

- **`$controller`** — `string`，控制器名，应该是骆驼（camel）风格，比如 "Index" 或 "Foo_Bar"
- **`$format_name`** — 该参数自 Yaf 3.2.0 引入，默认情况下 Yaf 会将名称格式化为骆驼风格， 如果设置为 `false`，Yaf 将直接使用原始名称。

## 返回值

成功时返回请求对象自身，失败时返回 `null`。

## 示例

**`Yaf_Request_Abstract::setControllerName()` 示例**

```php


<?php
class RestRouter extends Yaf_Route_Interface
{
    public function route(Yaf_Request_Abstract $request)
    {
        if (0 === strpos($request->getRequestUri(), "/api")) {
            // 默认情况下名称会被格式化为骆驼风格，
            // 因此 "order_item" 会变成 "Order_Item"
            $request->setControllerName("order_item")
                    ->setActionName("list");
            return true;
        }

        return false;
    }

    public function assemble(array $info, array $query = null) {}
}
?>
   
```

## 参见

 `Yaf_Request_Abstract::setModuleName()` `Yaf_Request_Abstract::setActionName()` `Yaf_Request_Abstract::getControllerName()`
