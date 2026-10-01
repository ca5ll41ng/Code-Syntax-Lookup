---
id: "zh-php-function-yaf-controller-abstract-getinvokearg"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getInvokeArg"
title: "获取一个动作调用参数"
signature: "public string|null Yaf_Controller_Abstract::getInvokeArg(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getinvokearg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个动作调用参数

## 说明

```php
public string|null Yaf_Controller_Abstract::getInvokeArg(string $name)
```

根据名称返回当前动作的单个调用参数。调用参数通过 `Yaf_Controller_Abstract::forward()` 传递给动作。

## 参数

- **`$name`** — 要获取的调用参数的名称。

## 返回值

参数值，如果不存在则返回 `null`。

## 示例

**`Yaf_Controller_Abstract::getInvokeArg()` 示例**

```php


<?php
class UserController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        // 转发到本控制器的 profile 动作，
        // 并携带调用参数
        $this->forward("profile", array("name" => "laruence"));
        return false; // 结束当前流程
    }

    public function profileAction() {
        // 按名称获取单个调用参数
        var_dump($this->getInvokeArg("name"));
        var_dump($this->getInvokeArg("missing"));
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(8) "laruence"
NULL

   
```

## 参见

`Yaf_Controller_Abstract::getInvokeArgs()` `Yaf_Controller_Abstract::forward()`
