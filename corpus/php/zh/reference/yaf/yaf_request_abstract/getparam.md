---
id: "zh-php-function-yaf-request-abstract-getparam"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getParam"
title: "检索调用的参数"
signature: "public mixed Yaf_Request_Abstract::getParam(string $name, [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索调用的参数

## 说明

```php
public mixed Yaf_Request_Abstract::getParam(string $name, [mixed $default = ...])
```

从请求中检索一个参数（一个命名的路由/动作参数）。

## 参数

- **`$name`** — 参数名。
- **`$default`** — 当参数未设置时返回的值。

## 返回值

参数的值；如果提供了 `$default`，在未找到时返回它，否则返回 `null`。

## 示例

**`Yaf_Request_Abstract::getParam()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function viewAction()
    {
        $request = $this->getRequest();

        // 假设请求是 /product/view/id/17
        $id       = (int) $request->getParam("id");
        $referrer = $request->getParam("referrer", "direct");

        var_dump($id, $referrer);
    }
}
?>
   
```

以上示例的输出类似于：

```text


int(17)
string(6) "direct"

   
```

## 参见

 `Yaf_Request_Abstract::setParam()` `Yaf_Request_Abstract::getParams()` `Yaf_Request_Abstract::clearParams()` `Yaf_Request_Abstract::get()`
