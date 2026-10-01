---
id: "zh-php-function-reflectionmethod-invoke"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::invoke"
title: "Invoke"
signature: "public mixed ReflectionMethod::invoke(object|null $object, mixed $args)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.invoke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Invoke

## 说明

```php
public mixed ReflectionMethod::invoke(object|null $object, mixed $args)
```

执行反射的方法。

## 参数

- **`$object`** — 如果执行的方法是静态类，那么这个参数传送 `null`。
- **`$args`** — 0，或者传送给方法的参数列表。可以通过这个参数，给方法传送大量的参数。

## 返回值

返回方法的返回值

## 错误／异常

如果 `$object` 并没有包含一个可以使用的类实例，那么将产生 一个 `ReflectionException`。

如果方法调用失败，也会产生一个 `ReflectionException`。

## 示例

**`ReflectionMethod::invoke()` 示例**

```php


<?php
class HelloWorld {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
echo $reflectionMethod->invoke(new HelloWorld(), 'Mike');
?>

    
```

以上示例会输出：

```text


Hello Mike

    
```

## 注释

> 当需要引用参数时，不能使用 `ReflectionMethod::invoke()`。必须使用 `ReflectionMethod::invokeArgs()` 代替（在参数列表传递引用）。

## 参见

`ReflectionMethod::invokeArgs()` __invoke() `call_user_func()`
