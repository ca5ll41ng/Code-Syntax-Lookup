---
id: "zh-php-function-yaf-controller-abstract-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::__construct"
title: "Yaf_Controller_Abstract 的构造函数"
signature: "public Yaf_Controller_Abstract::__construct()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Controller_Abstract 的构造函数

## 说明

```php
public Yaf_Controller_Abstract::__construct()
```

`Yaf_Controller_Abstract::__construct()` 会在分发 过程中创建控制器对象时由 Yaf 调用。它不接受任何参数，用户不应该 直接调用它。由于不建议用自定义逻辑覆盖它， `Yaf_Controller_Abstract::init()` 被作为 用户层的初始化钩子提供。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Controller_Abstract::__construct()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    // __construct() 在分发过程中实例化控制器时由 Yaf_Dispatcher
    // 调用，既不应该手动调用，也不应该被覆盖。
    // 请改用 init()：

    public function init() {
        // 当 init() 运行时，分发器已经装配好了控制器：
        // 请求、响应和视图引擎都已就绪
        var_dump($this->getRequest() instanceof Yaf_Request_Abstract);
        var_dump($this->getResponse() instanceof Yaf_Response_Abstract);
        var_dump($this->getView() instanceof Yaf_View_Interface);
    }

    public function indexAction() {
        // ...
    }
}
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
bool(true)

   
```

## 参见

`Yaf_Controller_Abstract::init()`
