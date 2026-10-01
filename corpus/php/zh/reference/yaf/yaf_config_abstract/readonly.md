---
id: "zh-php-function-yaf-config-abstract-readonly"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Abstract::readonly"
title: "检查配置是否只读"
signature: "abstract public bool Yaf_Config_Abstract::readonly()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-abstract.readonly.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查配置是否只读

## 说明

```php
abstract public bool Yaf_Config_Abstract::readonly()
```

检查配置是否只读。该方法是抽象方法，必须由子类实现。

## 参数

此函数没有参数。

## 返回值

如果配置是只读的则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Config_Abstract::readonly()` 示例**

```php


<?php
$ini = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');
var_dump($ini->readonly()); // Yaf_Config_Ini 总是只读的

$writable = new Yaf_Config_Simple(['env' => 'development']);
var_dump($writable->readonly());

$frozen = new Yaf_Config_Simple(['env' => 'development'], true);
var_dump($frozen->readonly());
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(false)
bool(true)

   
```

## 参见

 `Yaf_Config_Abstract::set()` `Yaf_Config_Ini::readonly()` `Yaf_Config_Simple::readonly()`
