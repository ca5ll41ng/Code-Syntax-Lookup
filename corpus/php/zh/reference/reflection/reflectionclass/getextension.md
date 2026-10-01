---
id: "zh-php-function-reflectionclass-getextension"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getExtension"
title: "根据已定义的类获取所在扩展的 `ReflectionExtension` 对象"
signature: "public ReflectionExtension|null ReflectionClass::getExtension()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getextension.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据已定义的类获取所在扩展的 `ReflectionExtension` 对象

## 说明

```php
public ReflectionExtension|null ReflectionClass::getExtension()
```

获取已定义类的扩展的 `ReflectionExtension` 对象。

## 参数

此函数没有参数。

## 返回值

类所处的扩展的 `ReflectionExtension` 对象的表示，如果是用户定义的类则返回 `null`。

## 示例

**`ReflectionClass::getExtension()` 的基本用法**

```php


<?php
$class = new ReflectionClass('ReflectionClass');
$extension = $class->getExtension();
var_dump($extension);
?>

    
```

以上示例会输出：

```text


object(ReflectionExtension)#2 (1) {
  ["name"]=>
  string(10) "Reflection"
}

    
```

## 参见

`ReflectionClass::getExtensionName()`
