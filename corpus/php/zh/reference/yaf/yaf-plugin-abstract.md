---
id: "zh-php-guide-class-yaf-plugin-abstract"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-plugin-abstract"
title: "Yaf_Plugin_Abstract 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-plugin-abstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Plugin_Abstract 类

Yaf_Plugin_Abstract

   简介  插件（Plugin）使得框架的扩展和定制变得简单。插件是一个继承 `Yaf_Plugin_Abstract` 并覆盖了一个或多个钩子（hook）方法的类，这些钩子方法会在调度周期的固定时点被自动调用： 路由前后、调度循环（dispatch loop）前后，以及每次单独调度（dispatch）的前后。    插件通过 `Yaf_Dispatcher::registerPlugin()` 挂载到调度器上，通常在 Bootstrap 中完成；注册之后，该插件实现的所有钩子方法都会在恰当的时机被调用， 每个钩子方法都会接收到当前的 `Yaf_Request_Abstract` 和 `Yaf_Response_Abstract` 实例。      示例 
**插件示例**

```php

<?php
   /* bootstrap class should be defined under ./application/Bootstrap.php */
   class Bootstrap extends Yaf_Bootstrap_Abstract {
        public function _initPlugin(Yaf_Dispatcher $dispatcher) {
            /* register a plugin */
            $dispatcher->registerPlugin(new TestPlugin());
        }
   }

   /* plugin class should be placed under ./application/plugins/ */
   class TestPlugin extends Yaf_Plugin_Abstract {
        public function routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            /* 在路由之前执行，在这个钩子里，用户可以做一些 URL 重写 */
            var_dump("routerStartup");
        }
        public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            /* 路由完成，在这个钩子里，用户可以做登录检测 */
            var_dump("routerShutdown");
        }
        public function dispatchLoopStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            var_dump("dispatchLoopStartup");
        }
        public function preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            var_dump("preDispatch");
        }
        public function postDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            var_dump("postDispatch");
        }
        public function dispatchLoopShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            /* 最后一个钩子，在这个钩子里，用户可以记录日志或实现布局（layout） */
            var_dump("dispatchLoopShutdown");
        }
   }

   Class IndexController extends Yaf_Controller_Abstract {
        public function indexAction() {
            return FALSE; //prevent rendering
        }
   }

   $config = array(
       "application" => array(
           "directory" => dirname(__FILE__) . "/application/",
       ),
   );

   $app = new Yaf_Application($config);
   $app->bootstrap()->run();
?>

   
```

以上示例的输出类似于：

```text

string(13) "routerStartup"
string(14) "routerShutdown"
string(19) "dispatchLoopStartup"
string(11) "preDispatch"
string(12) "postDispatch"
string(20) "dispatchLoopShutdown"

   
```

   类摘要   `Yaf_Plugin_Abstract`    `Yaf_Plugin_Abstract`    方法
