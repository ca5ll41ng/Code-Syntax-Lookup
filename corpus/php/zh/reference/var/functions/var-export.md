---
id: "zh-php-function-function-var-export"
language: "php"
lang: "zh"
category: "function"
name: "var_export"
title: "输出或返回变量的可解析字符串表示"
signature: "string|null var_export(mixed $value, bool $return = false)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.var-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出或返回变量的可解析字符串表示

## 说明

```php
string|null var_export(mixed $value, bool $return = false)
```

`var_export()` 函数返回关于传递给该函数的变量的结构信息，它和 `var_dump()` 函数类似，不同的是其返回的表示是合法的 PHP 代码。

## 参数

- **`$value`** — 想要输出的变量名。
- **`$return`** — 此参数为 `true` 时，`var_export()` 将返回一个变量，而不是输出它。

## 返回值

参数 `$return` 为 `true` 时返回变量。否则返回 `null`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在导出的是完整类名；以前会省略开头反斜线。 |
| 7.3.0 | 现在将 `stdClass` 对象作为数组类型转换为对象输出（ (object) array( ... )），而不是使用不存在的 `stdClass::__setState()` 方法。实际效果是，现在 `stdClass` 是可输出的，生成的代码甚至可以在早期的 PHP 版本上运行。 |

## 示例

**`var_export()` 示例**

```php


<?php
$a = array (1, 2, array ("a", "b", "c"));
var_export($a);
?>

    
```

以上示例会输出：

```text


array (
  0 => 1,
  1 => 2,
  2 => 
  array (
    0 => 'a',
    1 => 'b',
    2 => 'c',
  ),
)

    
```

```php


<?php

$b = 3.1;
$v = var_export($b, true);
echo $v;

?>

    
```

以上示例会输出：

```text


3.1

    
```

**输出 stdClass 类 (自 PHP 7.3.0 起)**

```php


<?php
$person = new stdClass;
$person->name = 'ElePHPant ElePHPantsdotter';
$person->website = 'https://php.net/elephpant.php';

var_export($person);

    
```

以上示例会输出：

```text


(object) array(
   'name' => 'ElePHPant ElePHPantsdotter',
   'website' => 'https://php.net/elephpant.php',
)

    
```

**输出对象 (自 PHP 5.1.0 起)**

```php


<?php
class A { public $var; }
$a = new A;
$a->var = 5;
var_export($a);
?>

    
```

以上示例会输出：

```text


\A::__set_state(array(
   'var' => 5,
))

    
```

**使用 __set_state()**

```php


<?php
class A
{
    public $var1;
    public $var2;

    public static function __set_state($an_array)
    {
        $obj = new A;
        $obj->var1 = $an_array['var1'];
        $obj->var2 = $an_array['var2'];
        return $obj;
    }
}

$a = new A;
$a->var1 = 5;
$a->var2 = 'foo';

eval('$b = ' . var_export($a, true) . ';'); // $b = A::__set_state(array(
                                            //    'var1' => 5,
                                            //    'var2' => 'foo',
                                            // ));
var_dump($b);
?>

    
```

以上示例会输出：

```text


object(A)#2 (2) {
  ["var1"]=>
  int(5)
  ["var2"]=>
  string(3) "foo"
}

    
```

## 注释

> 类型为 `resource` 的变量无法通过此函数输出。

> `var_export()` 不处理循环引用，因为几乎不可能为此生成可解析的 PHP 代码。如果您想对数组或对象的完整表示进行操作，请使用 `serialize()`。

> PHP 8.2.0 之前，当 `var_export()` 输出对象时，为了最大的兼容性，命名空间类的类名中不包含前导反斜杠。

> 为了能够执行 `var_export()` 生成的 PHP ，所有被处理的对象必须实现 __set_state 魔术方法。 唯一的例外是 `stdClass` ，它作为数组类型转换为对象输出。

## 参见

`print_r()` `serialize()` `var_dump()`
