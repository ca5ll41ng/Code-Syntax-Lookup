---
id: "zh-php-function-closure-bind"
language: "php"
lang: "zh"
category: "function"
name: "Closure::bind"
title: "用特定的绑定对象和类作用域复制闭包。"
signature: "public static Closure|null Closure::bind(Closure $closure, object|null $newThis, object|string|null $newScope = \"static\")"
module: "language"
source_url: "https://www.php.net/manual/zh/closure.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用特定的绑定对象和类作用域复制闭包。

## 说明

```php
public static Closure|null Closure::bind(Closure $closure, object|null $newThis, object|string|null $newScope = "static")
```

这个方法是 `Closure::bindTo()` 的静态版本。查看它的文档获取更多信息。

## 参数

- **`$closure`** — 需要绑定的匿名函数。
- **`$newThis`** — 需要绑定到匿名函数的对象，或者 `null` 创建未绑定的闭包。
- **`$newScope`** — 想要绑定给闭包的类作用域，或者 'static' 表示不改变。如果传入一个对象，则使用这个对象的类型名。 类作用域用来决定在闭包中 $this 对象的 私有、保护方法 的可见性。 不允许内置类（的对象）作为参数传递。

## 返回值

返回一个新的 `Closure` 对象，失败时返回 `null`。

## 示例

**`Closure::bind()` 示例**

```php


<?php
class A {
    private static $sfoo = 1;
    private $ifoo = 2;
}
$cl1 = static function() {
    return A::$sfoo;
};
$cl2 = function() {
    return $this->ifoo;
};

$bcl1 = Closure::bind($cl1, null, 'A');
$bcl2 = Closure::bind($cl2, new A(), 'A');
echo $bcl1(), "\n";
echo $bcl2(), "\n";
?>

   
```

以上示例的输出类似于：

```text


1
2

   
```

## 参见

 匿名函数 `Closure::bindTo()`
