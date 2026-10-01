---
id: "zh-php-function-yaf-request-abstract-getbaseuri"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getBaseUri"
title: "获取基础 URI"
signature: "public string|null Yaf_Request_Abstract::getBaseUri()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getbaseuri.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取基础 URI

## 说明

```php
public string|null Yaf_Request_Abstract::getBaseUri()
```

获取基础 URI

## 参数

此函数没有参数。

## 返回值

基础 URI；如果未设置，则返回空字符串。

## 示例

**`Yaf_Request_Abstract::getBaseUri()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $request = $this->getRequest();

        // 假设应用部署在 /myapp 路径下，
        // 且请求是 /myapp/product/view
        var_dump($request->getBaseUri());
        var_dump($request->getRequestUri());
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(6) "/myapp"
string(19) "/myapp/product/view"

   
```

## 参见

 `Yaf_Request_Abstract::setBaseUri()` `Yaf_Request_Abstract::getRequestUri()` `Yaf_Request_Abstract::setRequestUri()`
