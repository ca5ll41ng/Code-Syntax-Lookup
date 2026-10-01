---
id: "zh-php-function-function-get-called-class"
language: "php"
lang: "zh"
category: "function"
name: "get_called_class"
title: "后期静态绑定（\"Late Static Binding\"）类的名称"
signature: "string get_called_class()"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-called-class.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 后期静态绑定（"Late Static Binding"）类的名称

## 说明

```php
string get_called_class()
```

获取静态方法调用的类名。

## 参数

此函数没有参数。

## 返回值

返回类的名称。

## 错误／异常

如果在类外调用 `get_called_class()`，将抛出 `Error`。在 PHP 8.0.0 之前，触发 `E_WARNING` 级别错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 类外调用此函数现在将触发 `Error`。 之前触发 `E_WARNING` 并且函数返回 `false`。 |

## 示例

**`get_called_class()` 的使用**

```php


<?php

class foo {
    static public function test() {
        var_dump(get_called_class());
    }
}

class bar extends foo {
}

foo::test();
bar::test();

?>

    
```

以上示例会输出：

```text


string(3) "foo"
string(3) "bar"

    
```

## 参见

`get_parent_class()` `get_class()` `is_subclass_of()`
