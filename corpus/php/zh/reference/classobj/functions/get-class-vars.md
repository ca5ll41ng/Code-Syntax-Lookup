---
id: "zh-php-function-function-get-class-vars"
language: "php"
lang: "zh"
category: "function"
name: "get_class_vars"
title: "获取类的默认属性"
signature: "array get_class_vars(string $class)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-class-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取类的默认属性

## 说明

```php
array get_class_vars(string $class)
```

获取指定类的默认属性。

## 参数

- **`$class`** — 类名

## 返回值

返回从当前作用域中声明的可见属性组成的关联数组及其默认值。生成的数组元素采用 `varname => value` 的形式，如果出现错误，则返回 `false`。

## 示例

**`get_class_vars()` 示例**

```php


<?php

class MyClass
{
    public $var1; // 这没有明确默认值（技术上默认为 NULL）...
    public $var2 = "xyz";
    public $var3 = 100;
    private $var4;

    public function __construct()
    {
        // 变更属性
        $this->var1 = "foo";
        $this->var2 = "bar";
        return true;
    }
}

$my_class = new MyClass();

$class_vars = get_class_vars(get_class($my_class));

foreach ($class_vars as $name => $value) {
    echo "{$name}: ", var_export($value, true), "\n";
}

?>

    
```

以上示例会输出：

```text


var1: NULL
var2: 'xyz'
var3: 100

    
```

**`get_class_vars()` 和作用域行为**

```php


<?php

function format($array)
{
    return implode('|', array_keys($array)) . "\r\n";
}

class TestCase
{
    public $a    = 1;
    protected $b = 2;
    private $c   = 3;

    public static function expose()
    {
        echo format(get_class_vars(__CLASS__));
    }
}

TestCase::expose();
echo format(get_class_vars('TestCase'));

?>

    
```

以上示例会输出：

```text


// 5.0.0
a| * b| TestCase c
a| * b| TestCase c

// 5.0.1 - 5.0.2
a|b|c
a|b|c

// 5.0.3 +
a|b|c
a

    
```

## 参见

`get_class_methods()` `get_object_vars()`
