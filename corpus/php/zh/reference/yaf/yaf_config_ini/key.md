---
id: "zh-php-function-yaf-config-ini-key"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::key"
title: "获取当前配置项的键"
signature: "public mixed Yaf_Config_Ini::key()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前配置项的键

## 说明

```php
public mixed Yaf_Config_Ini::key()
```

返回迭代过程中当前配置项的键。

## 参数

此函数没有参数。

## 返回值

当前配置项的键（字符串或整数），如果位置无效则返回 `false`。

## 示例

**`Yaf_Config_Ini::key()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * application.name = "MyApp"
 * version          = "1.0"
 */
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');

for ($config->rewind(); $config->valid(); $config->next()) {
    echo $config->key(), "\n";
}
?>

   
```

以上示例的输出类似于：

```text


application
version

   
```

## 参见

 `Yaf_Config_Ini::current()` `Yaf_Config_Ini::next()` `Yaf_Config_Ini::rewind()` `Yaf_Config_Ini::valid()`
