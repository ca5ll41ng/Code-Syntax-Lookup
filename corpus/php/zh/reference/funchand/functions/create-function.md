---
id: "zh-php-function-function-create-function"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["create_function code_injection"],"cwe":["CWE-95"]}
name: "create_function"
title: "通过执行代码字符串创建动态函数"
signature: "string create_function(string $args, string $code)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.create-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过执行代码字符串创建动态函数

## 说明

```php
string create_function(string $args, string $code)
```

从传递的参数中创建动态参数，并返回它的唯一名字。

> 此函数在内部执行 `eval()`，因此具有跟 `eval()` 相同的安全问题。还有性能以及内存使用较差的特性，因为创建的函数是全局的且无法释放。
>
> 应该使用原生匿名函数。

## 参数

It is normally advisable to pass these parameters as single quoted strings. If using double quoted strings, variable names in the code need to be escaped carefully, e.g. `\$somevar`.

- **`$args`** — The function arguments, as a single comma-separated string.
- **`$code`** — The function code.

## 返回值

Returns a unique function name as a string, 或者在失败时返回 `false`. Note that the name contains a non-printable character (`"\0"`), so care should be taken when printing the name or incorporating it in any other string.

## 示例

**Creating a function dynamically, with `create_function()` or anonymous functions**

You can use a dynamically created function, to (for example) create a function from information gathered at run time. First, using `create_function()`:

```php


<?php
$newfunc = create_function('$a,$b', 'return "ln($a) + ln($b) = " . log($a * $b);');
echo $newfunc(2, M_E) . "\n";
?>

    
```

Now the same code, using an anonymous function; note that the code and arguments are no longer contained in strings:

```php


<?php
$newfunc = function($a,$b) { return "ln($a) + ln($b) = " . log($a * $b); };
echo $newfunc(2, M_E) . "\n";
?>

    
```

以上示例会输出：

```text


ln(2) + ln(2.718281828459) = 1.6931471805599

    
```

**Making a general processing function, with `create_function()` or anonymous functions**

Another use could be to have general handler function that can apply a set of operations to a list of parameters:

```php


<?php
function process($var1, $var2, $farr)
{
    foreach ($farr as $f) {
        echo $f($var1, $var2) . "\n";
    }
}

// create a bunch of math functions
$farr = array(
    create_function('$x,$y', 'return "some trig: ".(sin($x) + $x*cos($y));'),
    create_function('$x,$y', 'return "a hypotenuse: ".sqrt($x*$x + $y*$y);'),
    create_function('$a,$b', 'if ($a >=0) {return "b*a^2 = ".$b*sqrt($a);} else {return false;}'),
    create_function('$a,$b', "return \"min(b^2+a, a^2,b) = \".min(\$a*\$a+\$b,\$b*\$b+\$a);"),
    create_function('$a,$b', 'if ($a > 0 && $b != 0) {return "ln(a)/b = ".log($a)/$b; } else { return false; }')
);

echo "\nUsing the first array of dynamic functions\n";
echo "parameters: 2.3445, M_PI\n";
process(2.3445, M_PI, $farr);

// now make a bunch of string processing functions
$garr = array(
    create_function('$b,$a', 'if (strncmp($a, $b, 3) == 0) return "** \"$a\" '.
        'and \"$b\"\n** Look the same to me! (looking at the first 3 chars)";'),
    create_function('$a,$b', 'return "CRCs: " . crc32($a) . ", ".crc32($b);'),
    create_function('$a,$b', 'return "similar(a,b) = " . similar_text($a, $b, $p) . "($p%)";')
);
echo "\nUsing the second array of dynamic functions\n";
process("Twas brilling and the slithy toves", "Twas the night", $garr);
?>

    
```

Again, here is the same code using anonymous functions. Note that variable names in the code no longer need to be escaped, because they are not enclosed in a string.

```php


<?php
function process($var1, $var2, $farr)
{
    foreach ($farr as $f) {
        echo $f($var1, $var2) . "\n";
    }
}

// create a bunch of math functions
$farr = array(
    function($x,$y) { return "some trig: ".(sin($x) + $x*cos($y)); },
    function($x,$y) { return "a hypotenuse: ".sqrt($x*$x + $y*$y); },
    function($a,$b) { if ($a >=0) {return "b*a^2 = ".$b*sqrt($a);} else {return false;} },
    function($a,$b) { return "min(b^2+a, a^2,b) = " . min($a*$a+$b, $b*$b+$a); },
    function($a,$b) { if ($a > 0 && $b != 0) {return "ln(a)/b = ".log($a)/$b; } else { return false; } }
);

echo "\nUsing the first array of dynamic functions\n";
echo "parameters: 2.3445, M_PI\n";
process(2.3445, M_PI, $farr);

// now make a bunch of string processing functions
$garr = array(
    function($b,$a) { if (strncmp($a, $b, 3) == 0) return "** \"$a\" " .
        "and \"$b\"\n** Look the same to me! (looking at the first 3 chars)"; },
    function($a,$b) { return "CRCs: " . crc32($a) . ", ".crc32($b); },
    function($a,$b) { return "similar(a,b) = " . similar_text($a, $b, $p) . "($p%)"; }
);
echo "\nUsing the second array of dynamic functions\n";
process("Twas brilling and the slithy toves", "Twas the night", $garr);
?>

    
```

以上示例会输出：

```text


Using the first array of dynamic functions
parameters: 2.3445, M_PI
some trig: -1.6291725057799
a hypotenuse: 3.9199852871011
b*a^2 = 4.8103313314525
min(b^2+a, a^2,b) = 8.6382729035898
ln(a)/b = 0.27122299212594

Using the second array of dynamic functions
** "Twas the night" and "Twas brilling and the slithy toves"
** Look the same to me! (looking at the first 3 chars)
CRCs: 3569586014, 342550513
similar(a,b) = 11(45.833333333333%)

    
```

**Using dynamic functions as callback functions**

Perhaps the most common use for dynamic functions is to pass them as callbacks, for example when using `array_walk()` or `usort()`.

```php


<?php
$av = array("the ", "a ", "that ", "this ");
array_walk($av, create_function('&$v,$k', '$v = $v . "mango";'));
print_r($av);
?>

    
```

Converted to an anonymous function:

```php


<?php
$av = array("the ", "a ", "that ", "this ");
array_walk($av, function(&$v,$k) { $v = $v . "mango"; });
print_r($av);
?>

    
```

以上示例会输出：

```text


Array
(
  [0] => the mango
  [1] => a mango
  [2] => that mango
  [3] => this mango
)

    
```

Sorting strings from longest to shortest with `create_function()`:

```php


<?php
$sv = array("small", "a big string", "larger", "it is a string thing");
echo "Original:\n";
print_r($sv);
echo "Sorted:\n";
usort($sv, create_function('$a,$b','return strlen($b) - strlen($a);'));
print_r($sv);
?>

    
```

Converted to an anonymous function:

```php


<?php
$sv = array("small", "a big string", "larger", "it is a string thing");
echo "Original:\n";
print_r($sv);
echo "Sorted:\n";
usort($sv, function($a,$b) { return strlen($b) - strlen($a); });
print_r($sv);
?>

    
```

以上示例会输出：

```text


Original:
Array
(
  [0] => small
  [1] => a big string
  [2] => larger
  [3] => it is a string thing
)
Sorted:
Array
(
  [0] => it is a string thing
  [1] => a big string
  [2] => larger
  [3] => small
)

    
```

## 参见

匿名函数
