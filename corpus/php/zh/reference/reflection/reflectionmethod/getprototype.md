---
id: "zh-php-function-reflectionmethod-getprototype"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::getPrototype"
title: "返回方法原型 (如果存在)"
signature: "public ReflectionMethod ReflectionMethod::getPrototype()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.getprototype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回方法原型 (如果存在)

## 说明

```php
public ReflectionMethod ReflectionMethod::getPrototype()
```

返回方法原型。

## 参数

此函数没有参数。

## 返回值

方法原型的 `ReflectionMethod` 实例。

## 错误／异常

如果方法没有原型，抛出 `ReflectionException`。

## 示例

**`ReflectionMethod::getPrototype()` 示例**

```php


<?php
class Hello {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}
class HelloWorld extends Hello {

    public function sayHelloTo($name) {
        return 'Hello world: ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
var_dump($reflectionMethod->getPrototype());
?>

    
```

以上示例会输出：

```text


object(ReflectionMethod)#2 (2) {
  ["name"]=>
  string(10) "sayHelloTo"
  ["class"]=>
  string(5) "Hello"
}

    
```

## 参见

`ReflectionMethod::getModifiers()` `ReflectionMethod::hasPrototype()`
