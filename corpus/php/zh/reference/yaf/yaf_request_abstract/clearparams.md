---
id: "zh-php-function-yaf-request-abstract-clearparams"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::clearParams"
title: "移除所有参数"
signature: "public Yaf_Request_Abstract|null Yaf_Request_Abstract::clearParams()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.clearparams.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除所有参数

## 说明

```php
public Yaf_Request_Abstract|null Yaf_Request_Abstract::clearParams()
```

移除由路由器或 `Yaf_Request_Abstract::setParam()` 设置的所有参数。

## 参数

此函数没有参数。

## 返回值

返回请求对象自身。

## 示例

**`Yaf_Request_Abstract::clearParams()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $request = $this->getRequest();

        $request->setParam("referrer", "newsletter");
        var_dump($request->getParam("referrer"));

        $request->clearParams();
        var_dump($request->getParam("referrer"));
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(10) "newsletter"
NULL
   
```

## 参见

 `Yaf_Request_Abstract::setParam()` `Yaf_Request_Abstract::getParam()` `Yaf_Request_Abstract::getParams()`
