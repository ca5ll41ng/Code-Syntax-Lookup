---
id: "zh-php-function-function-is-subclass-of"
language: "php"
lang: "zh"
category: "function"
name: "is_subclass_of"
title: "检查对象是否继承或者实现（implement）此类"
signature: "bool is_subclass_of(mixed $object_or_class, string $class, bool $allow_string = true)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.is-subclass-of.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查对象是否继承或者实现（implement）此类

## 说明

```php
bool is_subclass_of(mixed $object_or_class, string $class, bool $allow_string = true)
```

检查指定的 `$object_or_class` 是否继承或者实现（implement） `$class`。

## 参数

- **`$object_or_class`** — 类名或者对象实例。如果类不存在，也不会报错。
- **`$class`** — 类名
- **`$allow_string`** — 如果此参数设置为 false，将不允许将字符串类名传递给 `$object_or_class`。如果类不存在，这也可以防止调用自动加载器。

## 返回值

如果对象 `$object_or_class` 属于 `$class` 的子类，则返回 `true`，否则返回 `false`。

## 示例

**`is_subclass_of()` 示例**

```php


<?php
// 定义类
class WidgetFactory
{
  var $oink = 'moo';
}

// 定义子类
class WidgetFactory_Child extends WidgetFactory
{
  var $oink = 'oink';
}

// 创建新对象
$WF = new WidgetFactory();
$WFC = new WidgetFactory_Child();

if (is_subclass_of($WFC, 'WidgetFactory')) {
  echo "yes, \$WFC is a subclass of WidgetFactory\n";
} else {
  echo "no, \$WFC is not a subclass of WidgetFactory\n";
}


if (is_subclass_of($WF, 'WidgetFactory')) {
  echo "yes, \$WF is a subclass of WidgetFactory\n";
} else {
  echo "no, \$WF is not a subclass of WidgetFactory\n";
}


if (is_subclass_of('WidgetFactory_Child', 'WidgetFactory')) {
  echo "yes, WidgetFactory_Child is a subclass of WidgetFactory\n";
} else {
  echo "no, WidgetFactory_Child is not a subclass of WidgetFactory\n";
}
?>

    
```

以上示例会输出：

```text


yes, $WFC is a subclass of WidgetFactory
no, $WF is not a subclass of WidgetFactory
yes, WidgetFactory_Child is a subclass of WidgetFactory

    
```

**`is_subclass_of()` 使用接口示例**

```php


<?php
// 定义接口
interface MyInterface
{
  public function MyFunction();
}

// 定义实现了接口的类
class MyClass implements MyInterface
{
  public function MyFunction()
  {
    return "MyClass Implements MyInterface!";
  }
}

// 实例化对象
$my_object = new MyClass;

// 自 5.3.7 起可用

// 使用类的对象实例进行检查
if (is_subclass_of($my_object, 'MyInterface')) {
  echo "Yes, \$my_object is a subclass of MyInterface\n";
} else {
  echo "No, \$my_object is not a subclass of MyInterface\n";
}

// 使用字符串类名进行检查
if (is_subclass_of('MyClass', 'MyInterface')) {
  echo "Yes, MyClass is a subclass of MyInterface\n";
} else {
  echo "No, MyClass is not a subclass of MyInterface\n";
}
?>

    
```

以上示例会输出：

```text


Yes, $my_object is a subclass of MyInterface
Yes, MyClass is a subclass of MyInterface

    
```

## 注释

> 如果此类不是已知类，使用此函数会使用任何已注册的 autoloader。

## 参见

`get_class()` `get_parent_class()` `is_a()` `class_parents()`
