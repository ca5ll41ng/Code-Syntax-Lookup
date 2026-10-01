---
id: "zh-php-function-yaf-application-bootstrap"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::bootstrap"
title: "调用 bootstrap"
signature: "public Yaf_Application|false Yaf_Application::bootstrap()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.bootstrap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用 bootstrap

## 说明

```php
public Yaf_Application|false Yaf_Application::bootstrap()
```

运行 Bootstrap。Bootstrap 类中所有名称以 `_init` 开头的公共方法都会按照声明的顺序被调用，每个方法都接收 `Yaf_Dispatcher` 实例作为唯一参数。

Bootstrap 类必须命名为 `Bootstrap` 并继承 `Yaf_Bootstrap_Abstract`。如果该类尚未定义， 则会从应用目录下的 `Bootstrap.php` 加载； `application.bootstrap` 配置项可以覆盖其位置。

## 参数

此函数没有参数。

## 返回值

成功时返回 `Yaf_Application` 对象本身， 失败时返回 `false`（例如无法加载 Bootstrap 类， 或者某个 `_init*` 方法抛出了未捕获的异常）。

## 错误／异常

如果找到的类不是 `Yaf_Bootstrap_Abstract` 的子类，会触发 `YAF_ERR_TYPE_ERROR` 错误； 如果找不到 bootstrap 文件或 `Bootstrap` 类， 会触发一个 `E_WARNING`。

## 示例

**Bootstrap 示例**

```php


<?php
/**
 * This file should be under APPLICATION_PATH . "/application/" (which was
 * defined in the config passed to Yaf_Application), and named
 * Bootstrap.php, so the Yaf_Application can find it.
 */
class Bootstrap extends Yaf_Bootstrap_Abstract {
    public function _initConfig(Yaf_Dispatcher $dispatcher) {
        echo "1st called\n";
    }

    public function _initPlugin(Yaf_Dispatcher $dispatcher) {
        echo "2nd called\n";
    }
}
?>

   
```

**`Yaf_Application::bootstrap()` 示例**

```php


<?php
defined('APPLICATION_PATH') // APPLICATION_PATH will be used in the ini config file
    || define('APPLICATION_PATH', __DIR__);

$application = new Yaf_Application(APPLICATION_PATH.'/conf/application.ini');
$application->bootstrap();
?>

   
```

以上示例的输出类似于：

```text


1st called
2nd called

   
```

## 参见

`Yaf_Bootstrap_Abstract` `Yaf_Application::run()`
