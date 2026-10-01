---
id: "zh-php-function-yaf-dispatcher-getrequest"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::getRequest"
title: "获取请求实例"
signature: "public Yaf_Request_Abstract|null Yaf_Dispatcher::getRequest()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.getrequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取请求实例

## 说明

```php
public Yaf_Request_Abstract|null Yaf_Dispatcher::getRequest()
```

获取分发器持有的请求对象。

## 参数

此函数没有参数。

## 返回值

`Yaf_Request_Abstract` 实例，如果应用未初始化则返回 `null`。

## 示例

**`Yaf_Dispatcher::getRequest()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $request = Yaf_Dispatcher::getInstance()->getRequest();

        // 分发器持有的正是传递给控制器的同一个请求对象
        var_dump($request === $this->getRequest());

        return false;
    }
}
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

`Yaf_Dispatcher::setRequest()` `Yaf_Request_Abstract`
