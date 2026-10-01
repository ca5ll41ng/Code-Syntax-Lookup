---
id: "zh-php-function-yaf-request-abstract-getparams"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getParams"
title: "获取所有调用的参数"
signature: "public array|null Yaf_Request_Abstract::getParams()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getparams.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取所有调用的参数

## 说明

```php
public array|null Yaf_Request_Abstract::getParams()
```

从请求中获取所有参数。

## 参数

此函数没有参数。

## 返回值

包含所有参数的数组；如果一个参数都没有设置，则返回 `null`。

## 示例

**`Yaf_Request_Abstract::getParams()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function viewAction()
    {
        // 假设请求是 /product/view/id/17/sort/price
        var_dump($this->getRequest()->getParams());
    }
}
?>
   
```

以上示例的输出类似于：

```text


array(2) {
  ["id"]=>
  string(2) "17"
  ["sort"]=>
  string(5) "price"
}

   
```

## 参见

 `Yaf_Request_Abstract::setParam()` `Yaf_Request_Abstract::getParam()` `Yaf_Request_Abstract::clearParams()`
