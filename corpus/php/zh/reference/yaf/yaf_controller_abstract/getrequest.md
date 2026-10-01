---
id: "zh-php-function-yaf-controller-abstract-getrequest"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getRequest"
title: "获取当前请求对象"
signature: "public Yaf_Request_Abstract|null Yaf_Controller_Abstract::getRequest()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getrequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前请求对象

## 说明

```php
public Yaf_Request_Abstract|null Yaf_Controller_Abstract::getRequest()
```

返回与该控制器关联的 `Yaf_Request_Abstract` 实例。

## 参数

此函数没有参数。

## 返回值

`Yaf_Request_Abstract` 实例，如果没有可用的请求则返回 `null`。

## 示例

**`Yaf_Controller_Abstract::getRequest()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        $request = $this->getRequest();
        var_dump($request->getModuleName());
        var_dump($request->getControllerName());
        var_dump($request->getActionName());
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(5) "Index"
string(5) "Index"
string(5) "index"

   
```

## 参见

`Yaf_Controller_Abstract::getResponse()` `Yaf_Request_Abstract`
