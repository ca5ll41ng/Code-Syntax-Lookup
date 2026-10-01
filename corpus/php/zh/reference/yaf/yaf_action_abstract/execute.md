---
id: "zh-php-function-yaf-action-abstract-execute"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Action_Abstract::execute"
title: "动作入口点"
signature: "abstract public mixed Yaf_Action_Abstract::execute(mixed $args)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-action-abstract.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 动作入口点

## 说明

```php
abstract public mixed Yaf_Action_Abstract::execute(mixed $args)
```

用户应该始终为动作定义此方法，这是动作的入口点。 `Yaf_Action_Abstract::execute()` 可能会有参数。

> 从请求中获取的值并不安全，在使用之前应当先做一些过滤工作。

## 参数

- **`$args`**

## 返回值

动作方法的返回值不会被 Yaf 使用；输出会被直接写入或由视图引擎收集。

## 示例

**`Yaf_Action_Abstract::execute()` 示例**

```php


<?php
/**
 * A controller example
 */
class ProductController extends Yaf_Controller_Abstract {
      protected $actions = array(
          "index" => "actions/Index.php",
      );
}
?>

   
```

**`Yaf_Action_Abstract::execute()` 示例**

```php


<?php
/**
 * ListAction
 */
class ListAction extends Yaf_Action_Abstract {
     public function execute ($name, $id) {
         assert($name == $this->getRequest()->getParam("name"));
         assert($id   == $this->getRequest()->getParam("id"));
     }
}
?>

   
```

以上示例的输出类似于：

```text


/**
 * Now assuming we are using the Yaf_Route_Static route
 * for request: http://yourdomain/product/list/name/yaf/id/22
 * will result:
 */
 bool(true)
 bool(true)

   
```

## 参见

 `Yaf_Request_Abstract::getParam()` `Yaf_Controller_Abstract::forward()`
