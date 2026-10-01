---
id: "zh-php-function-reflectionclass-isinterface"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isInterface"
title: "检查类是否是接口（interface）"
signature: "public bool ReflectionClass::isInterface()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.isinterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类是否是接口（interface）

## 说明

```php
public bool ReflectionClass::isInterface()
```

检查类是否是接口（interface）。

## 参数

此函数没有参数。

## 返回值

如果类是接口，则返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isInterface()` 基本用法**

```php


<?php
interface SomeInterface {
    public function interfaceMethod();
}

$class = new ReflectionClass('SomeInterface');
var_dump($class->isInterface());
?>

    
```

以上示例会输出：

```text


bool(true)

    
```

## 参见

`ReflectionClass::isInstance()`
