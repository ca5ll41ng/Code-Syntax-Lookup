---
id: "zh-php-function-yaf-config-ini-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::__construct"
title: "Yaf_Config_Ini 构造方法"
signature: "public Yaf_Config_Ini::__construct(mixed $config_file, string $section = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Config_Ini 构造方法

## 说明

```php
public Yaf_Config_Ini::__construct(mixed $config_file, string $section = NULL)
```

从 INI 文件或数组创建一个新的 `Yaf_Config_Ini` 实例。生成的配置始终是只读的。

## 参数

- **`$config_file`** — INI 文件的路径，或者配置值数组。
- **`$section`** — 要加载的 INI 配置节名称。如果省略，则加载所有配置节。

## 返回值

不返回值。

## 示例

**`Yaf_Config_Ini::__construct()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * application.name = "MyApp"
 * database.host    = "localhost"
 * database.port    = 3306
 *
 * [production : common]
 * log.level        = "warning"
 */

// 只加载 "production" 配置节，它继承自 "common"
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'production');

echo $config->application->name, "\n";
echo $config->database->host, "\n";
echo $config->log->level, "\n";
?>

   
```

以上示例的输出类似于：

```text


MyApp
localhost
warning

   
```

## 参见

 `Yaf_Config_Ini::get()` `Yaf_Config_Ini::set()` `Yaf_Config_Ini::readonly()`
