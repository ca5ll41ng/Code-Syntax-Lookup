---
id: "zh-php-function-yaf-action-abstract-getcontroller"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Action_Abstract::getController"
title: "获取控制器对象"
signature: "public Yaf_Controller_Abstract|null Yaf_Action_Abstract::getController()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-action-abstract.getcontroller.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取控制器对象

## 说明

```php
public Yaf_Controller_Abstract|null Yaf_Action_Abstract::getController()
```

获取拥有此动作的控制器。

## 参数

此函数没有参数。

## 返回值

返回 `Yaf_Controller_Abstract` 实例， 如果没有可用的控制器则返回 `null`。

## 示例

**`Yaf_Action_Abstract::getController()` 示例**

```php


<?php
class ListAction extends Yaf_Action_Abstract
{
    public function execute() {
        // 拥有此动作的控制器
        $controller = $this->getController();
        var_dump($controller instanceof Yaf_Controller_Abstract);

        // 例如：访问它的视图引擎
        $controller->getView()->assign("products", array("yaf", "php"));
    }
}
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

`Yaf_Action_Abstract::getControllerName()` `Yaf_Controller_Abstract`
