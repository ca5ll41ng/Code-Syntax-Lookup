---
id: "zh-php-function-reflectionmethod-tostring"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::__toString"
title: "返回反射方法对象的字符串表达"
signature: "public string ReflectionMethod::__toString()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回反射方法对象的字符串表达

## 说明

```php
public string ReflectionMethod::__toString()
```

返回反射方法对象的字符串表达。

## 参数

此函数没有参数。

## 返回值

`ReflectionMethod` 实例的字符串表示。

## 示例

**`ReflectionMethod::__toString()` 示例**

```php


<?php
class HelloWorld {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod(new HelloWorld(), 'sayHelloTo');
echo $reflectionMethod;
?>

    
```

以上示例会输出：

```text


Method [ <user> public method sayHelloTo ] {
  @@ /var/www/examples/reflection.php 16 - 18

  - Parameters [1] {
    Parameter #0 [ <required> $name ]
  }
}


    
```

## 参见

`ReflectionMethod::export()` __toString()
