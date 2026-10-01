---
id: "zh-php-function-closure-bindto"
language: "php"
lang: "zh"
category: "function"
name: "Closure::bindTo"
title: "用特定的绑定对象和类作用域复制闭包。"
signature: "public Closure|null Closure::bindTo(object|null $newThis, object|string|null $newScope = \"static\")"
module: "language"
source_url: "https://www.php.net/manual/zh/closure.bindto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用特定的绑定对象和类作用域复制闭包。

## 说明

```php
public Closure|null Closure::bindTo(object|null $newThis, object|string|null $newScope = "static")
```

创建并返回一个 匿名函数， 它与当前对象的函数体相同、绑定了同样变量，但可以绑定不同的对象，也可以绑定新的类作用域。

“绑定的对象”决定了函数体中的 `$this` 的取值，“类作用域”代表一个类型、决定在这个匿名函数中能够调用哪些 private 和 protected 的方法。 也就是说，此时 $this 可以调用的方法，与 `$newScope` 类的成员函数是相同的。

静态闭包不能有绑定的对象（ `$newThis` 参数的值应该设为 `null`）不过仍然可以用 bindTo 方法来改变它们的类作用域。

此方法确保对于非静态闭包，拥有绑定实例也意味着被限定作用域，反之亦然。 为此，非静态闭包给定一个 `null` 实例的作用域可以使其变为静态， 非静态无作用域的闭包给定一个非 null 的实例作用在一个非指定类。

> 如果你只是想要复制一个匿名函数，可以用 cloning 代替。

## 参数

- **`$newThis`** — 绑定给匿名函数的一个对象，或者 `null` 来取消绑定。
- **`$newScope`** — 关联到匿名函数的类作用域，或者 'static' 保持当前状态。如果是一个对象，则使用这个对象的类型为新的类作用域。 这会决定绑定的对象的 保护、私有成员 方法的可见性。 不允许内部类（的对象）作为参数传递。

## 返回值

返回新创建的 `Closure` 对象， 或者失败时返回 `null` 。

## 示例

**`Closure::bindTo()` 实例**

```php


<?php

class A
{
    private $val;

    public function __construct($val)
    {
        $this->val = $val;
    }

    public function getClosure()
    {
        // 返回绑定到此对象和作用域的闭包
        return function() {
            return $this->val;
        };
    }
}

$ob1 = new A(1);
$ob2 = new A(2);

$cl = $ob1->getClosure();
echo $cl(), "\n";

$cl = $cl->bindTo($ob2);
echo $cl(), "\n";

?>

   
```

以上示例的输出类似于：

```text


1
2

   
```

## 参见

 匿名函数 `Closure::bind()`
