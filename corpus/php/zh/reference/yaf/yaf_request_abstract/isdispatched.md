---
id: "zh-php-function-yaf-request-abstract-isdispatched"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isDispatched"
title: "判断请求是否已分发"
signature: "public bool Yaf_Request_Abstract::isDispatched()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.isdispatched.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否已分发

## 说明

```php
public bool Yaf_Request_Abstract::isDispatched()
```

判断请求是否已被分发。

## 参数

此函数没有参数。

## 返回值

如果请求已被分发则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isDispatched()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 停止分发循环，不再分发后续的 action
        $this->getRequest()->setDispatched();

        var_dump($this->getRequest()->isDispatched());
    }
}
?>
   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Dispatcher::dispatch()` `Yaf_Request_Abstract::setDispatched()`
