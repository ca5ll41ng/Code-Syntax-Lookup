---
id: "zh-php-function-yaf-config-ini-valid"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::valid"
title: "检查当前位置是否有效"
signature: "public bool Yaf_Config_Ini::valid()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查当前位置是否有效

## 说明

```php
public bool Yaf_Config_Ini::valid()
```

检查当前迭代器位置是否有效。

## 参数

此函数没有参数。

## 返回值

如果当前位置有效返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Config_Ini::valid()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * application.name = "MyApp"
 * version          = "1.0"
 */
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');

$config->rewind();
var_dump($config->valid());

$config->next();
var_dump($config->valid());

$config->next(); // 已超过最后一个配置项
var_dump($config->valid());
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
bool(false)

   
```

## 参见

 `Yaf_Config_Ini::current()` `Yaf_Config_Ini::key()` `Yaf_Config_Ini::next()` `Yaf_Config_Ini::rewind()`
