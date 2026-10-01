---
id: "zh-php-function-yaf-request-abstract-setparam"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setParam"
title: "设置请求参数"
signature: "public Yaf_Request_Abstract|bool|null Yaf_Request_Abstract::setParam(mixed $name, [mixed $value = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置请求参数

## 说明

```php
public Yaf_Request_Abstract|bool|null Yaf_Request_Abstract::setParam(mixed $name, [mixed $value = ...])
```

设置请求参数，可以通过 `Yaf_Request_Abstract::getParam()` 获取。

如果只传入一个数组参数，数组中的每个键值对都会被设置为请求参数。

## 参数

- **`$name`** — 参数名，或者一个键值对数组。
- **`$value`** — 参数值。除非 `$name` 是数组，否则必填。

## 返回值

成功时返回请求对象自身，失败时返回 `false`。

## 示例

**`Yaf_Request_Abstract::setParam()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $request = $this->getRequest();

        $request->setParam("referrer", "newsletter");
        $request->setParam(["source" => "email", "campaign" => "spring"]);

        var_dump($request->getParam("referrer"));
        var_dump($request->getParams());
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(10) "newsletter"
array(3) {
  ["referrer"]=>
  string(10) "newsletter"
  ["source"]=>
  string(5) "email"
  ["campaign"]=>
  string(6) "spring"
}

   
```

## 参见

 `Yaf_Request_Abstract::getParam()` `Yaf_Request_Abstract::getParams()` `Yaf_Request_Abstract::clearParams()`
