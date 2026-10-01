---
id: "zh-php-syntax-language-types-string"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.string"
title: "String 字符串"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# String 字符串

一个字符串 `string` 就是由一系列的字符组成，其中每个字符等同于一个字节。这意味着 PHP 只能支持 256 的字符集，因此不支持 Unicode 。详见字符串类型详解。

> 在 32 位版本中，`string` 最大可以达到 2GB（最多 2147483647 字节）。

### 语法

一个字符串可以用 4 种方式表达：

- 单引号
- 双引号
- heredoc 语法结构
- nowdoc 语法结构

#### 单引号

定义一个字符串的最简单的方法是用单引号把它包围起来（字符 `'`）。

要表达一个单引号自身，需在它的前面加个反斜线（`\`）来转义。要表达一个反斜线自身，则用两个反斜线（`\\`）。其它任何方式的反斜线都会被当成反斜线本身：也就是说如果想使用其它转义序列例如 `\r` 或者 `\n`，并不代表任何特殊含义，就单纯是这两个字符本身。

> 不像双引号和 heredoc 语法结构，在单引号字符串中的变量和特殊字符的转义序列将*不会*被替换。

**Syntax Variants**

```php


<?php
echo 'this is a simple string', PHP_EOL;

// 可以录入多行
echo 'You can also have embedded newlines in
strings this way as it is
okay to do', PHP_EOL;

// 输出：Arnold once said: "I'll be back"
echo 'Arnold once said: "I\'ll be back"', PHP_EOL;

// 输出：You deleted C:\*.*?
echo 'You deleted C:\\*.*?', PHP_EOL;

// 输出：You deleted C:\*.*?
echo 'You deleted C:\*.*?', PHP_EOL;

// 输出：This will not expand: \n a newline
echo 'This will not expand: \n a newline', PHP_EOL;

// 输出：Variables do not $expand $either
echo 'Variables do not $expand $either', PHP_EOL;
?>

    
```

#### 双引号

如果字符串是包围在双引号（`"`)）中， PHP 将对以下特殊的字符进行解析：

| 序列 | 含义 |
| --- | --- |
| `\n` | 换行（ASCII 字符集中的 LF 或 0x0A (10)） |
| `\r` | 回车（ASCII 字符集中的 CR 或 0x0D (13)） |
| `\t` | 水平制表符（ASCII 字符集中的 HT 或 0x09 (9)） |
| `\v` | 垂直制表符（ASCII 字符集中的 VT 或 0x0B (11)） |
| `\e` | Escape（ASCII 字符集中的 ESC 或 0x1B (27)） |
| `\f` | 换页（ASCII 字符集中的 FF 或 0x0C (12)） |
| `\\` | 反斜线 |
| `\$` | 美元标记 |
| `\"` | 双引号 |
| `\[0-7]{1,3}` | 八进制：匹配正则表达式序列 `[0-7]{1,3}` 的是八进制表示法的字符序列（比如 `"\101" === "A"`），会静默溢出以适应一个字节（例如 `"\400" === "\000"`） |
| `\x[0-9A-Fa-f]{1,2}` | 十六进制：匹配正则表达式序列 `[0-9A-Fa-f]{1,2}` 的是十六进制表示法的一个字符（比如 `"\x41" === "A"`） |
| `\u{[0-9A-Fa-f]+}` | Unicode：匹配正则表达式 `[0-9A-Fa-f]+` 的字符序列是 unicode 码位，该码位能作为 UTF-8 的表达方式输出字符串。序列中必须包含大括号。例如 `"\u{41}" === "A"` |

和单引号字符串一样，转义任何其它字符都会导致反斜线被显示出来。

用双引号定义的字符串最重要的特征是变量会被解析，详见变量插值。

#### Heredoc 结构

第三种表达字符串的方法是用 heredoc 句法结构：`<<<`。在该运算符之后要提供一个标识符，然后换行。接下来是字符串 `string` 本身，最后要用前面定义的标识符作为结束标志。

结束标识符可以使用空格或制表符（tab）缩进，此时文档字符串会删除所有缩进。 在 PHP 7.3.0 之前的版本中，结束时所引用的标识符*必须*在该行的第一列。

而且，标识符的命名也要像其它标签一样遵守 PHP 的规则：只能包含字母、数字和下划线，并且必须以字母和下划线作为开头。

**PHP 7.3.0 之后的基础 Heredoc 示例**

```php


<?php
// 无缩进
echo <<<END
      a
     b
    c
\n
END;
// 4 空格缩进
echo <<<END
      a
     b
    c
    END;

    
```

以上示例在 PHP 7.3 中的输出：

```text


      a
     b
    c
  a
 b
c

    
```

如果结束标识符的缩进超过内容的任何一行的缩进，则将抛出 `ParseError` 异常：

**结束标识符的缩进不能超过正文的任何一行**

```php


<?php
echo <<<END
  a
 b
c
   END;

    
```

以上示例在 PHP 7.3 中的输出：

```text


Parse error: Invalid body indentation level (expecting an indentation level of at least 3) in example.php on line 4

    
```

制表符也可以缩进结束标识符，但是，关于缩进结束标识符和内容， 制表符和空格*不能*混合使用。在以上任何情况下， 将会抛出 `ParseError` 异常。 之所以包含这些空白限制，是因为混合制表符和空格来缩进不利于易读性。

**内容（空白）和结束标识符的不同缩进**

```php


<?php
// 以下所有代码都不起作用。
// 正文（空格）和结束标记（制表符），不同的缩进
{
	echo <<<END
	 a
		END;
}
// 在正文中混合空格和制表符
{
    echo <<<END
    	a
     END;
}
// 在结束标记中混合空格和制表符
{
	echo <<<END
		  a
		 END;
}

    
```

以上示例在 PHP 7.3 中的输出：

```text


Parse error: Invalid indentation - tabs and spaces cannot be mixed in example.php line 8

    
```

内容字符串的结束标识符后面不需要跟分号或者换行符。 例如，从 PHP 7.3.0 开始允许以下代码：

**在结束标识符后继续表达式**

```php


<?php
$values = [<<<END
a
  b
    c
END, 'd e f'];
var_dump($values);

    
```

以上示例在 PHP 7.3 中的输出：

```text


array(2) {
  [0] =>
  string(11) "a
  b
    c"
  [1] =>
  string(5) "d e f"
}

    
```

> 如果在某一行的开头找到了结束标识符，那么不管它是否是另外一个单词的一部分， 它都可能看作结束标识符并引起 `ParseError`。
>
> **字符串内容中的结束标识符往往会导致 ParseError**
>
> ```php
>
>
> <?php
> $values = [<<<END
> a
> b
> END ING
> END, 'd e f'];
>
>      
> ```
>
> 以上示例在 PHP 7.3 中的输出：
>
> ```text
>
>
> Parse error: syntax error, unexpected identifier "ING", expecting "]" in example.php on line 5
>
>      
> ```
>
> 为了避免这个问题，遵循以下简单的规则较为安全： *不要选择一个出现在文本主体中的单词作为结束标识符*。

> 在 PHP 7.3.0 之前，请务必注意，带有结束标识符的行不能包含除 (`;`)外的任何其他字符。 这意味着标识符*不能缩进*，分号的前后也不能有任何空白或制表符。更重要的是结束标识符的前面必须是个被本地操作系统认可的换行，比如在 UNIX 和 macOS 系统中是 `\n`，而结束定界符之后也必须紧跟一个换行。
>
> 如果不遵守该规则导致结束标识不“干净”，PHP 将认为它不是结束标识符而继续寻找。如果在文件结束前也没有找到一个正确的结束标识符，PHP 将会在最后一行产生一个解析错误。
>
> **PHP 7.3.0 之前的错误示例**
>
> ```php
>
>       
>
> <?php
> class foo {
>     public $bar = <<<EOT
> bar
>     EOT;
> }
> // 不能缩进标识符
> ?>
>
>      
> ```
>
> **在 PHP 7.3.0 之前有效示例**
>
> ```php
>
>       
>
> <?php
> class foo {
>     public $bar = <<<EOT
> bar
> EOT;
> }
> ?>
>
>      
> ```
>
> Heredocs 结构不能用来初始化类的属性。

Heredoc 结构就象是没有双引号的 `string`，这就是说在 heredoc 结构中单引号不用被转义，但是上文中列出的转义序列还可以使用。变量将被替换，但在 heredoc 结构中含有复杂的变量时要像 `string` 一样格外小心。

**Heredoc 结构的字符串示例**

```php


<?php
$str = <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;

/* 含有变量的更复杂示例 */
class foo
{
    var $foo;
    var $bar;

    function __construct()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

echo <<<EOT
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;
?>

    
```

以上示例会输出：

```text


My name is "MyName". I am printing some Foo.
Now, I am printing some Bar2.
This should print a capital 'A': A
   
```

也可以把 Heredoc 结构用在函数参数中来传递数据：

**Heredoc 结构在参数中的示例**

```php


<?php
var_dump(array(<<<EOD
foobar!
EOD
));
?>

    
```

可以用 Heredoc 结构来初始化静态变量和类的属性和常量：

**使用 Heredoc 结构来初始化静态值**

```php


<?php
// 静态变量
function foo()
{
    static $bar = <<<LABEL
Nothing in here...
LABEL;
}

// 类的常量、属性
class foo
{
    const BAR = <<<FOOBAR
Constant example
FOOBAR;

    public $baz = <<<FOOBAR
Property example
FOOBAR;
}
?>

    
```

还可以在 Heredoc 结构中用双引号来声明标识符：

**在 heredoc 结构中使用双引号**

```php


<?php
echo <<<"FOOBAR"
Hello World!
FOOBAR;
?>

    
```

#### Nowdoc 结构

就象 heredoc 结构类似于双引号字符串，Nowdoc 结构是类似于单引号字符串的。Nowdoc 结构很象 heredoc 结构，但是 nowdoc 中*不进行字符串插值*。这种结构很适合用于嵌入 PHP 代码或其它大段文本而无需对其中的特殊字符进行转义。与 SGML 的 `<![CDATA[ ]]>` 结构是用来声明大段的不用解析的文本类似，nowdoc 结构也有相同的特征。

一个 nowdoc 结构也用和 heredocs 结构一样的标记 `<<<`， 但是跟在后面的标识符要用单引号括起来，即 `<<<'EOT'`。Heredoc 结构的所有规则也同样适用于 nowdoc 结构，尤其是结束标识符的规则。

**Nowdoc 结构字符串示例**

```php


<?php
echo <<<'EOD'
Example of string spanning multiple lines
using nowdoc syntax. Backslashes are always treated literally,
e.g. \\ and \'.
EOD;

    
```

以上示例会输出：

```text

     
Example of string spanning multiple lines
using nowdoc syntax. Backslashes are always treated literally,
e.g. \\ and \'.

    
```

**含变量引用的 Nowdoc 字符串示例**

```php

     
<?php

/* 含有变量的更复杂的示例 */
class foo
{
    public $foo;
    public $bar;

    function __construct()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

echo <<<'EOT'
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should not print a capital 'A': \x41
EOT;
?>

    
```

以上示例会输出：

```text


My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should not print a capital 'A': \x41
   
```

**静态数据的示例**

```php


<?php
class foo {
    public $bar = <<<'EOT'
bar
EOT;
}
?>

     
```

> Nowdoc 结构是在 PHP 5.3.0 中加入的。

#### 字符串插值

当`字符串`用双引号或 heredoc 结构定义时，其中的变量可以进行替换。

这里共有两种语法规则：一种基本规则，一种高级规则。基本的语法规则是最常用和最方便的，它可以用最少的代码在一个 `string` 中嵌入一个变量，一个 `array` 的值，或一个 `object` 的属性。

 基本语法  如果遇到一个美元符号（`$`），后面的字符会被解释为变量名，然后替换为变量的值。   
**String Interpolation**

```php

<?php
$juice = "apple";

echo "He drank some $juice juice." . PHP_EOL;

?>

     
```

以上示例会输出：

```text

He drank some apple juice.

     
```

  从形式上讲，基本变量替换语法的结构如下：    
```text

string-variable::
     variable-name   (offset-or-property)?
   | ${   expression   }

offset-or-property::
     offset-in-string
   | property-in-string

offset-in-string::
     [   name   ]
   | [   variable-name   ]
   | [   integer-literal   ]

property-in-string::
     ->  name

variable-name::
     $   name

name::
     [a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*

     
```

  
> `${ expression }` 语法从 PHP 8.2.0 开始被弃用，因为它可能被解释为 可变变量： ```php <?php const foo = 'bar'; $foo = 'foo'; $bar = 'bar'; var_dump("${foo}"); var_dump("${(foo)}"); ?> ``` 以上示例在 PHP 8.2 中的输出： ```text Deprecated: Using ${var} in strings is deprecated, use {$var} instead in file on line 6 Deprecated: Using ${expr} (variable variables) in strings is deprecated, use {${expr}} instead in file on line 9 string(3) "foo" string(3) "bar" ``` 以上示例会输出： ```text string(3) "foo" string(3) "bar" ``` 高级 字符串插值语法应该被使用。

 
> 如果无法形成有效的变量名，美元符号会保持原样。
>
> ```php <?php echo "No interpolation $ has happened\n"; echo "No interpolation $\n has happened\n"; echo "No interpolation $2 has happened\n"; ?> ``` 以上示例会输出： ```text No interpolation $ has happened No interpolation $ has happened No interpolation $2 has happened ```

 
**插值数组或属性的第一个维度值**

```php

      
<?php
$juices = array("apple", "orange", "string_key" => "purple");

echo "He drank some $juices[0] juice.";
echo PHP_EOL;
echo "He drank some $juices[1] juice.";
echo PHP_EOL;
echo "He drank some $juices[string_key] juice.";
echo PHP_EOL;

class A {
    public $s = "string";
}

$o = new A();

echo "Object value: $o->s.";
?>

     
```

以上示例会输出：

```text

He drank some apple juice.
He drank some orange juice.
He drank some purple juice.
Object value: string.

     
```

 
> 数组键必须是无引号的，因此不能用基本语法将常量作为键来引用。使用 高级 语法代替。

  从 PHP 7.1.0 起，还支持*负*数字索引。   
**负数索引**

```php

<?php
$string = 'string';
echo "The character at index -2 is $string[-2].", PHP_EOL;
$string[-3] = 'o';
echo "Changing the character at index -3 to o gives $string.", PHP_EOL;
?>

     
```

以上示例会输出：

```text

The character at index -2 is n.
Changing the character at index -3 to o gives strong.

     
```

  对于更复杂的情况，可以使用 高级 语法。   

 高级（大括号）语法  高级语法允许使用任意访问器对*变量*进行插值。    任何标量变量、数组元素或对象属性（`static` 或非 `static`）都可以通过这种语法进行插值。表达式的写法和 在`string`之外的写法一样，然后用大括号`{`和 `}`包围。由于`{`不能被转义，所以这种语法只有在 紧跟在`{`后面的`$`才会被识别。要得到一个字面的 `{$`，需要用`{\$`。以下是一些例子：   
**Curly Syntax**

```php

<?php
const DATA_KEY = 'const-key';
$great = 'fantastic';
$arr = [
    '1',
    '2',
    '3',
    [41, 42, 43],
    'key' => 'Indexed value',
    'const-key' => 'Key with minus sign',
    'foo' => ['foo1', 'foo2', 'foo3']
];

// 无效，输出 This is { fantastic}
echo "This is { $great}";

// 有效，输出 This is fantastic
echo "This is {$great}";

class Square {
    public $width;

    public function __construct(int $width) { $this->width = $width; }
}

$square = new Square(5);

// 有效
echo "This square is {$square->width}00 centimeters wide.";

// 有效，引用 key 仅使用花括号语法时有效
echo "This works: {$arr['key']}";

// 有效
echo "This works: {$arr[3][2]}";

echo "This works: {$arr[DATA_KEY]}";

// 使用多维数组时，在字符串内部时，始终使用括号括住数组
echo "This works: {$arr['foo'][2]}";

echo "This works: {$obj->values[3]->name}";

echo "This works: {$obj->$staticProp}";

// 无效，输出 C:\directory\{fantastic}.txt
echo "C:\directory\{$great}.txt";

// 有效，输出 C:\directory\fantastic.txt
echo "C:\\directory\\{$great}.txt";
?>

     
```

 
> 由于该语法允许任意表达式，因此可以在高级语法中使用 可变变量。

 

#### 存取和修改字符串中的字符

`string` 中的字符可以通过一个从 0 开始的下标，用类似 `array` 结构中的方括号包含对应的数字来访问和修改，比如 `$str[42]`。可以把 `string` 当成字符组成的 `array`。函数 `substr()` 和 `substr_replace()` 可用于操作多于一个字符的情况。

> 从 PHP 7.1.0 开始，还支持 string 负偏移量。从 string 尾部到指定位置的偏移量。 以前，负偏移量读取时（返回空 string）会发出 `E_NOTICE`， 写入时（string 保持不变）会发出 `E_WARNING`。

> PHP 8.0.0 之前, 出于同样的目的，可以使用大括号访问 `string`，例如 `$str{42}`。 从 PHP 7.4.0 起，此大括号语法被弃用，自 PHP 8.0.0 开始不再受支持。

> 用超出字符串长度的下标写入将会拉长该字符串并以空格填充。非整数类型下标会被转换成整数。非法下标类型会产生一个 `E_WARNING` 级别错误。 写入时只用到了赋值字符串的第一个字符。 PHP 7.1.0 开始，用空字符串赋值会导致 fatal 错误；在之前赋给的值是 NULL 字符。

> PHP 的字符串在内部是字节组成的数组。因此用花括号访问或修改字符串对多字节字符集很不安全。仅应对单字节编码例如 ISO-8859-1 的字符串进行此类操作。

> 从 PHP 7.1.0 开始，对空字符串应用空索引运算符会引发致命错误。 以前是空字符串会被静默转为数组。

**一些字符串示例**

```php


<?php
// 取得字符串的第一个字符
$str = 'This is a test.';
$first = $str[0];
var_dump($first);

// 取得字符串的第三个字符
$third = $str[2];
var_dump($third);

// 取得字符串的最后一个字符
$str = 'This is still a test.';
$last = $str[strlen($str)-1];
var_dump($last);

// 修改字符串的最后一个字符
$str = 'Look at the sea';
$str[strlen($str)-1] = 'e';
var_dump($str);
?>

    
```

字符串下标必须为整数或可转换为整数的字符串，否则会发出警告。之前类似 `"foo"` 的下标会无声地转换成 `0`。

**字符串无效下标的例子**

```php


<?php
$str = 'abc';

$keys = [ '1', '1.0', 'x', '1x' ];

foreach ($keys as $keyToTry) {
    var_dump(isset($str[$keyToTry]));

    try {
        var_dump($str[$keyToTry]);
    } catch (TypeError $e) {
        echo $e->getMessage(), PHP_EOL;
    }

    echo PHP_EOL;
}
?>

    
```

以上示例会输出：

```text


bool(true)
string(1) "b"

bool(false)
Cannot access offset of type string on string

bool(false)
Cannot access offset of type string on string

bool(false)

Warning: Illegal string offset "1x" in Standard input code on line 10
string(1) "b"

    
```

> 用 `[]` 或 `{}` 访问任何其它类型（不包括数组或具有相应接口的对象实现）的变量只会无声地返回 `null`。

> 可以直接在字符串原型中用 `[]` 或 `{}` 访问字符。

> PHP 7.4 中弃用在字符串字面量中使用 `{}` 来访问字符。 PHP 8.0 已移除。

 end syntax 

### 有用的函数和运算符

字符串可以用 '.'（点）运算符连接起来，注意 '+'（加号）运算符*没有*这个功能。更多信息参考字符串运算符。

对于 `string` 的操作有很多有用的函数。

可以参考字符串函数了解大部分函数，高级的查找与替换功能可以参考 Perl 兼容正则表达式函数。

另外还有 URL 字符串函数，也有加密／解密字符串的函数（Sodium 和 Hash）。

最后，可以参考字符类型函数。

### 转换成字符串

一个值可以通过在其前面加上 `(string)` 或用 `strval()` 函数来转变成字符串。在一个需要字符串的表达式中，会自动转换为 `string`。这发生在当使用 `echo()` 或 `print()` 函数，或当变量与 `string` 进行比较的时候。类型和类型转换可以更好的解释下面的事情，也可参考函数 `settype()`。

一个布尔值 `bool` 的 `true` 被转换成 `string` 的 `"1"`。`bool` 的 `false` 被转换成 `""`（空字符串）。这种转换可以在 `bool` 和 `string` 之间相互进行。

一个整数 `int` 或浮点数 `float` 被转换为数字的字面样式的 `string`（包括 `float` 中的指数部分）。使用指数计数法的浮点数（`4.1E+6`）也可转换。

> PHP 8.0.0 起，十进制小数点字符都是一个句号（`.`）。 而在此之前的版本，在脚本的区域（category LC_NUMERIC） 中定义了十进制小数点字符。参见 `setlocale()`。

数组 `array` 总是转换成字符串 `"Array"`，因此，`echo()` 和 `print()` 无法显示出该`数组`的内容。要显示某个单元，可以用 `echo $arr['foo']` 这种结构。要显示整个数组内容见下文。

必须使用魔术方法 __toString 才能将 `object` 转换为 `string`。

资源 `Resource` 总会被转变成 `"Resource id #1"` 这种结构的字符串，其中的 `1` 是 PHP 在运行时分配给该 `resource` 的资源数字。 虽然不应依赖此字符串的确切结构且该结构可能会更改，但在脚本执行的生命周期内（即一个 Web 请求或 CLI 进程），该字符串对于给定的资源始终是唯一的，且不会被重复使用。 要得到一个 `resource` 的类型，可以用函数 `get_resource_type()`。

`null` 总是被转变成空字符串。

如上面所说的，直接把 `array`，`object` 或 `resource` 转换成 `string` 不会得到除了其类型之外的任何有用信息。可以使用函数 `print_r()` 和 `var_dump()` 列出这些类型的内容。

大部分的 PHP 值可以转变成 `string` 来永久保存，这被称作串行化，可以用函数 `serialize()` 来实现。

### 字符串类型详解

PHP 中的 `string` 的实现方式是一个由字节组成的数组再加上一个整数指明缓冲区长度。并无如何将字节转换成字符的信息，由程序员来决定。字符串由什么值来组成并无限制；特别的，其值为 `0`（“NUL bytes”）的字节可以处于字符串任何位置（不过有几个函数，在本手册中被称为非“二进制安全”的，也许会把 NUL 字节之后的数据全都忽略）。

字符串类型的此特性解释了为什么 PHP 中没有单独的“byte”类型 - 已经用字符串来代替了。返回非文本值的函数 - 例如从网络套接字读取的任意数据 - 仍会返回字符串。

由于 PHP 并不特别指明字符串的编码，那字符串到底是怎样编码的呢？例如字符串 `"á"` 到底是等于 `"\xE1"`（ISO-8859-1），`"\xC3\xA1"`（UTF-8，C form），`"\x61\xCC\x81"`（UTF-8，D form）还是任何其它可能的表达呢？答案是字符串会被按照该脚本文件相同的编码方式来编码。因此如果一个脚本的编码是 ISO-8859-1，则其中的字符串也会被编码为 ISO-8859-1，以此类推。不过这并不适用于激活了 Zend Multibyte 时；此时脚本可以是以任何方式编码的（明确指定或被自动检测）然后被转换为某种内部编码，然后字符串将被用此方式编码。注意脚本的编码有一些约束（如果激活了 Zend Multibyte 则是其内部编码）- 这意味着此编码应该是 ASCII 的兼容超集，例如 UTF-8 或 ISO-8859-1。不过要注意，依赖状态的编码其中相同的字节值可以用于首字母和非首字母而转换状态，这可能会造成问题。

当然了，要做到有用，操作文本的函数必须假定字符串是如何编码的。不幸的是，PHP 关于此的函数有很多变种：

- 某些函数假定字符串是以单字节编码的，但并不需要将字节解释为特定的字符。例如 `substr()`，`strpos()`，`strlen()` 和 `strcmp()`。理解这些函数的另一种方法是它们作用于内存缓冲区，即按照字节和字节下标操作。
- 某些函数被传递入了字符串的编码方式，也可能会假定默认无此信息。例如 `htmlentities()` 和 mbstring 扩展中的大部分函数。
- 其它函数使用了当前区域（见 `setlocale()`），但是逐字节操作。
- 最后一些函数会假定字符串是使用某特定编码的，通常是 UTF-8。intl 扩展和 PCRE（上例中仅在使用了 `u` 修饰符时）扩展中的大部分函数都是这样。

最后，要书写能够正确使用 Unicode 的程序依赖于很小心地避免那些可能会损坏数据的函数。要使用来自于 intl 和 mbstring 扩展的函数。不过使用能处理 Unicode 编码的函数只是个开始。不管用何种语言提供的函数，最基本的还是了解 Unicode 规格。例如一个程序如果假定只有大写和小写，那可是大错特错。
