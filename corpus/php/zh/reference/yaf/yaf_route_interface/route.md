---
id: "zh-php-function-yaf-route-interface-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Interface::route"
title: "路由请求"
signature: "abstract public bool Yaf_Route_Interface::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-interface.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
abstract public bool Yaf_Route_Interface::route(Yaf_Request_Abstract $request)
```

`Yaf_Route_Interface::route()` 是用户自定义路由唯一需要实现的方法。

> 自 2.3.0 起，还应该实现另外一个方法，参阅 `Yaf_Route_Interface::assemble()`。

如果此方法返回 `true`，那么路由过程将会中止。否则， `Yaf_Router` 将会调用路由栈中的下一个路由来路由请求。

此方法通过调用 `Yaf_Request_Abstract::setControllerName()`、 `Yaf_Request_Abstract::setActionName()` 和 `Yaf_Request_Abstract::setModuleName()` 将路由结果设置到参数 request 中。

这个方法最后还应该调用 `Yaf_Request_Abstract::setRouted()` 将请求标记为已路由。

## 参数

- **`$request`** — `Yaf_Request_Abstract` 实例。

## 返回值

## 示例

**`Yaf_Route_Interface::route()` 示例**

```php


<?php
class ApiRoute implements Yaf_Route_Interface {

    private $_prefix;

    public function __construct(string $prefix) {
        $this->_prefix = $prefix;
    }

    public function route(Yaf_Request_Abstract $request): bool {
        $uri = $request->getRequestUri();
        if (0 !== strpos($uri, $this->_prefix)) {
            /* 不归我们管，让路由器尝试下一个路由 */
            return false;
        }

        /* 把 URI "/api/user/list" 解析为 controller/action */
        $segments = explode("/", ltrim(substr($uri, strlen($this->_prefix)), "/"));
        $controller = isset($segments[0]) ? ucfirst($segments[0]) : NULL;
        $action = isset($segments[1]) ? $segments[1] : NULL;

        if (empty($controller)) {
            return false;
        }

        $request->setModuleName("index");
        $request->setControllerName($controller);
        $request->setActionName($action);
        $request->setRouted(); /* 路由过程到此结束 */

        return true;
    }

    public function assemble(array $info, ?array $query = null): string {
        $uri = $this->_prefix . "/" . strtolower($info[':c']);
        if (isset($info[':a'])) {
            $uri .= "/" . $info[':a'];
        }

        if (!empty($query)) {
            $uri .= "?" . http_build_query($query);
        }

        return $uri;
    }
}

/**
 * 注册自定义路由
 */
Yaf_Dispatcher::getInstance()->getRouter()->addRoute("api", new ApiRoute("/api"));
?>

   
```

以上示例的输出类似于：

```text


/* http://yourdomain.com/api/user/list
 * 会路由为以下值：
 */
array(
  "module"     => "index",
  "controller" => "User",
  "action"     => "list",
)

   
```

## 参见

 `Yaf_Route_Interface::assemble()` `Yaf_Router::addRoute()` `Yaf_Request_Abstract::setRouted()`
