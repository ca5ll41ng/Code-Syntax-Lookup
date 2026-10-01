---
id: "zh-php-function-reflectionmethod-getdeclaringclass"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::getDeclaringClass"
title: "获取被反射的方法所在类的反射实例"
signature: "public ReflectionClass ReflectionMethod::getDeclaringClass()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.getdeclaringclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取被反射的方法所在类的反射实例

## 说明

```php
public ReflectionClass ReflectionMethod::getDeclaringClass()
```

获取被反射的方法所在的类的反射实例。

## 参数

此函数没有参数。

## 返回值

返回类的 `ReflectionClass` 反射对象，被反射的方法是这个类的一部分。

## 示例

**`ReflectionMethod::getDeclaringClass()` 示例**

```php


<?php
class HelloWorld {

    protected function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod(new HelloWorld(), 'sayHelloTo');
var_dump($reflectionMethod->getDeclaringClass());
?>

    
```

以上示例会输出：

```text


object(ReflectionClass)#2 (1) {
  ["name"]=>
  string(10) "HelloWorld"
}

    
```

## 参见

`ReflectionMethod::isAbstract()`
