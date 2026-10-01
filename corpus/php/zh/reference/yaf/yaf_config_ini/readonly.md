---
id: "zh-php-function-yaf-config-ini-readonly"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::readonly"
title: "检查配置是否只读"
signature: "public bool Yaf_Config_Ini::readonly()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.readonly.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查配置是否只读

## 说明

```php
public bool Yaf_Config_Ini::readonly()
```

检查配置是否只读。`Yaf_Config_Ini` 始终是只读的。

## 参数

此函数没有参数。

## 返回值

始终返回 `true`。

## 示例

**`Yaf_Config_Ini::readonly()` 示例**

```php


<?php
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');

// Yaf_Config_Ini 始终是只读的
var_dump($config->readonly());

// 写入操作会被拒绝（并触发一条警告）
var_dump($config->set('version', '2.0'));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(false)

   
```

## 参见

 `Yaf_Config_Ini::set()`
