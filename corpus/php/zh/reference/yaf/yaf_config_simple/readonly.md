---
id: "zh-php-function-yaf-config-simple-readonly"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::readonly"
title: "检查配置是否只读"
signature: "public bool Yaf_Config_Simple::readonly()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.readonly.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查配置是否只读

## 说明

```php
public bool Yaf_Config_Simple::readonly()
```

检查配置是否为只读。

## 参数

此函数没有参数。

## 返回值

如果配置是只读的返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Config_Simple::readonly()` 示例**

```php


<?php
$writable = new Yaf_Config_Simple(['env' => 'development']);
var_dump($writable->readonly());

$frozen = new Yaf_Config_Simple(['env' => 'development'], true);
var_dump($frozen->readonly());
?>

   
```

以上示例的输出类似于：

```text


bool(false)
bool(true)

   
```

## 参见

 `Yaf_Config_Simple::set()`
