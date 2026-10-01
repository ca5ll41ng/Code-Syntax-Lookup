---
id: "zh-php-guide-class-yaf-config-ini"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-config-ini"
title: "Yaf_Config_Ini 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-config-ini.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Config_Ini 类

Yaf_Config_Ini

   简介  `Yaf_Config_Ini` 允许开发者把配置数据存储在熟悉的 INI 格式中， 并在应用程序中使用嵌套的对象属性语法来读取它。 INI 格式在提供配置数据键的层级结构以及配置数据节之间的继承能力方面具有专长。 配置数据层级结构通过使用点号（"`.`"）分隔键名来实现。 一个节可以在节的名称之后加一个冒号（"`:`"） 以及要继承数据的节的名称，来扩展或继承另一个节。   
> `Yaf_Config_Ini` 利用了 PHP 的 `parse_ini_file()` 函数。请仔细查看该函数的文档， 了解它的特定行为，这些行为会传递到 `Yaf_Config_Ini`， 比如特殊值 "`true`"、"`false`"、"yes"、"no" 和 "`null`" 的处理方式。

 
> `Yaf_Config_Ini` 会在每次请求时解析配置文件。 如果应用管理着大量的（基本静态的）配置，可以考虑使用 Yaconf 扩展：它将配置保存在 整个 PHP 生命周期内的共享内存中，因此只需解析一次， 访问效率也要高得多。 Yaconf 理解完全相同的 INI 语法——用点号分隔的键， 以及通过 "`[section : parent]`" 实现的分节继承—— 因此现有的 `application.ini` 可以原样由 Yaconf 使用； 变化的只是把它传给 `Yaf_Application::__construct()` 的方式 （参见 应用程序配置 中的提示）。

    类摘要   `Yaf_Config_Ini`    `Yaf_Config_Ini`   `extends` `Yaf_Config_Abstract`   Iterator   ArrayAccess   Countable    属性 方法   继承的方法       属性 
- **`_config`**
- **`_readonly`**

    示例 
**`Yaf_Config_Ini()` 示例**

这个例子说明了使用 Yaf_Config_Ini 从 INI 文件中加载配置数据的基本用法。 这个例子中既有生产环境的配置数据，也有预发布（staging）环境的配置数据。 因为预发布环境的配置数据与生产环境的非常相似，所以预发布节继承自生产节。 在这里这个决定是任意的，也可以反过来写，让生产节继承自预发布节， 不过在更复杂的情况下可能就不是这样了。 假设以下配置数据包含在 /path/to/config.ini 中：

```ini

; Production site configuration data
[production]
webhost                  = www.example.com
database.adapter         = pdo_mysql
database.params.host     = db.example.com
database.params.username = dbuser
database.params.password = secret
database.params.dbname   = dbname
 
; Staging site configuration data inherits from production and
; overrides values as necessary
[staging : production]
database.params.host     = dev.example.com
database.params.username = devuser
database.params.password = devsecret

   
```

```php

<?php
$config = new Yaf_Config_Ini('/path/to/config.ini', 'staging');
 
var_dump($config->database->params->host); 
var_dump($config->database->params->dbname);
var_dump($config->get("database.params.username"));
?>

   
```

以上示例的输出类似于：

```text

string(15) "dev.example.com"
string(6) "dbname"
string(7) "devuser"

   
```
