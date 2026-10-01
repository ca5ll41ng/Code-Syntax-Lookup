---
id: "zh-php-function-function-get-class"
language: "php"
lang: "zh"
category: "function"
name: "get_class"
title: "返回对象的类名"
signature: "string get_class([object $object = ...])"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-class.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回对象的类名

## 说明

```php
string get_class([object $object = ...])
```

返回指定 `$object` 的类名。

## 参数

- **`$object`** — 要测试的对象。
  > 自 PHP 7.2.0 起，`$object` 不再允许显式传递 `null` 并抛出 `E_WARNING`。自 PHP 8.0.0 起，传递 `null` 会抛出 `TypeError`。



## 返回值

返回 `$object` 实例的类名。

如果 `$object` 是命名空间中某个类的实例，则会返回带上命名空间的类名。

## 错误／异常

如果用除对象外的其它类型调用 `get_class()`，则会抛出 `TypeError`。在 PHP 8.0.0 之前，会引发 `E_WARNING` 级别的错误。

如果在类外不带任何参数调用 `get_class()`，会抛出 `Error`。在 PHP 8.0.0 之前，会引发 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 不带参数调用 `get_class()` 现在会发出 `E_DEPRECATED` warning；之前，在类内部调用此函数会返回该类的名称。 |
| 8.0.0 | 在类外不带任何参数调用此函数将会抛出 `Error`。之前会引发 `E_WARNING` 并且函数会返回 `false`。 |
| 7.2.0 | 在此版本之前，`$object` 的默认值是 `null`，它与不传递任何值有相同的效果。`$object` 已经移除了默认值 `null` 且不再是有效的输入。 |

## 示例

**使用 `get_class()`**

```php


<?php

class foo {
    function name()
    {
        echo "My name is " , get_class($this) , "\n";
    }
}

// 创建对象
$bar = new foo();

// 类外调用
echo "Its name is " , get_class($bar) , "\n";

// 类内调用
$bar->name();

?>

    
```

以上示例会输出：

```text


Its name is foo
My name is foo

    
```

**父类中使用 `get_class()`**

```php


<?php

abstract class bar {
    public function __construct()
    {
        var_dump(get_class($this));
        var_dump(get_class());
    }
}

class foo extends bar {
}

new foo;

?>

    
```

以上示例会输出：

```text


string(3) "foo"
string(3) "bar"

    
```

**命名空间中的类中使用 `get_class()`**

```php


<?php

namespace Foo\Bar;

class Baz {
    public function __construct()
    {

    }
}

$baz = new \Foo\Bar\Baz;

var_dump(get_class($baz));
?>

    
```

以上示例会输出：

```text


string(11) "Foo\Bar\Baz"

    
```

## 参见

`get_called_class()` `get_parent_class()` `gettype()` `get_debug_type()` `is_subclass_of()`
