---
id: "zh-php-function-reflectionmethod-construct"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::__construct"
title: "构造 ReflectionMethod"
signature: "public ReflectionMethod::__construct(object|string $objectOrMethod, string $method)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造 ReflectionMethod

## 说明

```php
public ReflectionMethod::__construct(object|string $objectOrMethod, string $method)
```

替代签名（不支持命名参数）：

```php
public ReflectionMethod::__construct(string $classMethod)
```

> 从 PHP 8.4.0 开始，替代签名已被弃用，请使用 `ReflectionMethod::createFromMethodName()` 代替。

构造新的 `ReflectionMethod`。

## 参数

- **`$objectOrMethod`** — 包含方法的类名或者对象（类的实例）。
- **`$method`** — 方法名。
- **`$classMethod`** — 类名称和方法名称，通过 `::` 分隔

## 错误／异常

如果指定的方法不存在，那么抛出 `ReflectionException`。

## 示例

**`ReflectionMethod::__construct()` 示例**

```php


<?php
class Counter
{
    private static $c = 0;

    /**
     * Increment counter
     *
     * @final
     * @static
     * @access  public
     * @return  int
     */
    final public static function increment()
    {
        return ++self::$c;
    }
}

// 创建 ReflectionMethod 类的实例
$method = new ReflectionMethod('Counter', 'increment');

// 打印出基本信息
printf(
    "===> The %s%s%s%s%s%s%s method '%s' (which is %s)\n" .
    "     declared in %s\n" .
    "     lines %d to %d\n" .
    "     having the modifiers %d[%s]\n",
        $method->isInternal() ? 'internal' : 'user-defined',
        $method->isAbstract() ? ' abstract' : '',
        $method->isFinal() ? ' final' : '',
        $method->isPublic() ? ' public' : '',
        $method->isPrivate() ? ' private' : '',
        $method->isProtected() ? ' protected' : '',
        $method->isStatic() ? ' static' : '',
        $method->getName(),
        $method->isConstructor() ? 'the constructor' : 'a regular method',
        $method->getFileName(),
        $method->getStartLine(),
        $method->getEndline(),
        $method->getModifiers(),
        implode(' ', Reflection::getModifierNames($method->getModifiers()))
);

// 打印注释文档
printf("---> Documentation:\n %s\n", var_export($method->getDocComment(), true));

// 打印存在的静态变量
if ($statics= $method->getStaticVariables()) {
    printf("---> Static variables: %s\n", var_export($statics, true));
}

// 执行方法
printf("---> Invocation results in: ");
var_dump($method->invoke(NULL));
?>

    
```

以上示例的输出类似于：

```text


===> The user-defined final public static method 'increment' (which is a regular method)
     declared in /Users/philip/cvs/phpdoc/test.php
     lines 14 to 17
     having the modifiers 261[final public static]
---> Documentation:
 '/**
     * Increment counter
     *
     * @final
     * @static
     * @access  public
     * @return  int
     */'
---> Invocation results in: int(1)

    
```

## 参见

`ReflectionMethod::export()` Constructors
