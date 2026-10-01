---
id: "zh-php-function-yaf-dispatcher-registerplugin"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::registerPlugin"
title: "注册插件"
signature: "public Yaf_Dispatcher|null|false Yaf_Dispatcher::registerPlugin(Yaf_Plugin_Abstract $plugin)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.registerplugin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册插件

## 说明

```php
public Yaf_Dispatcher|null|false Yaf_Dispatcher::registerPlugin(Yaf_Plugin_Abstract $plugin)
```

注册插件（参见 `Yaf_Plugin_Abstract`）。通常插件在 Bootstrap 中注册（参见 `Yaf_Bootstrap_Abstract`）。

## 参数

- **`$plugin`** — 一个 `Yaf_Plugin_Abstract` 实例。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象自身，失败时返回 `false` / `null`。

## 示例

**`Yaf_Dispatcher::registerPlugin()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract {
  public function _initPlugin(Yaf_Dispatcher $dispatcher) {
    /**
    * Yaf 假定插件脚本位于 [application.directory] .  "/plugins"
    * 对于本例，路径为：
    * [application.directory] . "/plugins/" . "User" . [application.ext]
    */
    $user = new UserPlugin();
    $dispatcher->registerPlugin($user);
  }
}
?>

   
```

## 参见

`Yaf_Plugin_Abstract` `Yaf_Bootstrap_Abstract`
