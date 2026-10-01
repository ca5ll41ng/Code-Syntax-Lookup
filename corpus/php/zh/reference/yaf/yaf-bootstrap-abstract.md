---
id: "zh-php-guide-class-yaf-bootstrap-abstract"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-bootstrap-abstract"
title: "Yaf_Bootstrap_Abstract 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-bootstrap-abstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Bootstrap_Abstract 类

Yaf_Bootstrap_Abstract

   简介  Bootstrap 是用来在 Application 运行（run）之前做一些初始化工作的机制。    可以通过继承 `Yaf_Bootstrap_Abstract` 来定义自己的 Bootstrap 类.    在 Bootstrap 类中所有以“_init”开头的公有的方法, 都会被按照定义顺序依次在 `Yaf_Application::bootstrap()` 被调用的时刻调用.      示例 
**Bootstrap 示例**

```php

<?php
   /* bootstrap class should be defined under ./application/Bootstrap.php */
   class Bootstrap extends Yaf_Bootstrap_Abstract {
        public function _initConfig(Yaf_Dispatcher $dispatcher) {
            var_dump(__METHOD__);
        }
        public function _initPlugin(Yaf_Dispatcher $dispatcher) {
            var_dump(__METHOD__);
        }
   }

   $config = array(
       "application" => array(
           "directory" => dirname(__FILE__) . "/application/",
       ),
   );
 
   $app = new Yaf_Application($config);
   $app->bootstrap();
?>

   
```

以上示例的输出类似于：

```text

string(22) "Bootstrap::_initConfig"
string(22) "Bootstrap::_initPlugin"

   
```

   类摘要   `Yaf_Bootstrap_Abstract`    `abstract` `Yaf_Bootstrap_Abstract`   属性 方法
