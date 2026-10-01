---
id: "zh-php-function-reflectionmethod-invokeargs"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::invokeArgs"
title: "带参数执行"
signature: "public mixed ReflectionMethod::invokeArgs(object|null $object, array $args)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.invokeargs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 带参数执行

## 说明

```php
public mixed ReflectionMethod::invokeArgs(object|null $object, array $args)
```

使用数组给方法传送参数，并执行他。

## 参数

- **`$object`** — 调用方法的对象，如果是静态对象，设置为 `null`
- **`$args`** — 使用 `array` 传送的方法参数。

## 返回值

返回方法返回值。

## 错误／异常

如果 `$object` 指定的实例无法执行方法，那么产生 `ReflectionException` 异常。

如果方法调用失败，产生 `ReflectionException`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$args` 的键现在将解释为参数的名称，而不是默默忽略。 |

## 示例

**`ReflectionMethod::invokeArgs()` 示例**

```php


<?php
class HelloWorld {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
echo $reflectionMethod->invokeArgs(new HelloWorld(), array('Mike'));
?>

    
```

以上示例会输出：

```text


Hello Mike

    
```

## 注释

> 如果函数有参数需为引用，那么它们必须以引用方式传入。

## 参见

`ReflectionMethod::invoke()` __invoke() `call_user_func_array()`
