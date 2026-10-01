---
id: "zh-php-function-yaf-controller-abstract-forward"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::forward"
title: "将当前请求转发到另一个动作"
signature: "public bool|null Yaf_Controller_Abstract::forward(string $action, [array|null $parameters = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.forward.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将当前请求转发到另一个动作

## 说明

```php
public bool|null Yaf_Controller_Abstract::forward(string $action, [array|null $parameters = ...])
```

```php
public bool|null Yaf_Controller_Abstract::forward(string $controller, string $action, [array|null $parameters = ...])
```

```php
public bool|null Yaf_Controller_Abstract::forward(string $module, string $controller, string $action, [array|null $parameters = ...])
```

将当前请求转发到另一个动作。目标根据参数的数量和类型确定：

 只有 `$action`：转发到当前控制器的另一个动作。 `$controller` 和 `$action`：转发到另一个控制器。 `$module`、`$controller` 和 `$action`：转发到另一个模块。 可选的 `$parameters` 数组携带调用参数，可以通过 `Yaf_Request_Abstract::getParam()` 获取。 

> 此方法不会立即切换到目标动作，切换会在当前流程结束后发生。 如果想立即交出控制权，请从当前动作方法中返回 （返回 `false` 还会告诉 Yaf 不要自动渲染当前视图）。

## 参数

- **`$module`** — 目标模块名。如果指定了当前模块，则原样使用。
- **`$controller`** — 目标控制器名。
- **`$action`** — 目标动作名。
- **`$parameters`** — 目标动作的调用参数，可以通过 `Yaf_Request_Abstract::getParam()` 获取。

## 返回值

成功时返回 `true`，失败时返回 `false` / `null`。

## 示例

**`Yaf_Controller_Abstract::forward()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        $logined = $_SESSION["login"];
        if (!$logined) {
            $this->forward("login", array("from" => "Index")); // 转发到 login 动作
            return false; // 这一点很重要：结束当前流程，
                          // 并告诉 Yaf 不要自动渲染
        }

        // 其他处理
    }

    public function loginAction() {
        echo "login, redirected from ", $this->_request->getParam("from") , " action";
    }
}
?>

   
```

以上示例的输出类似于：

```text


   login, redirected from Index action

   
```

## 参见

`Yaf_Request_Abstract::getParam()`
