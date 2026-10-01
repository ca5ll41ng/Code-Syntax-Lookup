---
id: "zh-php-function-yaf-application-getconfig"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::getConfig"
title: "获取配置实例"
signature: "public Yaf_Config_Abstract|null Yaf_Application::getConfig()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.getconfig.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取配置实例

## 说明

```php
public Yaf_Config_Abstract|null Yaf_Application::getConfig()
```

获取保存传递给构造函数的应用配置的 `Yaf_Config_Abstract` 实例。

## 参数

此函数没有参数。

## 返回值

`Yaf_Config_Abstract` 实例（当构造函数传入数组时， 为 `Yaf_Config_Simple` 对象；当传入 INI 文件时， 为 `Yaf_Config_Ini` 对象），失败时返回 `null`。

## 示例

**`Yaf_Application::getConfig()` 示例**

```php


<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->getConfig());
?>

   
```

以上示例的输出类似于：

```text


Yaf_Config_Simple Object
(
    [_config:protected] => Array
        (
            [application] => Array
                (
                    [directory] => /home/laruence/local/www/htdocs/application
                )

        )

    [_readonly:protected] => 1
)

   
```
