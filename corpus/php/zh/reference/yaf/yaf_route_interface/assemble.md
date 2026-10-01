---
id: "zh-php-function-yaf-route-interface-assemble"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Interface::assemble"
title: "组装一个请求"
signature: "abstract public string Yaf_Route_Interface::assemble(array $info, [array $query = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-interface.assemble.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 组装一个请求

## 说明

```php
abstract public string Yaf_Route_Interface::assemble(array $info, [array $query = ...])
```

此方法根据参数 info 返回一个 url，并根据参数 query 向 url 追加查询字符串。

路由应该根据自己的路由规则来实现这个方法，做一个逆向的过程。

## 参数

- **`$info`**
- **`$query`**

## 返回值

## 示例

**`Yaf_Route_Interface::assemble()` 示例**

```php


<?php
class RewriteRoute implements Yaf_Route_Interface {

    private $_match;
    private $_route;

    public function __construct(string $match, array $route) {
        $this->_match = $match;
        $this->_route = $route;
    }

    public function route(Yaf_Request_Abstract $request): bool {
        if (!preg_match($this->_match, $request->getRequestUri(), $matches)) {
            return false;
        }

        foreach ($this->_route as $key => $value) {
            if (is_string($value) && ':' === $value[0]) {
                $value = $matches[substr($value, 1)];
            }
            $request->setParam($key, $value);
        }
        $request->setRouted();

        return true;
    }

    /* 将路由规则逆向还原为一个 URL */
    public function assemble(array $info, ?array $query = null): string {
        $url = "/product";
        if (isset($info[':name'])) {
            $url .= "/" . $info[':name'];
        }

        if (!empty($query)) {
            $url .= "?" . http_build_query($query);
        }

        return $url;
    }
}

$router = new Yaf_Router();
$router->addRoute("custom",
    new RewriteRoute("#^/product#", array("controller" => "product"))
);

var_dump($router->getRoute("custom")->assemble(
    array(':name' => 'book'),
    array('page' => 2)
));
?>

   
```

以上示例的输出类似于：

```text


string(20) "/product/book?page=2"

   
```

## 参见

 `Yaf_Route_Interface::route()` `Yaf_Route_Rewrite::assemble()` `Yaf_Route_Map::assemble()`
