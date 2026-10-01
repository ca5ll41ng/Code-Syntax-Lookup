---
id: "zh-php-function-yaf-config-simple-current"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::current"
title: "获取当前配置项的值"
signature: "public mixed Yaf_Config_Simple::current()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前配置项的值

## 说明

```php
public mixed Yaf_Config_Simple::current()
```

返回迭代过程中当前配置项的值。数组类型的值会被包装为 `Yaf_Config_Abstract` 对象。

## 参数

此函数没有参数。

## 返回值

当前配置项的值，如果位置无效则返回 `false`。

## 示例

**`Yaf_Config_Simple::current()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'version'     => '1.0',
]);

$config->rewind();
while ($config->valid()) {
    $value = $config->current();
    if ($value instanceof Yaf_Config_Abstract) {
        echo $config->key(), " => <config node>\n";
    } else {
        echo $config->key(), " => ", $value, "\n";
    }
    $config->next();
}
?>

   
```

以上示例的输出类似于：

```text


application => <config node>
version => 1.0

   
```

## 参见

 `Yaf_Config_Simple::key()` `Yaf_Config_Simple::next()` `Yaf_Config_Simple::rewind()` `Yaf_Config_Simple::valid()`
