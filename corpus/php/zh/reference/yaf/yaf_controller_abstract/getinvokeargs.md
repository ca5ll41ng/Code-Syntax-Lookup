---
id: "zh-php-function-yaf-controller-abstract-getinvokeargs"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getInvokeArgs"
title: "获取全部动作调用参数"
signature: "public array|null Yaf_Controller_Abstract::getInvokeArgs()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getinvokeargs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取全部动作调用参数

## 说明

```php
public array|null Yaf_Controller_Abstract::getInvokeArgs()
```

以参数名为键的数组形式返回当前动作的全部调用参数。 调用参数通过 `Yaf_Controller_Abstract::forward()` 传递给动作。

## 参数

此函数没有参数。

## 返回值

调用参数组成的数组，如果没有传递参数则返回 `null`。

## 示例

**`Yaf_Controller_Abstract::getInvokeArgs()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        $this->forward("list", array("category" => "book", "page" => 2));
        return false; // 结束当前流程
    }

    public function listAction() {
        // 当前动作的全部调用参数
        var_dump($this->getInvokeArgs());
    }
}
?>

   
```

以上示例的输出类似于：

```text


array(2) {
  ["category"]=>
  string(4) "book"
  ["page"]=>
  int(2)
}

   
```

## 参见

`Yaf_Controller_Abstract::getInvokeArg()` `Yaf_Controller_Abstract::forward()`
