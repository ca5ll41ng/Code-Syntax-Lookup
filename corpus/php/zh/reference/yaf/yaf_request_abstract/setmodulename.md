---
id: "zh-php-function-yaf-request-abstract-setmodulename"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setModuleName"
title: "设置模块名"
signature: "public Yaf_Request_Abstract|null Yaf_Request_Abstract::setModuleName(string $module, bool $format_name = true)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setmodulename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置模块名

## 说明

```php
public Yaf_Request_Abstract|null Yaf_Request_Abstract::setModuleName(string $module, bool $format_name = true)
```

设置请求对象的模块名，通常由自定义路由器用于设置路由结果的模块名。

## 参数

- **`$module`** — `string`，模块名，应该是骆驼（camel）风格，比如 "Index" 或 "Foo_Bar"
- **`$format_name`** — 该参数自 Yaf 3.2.0 引入，默认情况下 Yaf 会将名称格式化为骆驼风格， 如果设置为 `false`，Yaf 将直接使用原始名称。

## 返回值

成功时返回请求对象自身，失败时返回 `null`。

## 示例

**`Yaf_Request_Abstract::setModuleName()` 示例**

```php


<?php
class AdminRouter extends Yaf_Route_Interface
{
    public function route(Yaf_Request_Abstract $request)
    {
        // /admin 下的所有请求都由 Admin 模块处理
        if (0 === strpos($request->getRequestUri(), "/admin")) {
            $request->setModuleName("Admin")
                    ->setControllerName("Dashboard")
                    ->setActionName("index");
            return true;
        }

        return false;
    }

    public function assemble(array $info, array $query = null) {}
}
?>
   
```

## 参见

 `Yaf_Request_Abstract::setControllerName()` `Yaf_Request_Abstract::setActionName()` `Yaf_Request_Abstract::getModuleName()`
