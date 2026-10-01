---
id: "zh-php-function-yaf-config-simple-offsetunset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::offsetUnset"
title: "移除配置项（ArrayAccess）"
signature: "public void Yaf_Config_Simple::offsetUnset(mixed $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除配置项（ArrayAccess）

## 说明

```php
public void Yaf_Config_Simple::offsetUnset(mixed $name)
```

根据键移除一个配置项。当对配置对象使用数组语法的 `unset()` 时，会调用该方法。

## 参数

- **`$name`** — 要移除的配置键。

## 返回值

没有返回值。如果配置是只读的，会触发一个警告。

## 示例

**`Yaf_Config_Simple::offsetUnset()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'cache' => ['enable' => true],
    'env'   => 'development',
]);

unset($config['cache']);
var_dump(isset($config['cache']));

// 只读配置不能被修改：会触发一个警告
$frozen = new Yaf_Config_Simple(['env' => 'development'], true);
unset($frozen['env']);
var_dump(isset($frozen['env']));
?>

   
```

以上示例的输出类似于：

```text


bool(false)
bool(true)

   
```

## 参见

 `Yaf_Config_Simple::offsetGet()` `Yaf_Config_Simple::offsetSet()`
