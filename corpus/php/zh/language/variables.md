---
id: "zh-php-syntax-language-variables"
language: "php"
lang: "zh"
category: "syntax"
name: "language.variables"
title: "变量"
module: "language"
source_url: "https://www.php.net/manual/zh/language.variables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 变量

## 基础

PHP 中的变量用一个美元符号后面跟变量名来表示。变量名是区分大小写的。

有效的变量名由字母（`A-Z`、`a-z` 或 128 到 255 之间的字节）或者下划线开头，后面跟上任意数量的字母，数字，或者下划线。 按照正常的正则表达式，它将被表述为：^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$。

> PHP 不支持 Unicode 变量名，但是，某些字符编码（例如 UTF-8）会以这样的方式对字符进行编码，即多字节字符的所有字节都在允许的范围内，从而使其成为有效的变量名。

> `$this` 是一个特殊的变量，它不能被赋值。PHP 7.1.0 之前，间接赋值（例如通过使用可变变量）是可能的。

> 请参见`userlandnaming`。

**有效变量名**

```php


<?php
$var = 'Bob';
$Var = 'Joe';
echo "$var, $Var";      // 输出 "Bob, Joe"

$_4site = 'not yet';    // 合法变量名；以下划线开头
$i站点is = 'mansikka';  // 合法变量名；可以用中文
?>

    
```

**无效变量名**

```php


<?php
$4site = 'not yet';     // 非法变量名；以数字开头

    
```

PHP 接受任意字节序列作为变量名。不遵循上述命名规则的变量名只能在运行时动态访问。有关如何访问变量的信息，请参阅可变变量。

**访问模糊的变量名**

```php


<?php
${'invalid-name'} = 'bar';
$name = 'invalid-name';
echo ${'invalid-name'}, " ", $$name;
?>

    
```

以上示例会输出：

```text


bar bar

    
```

变量默认始终传值赋值。那也就是说，当表达式的值赋值给变量时，整个原始表达式的值被赋值到目标变量。这意味着，例如，当一个变量的值赋予另外一个变量时，改变其中一个变量的值，将不会影响到另外一个变量。有关这种类型的赋值操作，请参阅表达式一章。

PHP 也提供了另外一种方式给变量赋值：引用赋值。这意味着新的变量简单的引用（换言之，“成为其别名” 或者 “指向”）了原始变量。改动新的变量将影响到原始变量，反之亦然。

使用引用赋值，简单地将一个 & 符号加到将要赋值的变量前（源变量）。例如，下列代码片断将输出“My name is Bob”两次： ```php <?php $foo = 'Bob'; // 将 'Bob' 赋给 $foo $bar = &$foo; // 通过 $bar 引用 $foo $bar = "My name is $bar"; // 修改 $bar 变量 echo $bar; echo $foo; // $foo 的值也被修改 ?> ```

有一点重要事项必须指出，那就是只有变量才可以引用赋值。 ```php <?php $foo = 25; $bar = &$foo; // 合法的赋值 $bar = &(24 * 7); // 非法; 引用没有名字的表达式 function test() { return 25; } $bar = &test(); // 无效，因为 test() 没有通过引用返回变量。 ?> ```

在 PHP 中声明变量不是必需的，但这是一种非常好的做法。访问未定义的变量将导致 `E_WARNING`（在 PHP 8.0.0 之前，为 `E_NOTICE`）。未定义的变量的默认值为 `null`。`isset()` 语言结构可用于检测变量是否已初始化。

**未初始化变量的默认值**

```php


<?php
// 未设置和未引用（不使用上下文）的变量。
var_dump($unset_var);
?>

     
```

以上示例会输出：

```text


Warning: Undefined variable $unset_var in ...
NULL

     
```

PHP 允许从未定义的变量自动生成数组（自动创建新数组）。 将元素追加到未定义的变量将创建一个新数组，并且不会生成警告。

**未定义变量自动生成数组**

```php


<?php
$unset_array[] = 'value'; // 不会生成警告。
?>

    
```

> 当将一个文件包含在另一个使用相同变量名的文件中时，依赖未初始化变量的默认值是有问题的。

可以使用 `unset()` 语言结构来销毁变量。

有关变量相关函数的信息，请参阅变量函数参考。

## 预定义变量

PHP 提供了许多 预定义变量。PHP 提供了一套附加的预定数组，这些数组变量包含了来自 web 服务器（如果可用），运行环境，和用户输入的数据。这些数组在每个作用域内自动可用。因此通常被称为自动全局变量（autoglobals）或者超全局变量（superglobals）。（PHP 中没有用户自定义超全局变量的机制。）详情参阅超全局变量列表。

> 可变变量
>
> 超级全局变量不能被用作函数或类方法中的可变变量。

如果某些 variables_order 中的变量没有设定，它们的对应的 PHP 预定义数组也是空的。

## 变量作用域

变量的作用域是定义该变量的上下文。PHP 有函数作用域和全局作用域。在函数之外定义的任何变量都仅限于全局作用域。当包含文件时，该文件中的代码继承了包含语句所在行的变量作用域。

**全局变量作用域示例**

```php


<?php
$a = 1;
include 'b.inc'; // 变量 $a 将在 b.inc 内可用
?>

    
```

在命名函数或匿名函数内创建的任何变量都仅限于函数主体的作用域。然而，箭头函数会绑定父级作用域中的变量，使其在函数体内可用。如果在函数内部 include 文件，那么包含文件中的变量将如同在调用函数内部定义一样可用。

**局部变量作用域的示例**

```php
 

<?php
$a = 1; // 全局作用域

function test()
{ 
    echo $a; // $a 变量 $a 未定义，因为它引用了 $a 的局部版本
}
?>

    
```

下面的示例会生成未定义变量 `E_WARNING`（PHP 8.0.0 之前是 `E_NOTICE`）诊断提示。这是因为 echo 语句引用了局部版本的变量 `$a`，而且在这个作用域内，它并没有被赋值。注意这与 C 语言有一点点不同，因为 C 中的全局变量会自动提供给函数，除非被局部定义特别覆盖。这可能引起一些问题，有些人可能不小心就改变了一个全局变量。PHP 中全局变量在函数中使用时必须声明为 global。

### `global` 关键字

`global` 关键字用于将变量从全局作用域绑定到局部作用域。该关键字可以与变量列表或单个变量一起使用。将创建引用同名全局变量的局部变量。如果全局变量不存在，则将在全局作用域内创建该变量并赋值为 `null`。

**使用 `global`**

```php


<?php
$a = 1;
$b = 2;

function Sum()
{
    global $a, $b;

    $b = $a + $b;
}

Sum();
echo $b;
?>

      
```

以上示例会输出：

```text


3

      
```

在函数中声明了全局变量 `$a` 和 `$b` 之后，对任一变量的所有引用都会指向其全局版本。对于一个函数能够声明的全局变量的最大个数，PHP 没有限制。

在全局作用域内访问变量的第二个办法，是用特殊的 PHP 自定义 `$GLOBALS` 数组。前面的例子可以写成：

**使用 `$GLOBALS` 替代 global**

```php


<?php
$a = 1;
$b = 2;

function Sum()
{
    $GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];
}

Sum();
echo $b;
?>

     
```

`$GLOBALS` 是一个关联数组，每一个变量为一个元素，键名对应变量名，值对应变量的内容。`$GLOBALS` 之所以在全局作用域内存在，是因为 $GLOBALS 是一个超全局变量。以下范例显示了超全局变量的用处：

**演示超全局变量和作用域的例子**

```php


<?php
function test_superglobal()
{
    echo $_POST['name'];
}
?>

     
```

> 在函数外部使用 `global` 关键字不是错误。如果文件是从函数内部 include 的，则可以使用它。

### 使用 `static` 变量

变量作用域的另一个重要特性是 *static* 变量。静态变量仅在局部函数作用域中存在，但当程序执行离开此作用域时，其值并不丢失。看看下面的例子：

**演示需要静态变量的例子**

```php


<?php
function Test()
{
    $a = 0;
    echo $a;
    $a++;
}
?>

     
```

本函数没什么用处，因为每次调用时都会将 `$a` 的值设为 `0` 并输出 `0`。将变量加一的 `$a`++ 没有作用，因为一旦退出本函数则变量 `$a` 就不存在了。要写一个不会丢失本次计数值的计数函数，要将变量 `$a` 定义为静态的：

**使用静态变量的例子**

```php


<?php
function test()
{
    static $a = 0;
    echo $a;
    $a++;
}
?>

     
```

现在，变量 `$a` 仅在第一次调用 test() 函数时被初始化，之后每次调用 test() 函数都会输出 `$a` 的值并加一。

静态变量也提供了一种处理递归函数的方法。以下这个简单的函数递归计数到 10，使用静态变量 `$count` 来判断何时停止：

**静态变量与递归函数**

```php


<?php
function test()
{
    static $count = 0;

    $count++;
    echo $count;
    if ($count < 10) {
        test();
    }
    $count--;
}
?>

     
```

在 PHP 8.3.0 之前，静态变量只能使用常量表达式进行初始化。自 PHP 8.3.0 起，还允许使用动态表达式（例如函数调用）：

**声明静态变量**

```php


<?php
function foo(){
    static $int = 0;          // 正确
    static $int = 1+2;        // 正确
    static $int = sqrt(121);  // 自 PHP 8.3.0 起正确

    $int++;
    echo $int;
}
?>

     
```

匿名函数内的静态变量仅在该特定函数实例中存在。如果每次调用时都重新创建匿名函数，则静态变量将重新初始化。

**匿名函数内的静态变量**

```php


<?php
function exampleFunction($input) {
    $result = (static function () use ($input) {
        static $counter = 0;
        $counter++;
        return "Input: $input, Counter: $counter\n";
    });

    return $result();
}

// 调用 exampleFunction 将重新创建匿名函数，因此静态
// 变量不会保留其值。
echo exampleFunction('A'); // 输出：Input: A, Counter: 1
echo exampleFunction('B'); // 输出：Input: B, Counter: 1
?>

    
```

从 PHP 8.1.0 开始，当继承（不是覆盖）使用有静态变量的方法时，继承的方法将会跟父级方法共享静态变量。这意味着方法中的静态变量现在跟静态属性有相同的行为。

自 PHP 8.3.0 起，可以使用任意表达式初始化静态变量。这意味着也说，像是方法调用可用于初始化静态变量。

**在继承方法中使用静态变量**

```php


<?php
class Foo {
    public static function counter() {
        static $counter = 0;
        $counter++;
        return $counter;
    }
}
class Bar extends Foo {}
var_dump(Foo::counter()); // int(1)
var_dump(Foo::counter()); // int(2)
var_dump(Bar::counter()); // int(3)，PHP 8.1.0 之前 int(1)
var_dump(Bar::counter()); // int(4)，PHP 8.1.0 之前 int(2)
?>

    
```

### `global` 和 `static` 变量的引用

对于变量的 static 和 global 定义是以引用的方式实现的。例如，在一个函数作用域内部用 `global` 语句导入的一个真正的全局变量实际上是建立了一个到全局变量的引用。这有可能导致预料之外的行为，如以下例子所演示的：

 
```php

<?php
function test_global_ref() {
    global $obj;
    $new = new stdClass;
    $obj = &$new;
}

function test_global_noref() {
    global $obj;
    $new = new stdClass;
    $obj = $new;
}

test_global_ref();
var_dump($obj);
test_global_noref();
var_dump($obj);
?>

     
```

 

以上示例会输出：

```text


NULL
object(stdClass)#1 (0) {
}

    
```

类似的行为也适用于 `static` 语句。引用并不是静态地存储的：

 
```php

<?php
function &get_instance_ref() {
    static $obj;

    echo 'Static object: ';
    var_dump($obj);
    if (!isset($obj)) {
        $new = new stdClass;
        // 将一个引用赋值给静态变量
        $obj = &$new;
    }
    if (!isset($obj->property)) {
        $obj->property = 1;
    } else {
        $obj->property++;
    }
    return $obj;
}

function &get_instance_noref() {
    static $obj;

    echo 'Static object: ';
    var_dump($obj);
    if (!isset($obj)) {
        $new = new stdClass;
        // 将一个对象赋值给静态变量
        $obj = $new;
    }
    if (!isset($obj->property)) {
        $obj->property = 1;
    } else {
        $obj->property++;
    }
    return $obj;
}

$obj1 = get_instance_ref();
$still_obj1 = get_instance_ref();
echo "\n";
$obj2 = get_instance_noref();
$still_obj2 = get_instance_noref();
?>

     
```

 

以上示例会输出：

```text


Static object: NULL
Static object: NULL

Static object: NULL
Static object: object(stdClass)#3 (1) {
  ["property"]=>
  int(1)
}

    
```

此示例说明，当把引用赋值给静态变量时，第二次调用 `&get_instance_ref()` 函数时不会*记住*该引用。

## 可变变量

有时候使用可变变量名是很方便的。就是说，一个变量的变量名可以动态的设置和使用。一个普通的变量通过声明来设置，例如：

 
```php

<?php
$a = 'hello';
?>

    
```

 

一个可变变量获取了一个普通变量的值作为这个可变变量的变量名。在上面的例子中 *hello* 使用了两个美元符号（$）以后，就可以作为一个可变变量的变量了。例如：

 
```php

<?php
$$a = 'world';
?>

    
```

 

这时，两个变量都被定义了：`$a` 的内容是“hello”并且 `$hello` 的内容是“world”。因此，以下语句：

 
```php

<?php
echo "$a {$$a}";
?>

    
```

 

与以下语句输出完全相同的结果：

 
```php

<?php
echo "$a $hello";
?>

    
```

 

它们都会输出：`hello world`。

要将可变变量用于数组，必须解决模棱两可的问题。也就是说，如果解析器看到 `$$a[1]`，那么解析器需要知道是将 `$a[1]` 作为变量，还是将 `$$a` 作为个变量并取出该变量中索引为 `[1]` 的值。解决此问题的语法是，对第一种情况用 `${$a[1]}`，对第二种情况用 `${$a}[1]`。

类的属性也可以通过可变属性名来访问。可变属性名将在该调用所处的作用域内被解析。例如，对于 `$foo->$bar` 表达式，则会在局部作用域来解析 `$bar` 并且其值将被用于 `$foo` 的属性名。对于 `$bar` 是数组单元时也是一样。

也可使用花括号来给属性名清晰定界。最有用是在属性位于数组中，或者属性名包含有多个部分或者属性名包含有非法字符时（例如来自 `json_decode()` 或 SimpleXML）。

**可变属性示例**

```php


<?php
class Foo {
    public $bar = 'I am bar.';
    public $arr = ['I am A.', 'I am B.', 'I am C.'];
    public $r   = 'I am r.';
}

$foo = new Foo();
$bar = 'bar';
$baz = ['foo', 'bar', 'baz', 'quux'];
echo $foo->$bar . "\n";
echo $foo->{$baz[1]} . "\n";

$start = 'b';
$end   = 'ar';
echo $foo->{$start . $end} . "\n";

$arr = 'arr';
echo $foo->{$arr[1]} . "\n";
echo $foo->{$arr}[1] . "\n";

?>

     
```

以上示例会输出：

```text


I am bar.
I am bar.
I am bar.
I am r.
I am B.

     
```

> 注意，在 PHP 的函数和类的方法中，超全局变量不能用作可变变量。`$this` 变量也是一个特殊变量，不能被动态引用。

## 来自 PHP 之外的变量

### HTML 表单（GET 和 POST）

当一个表单提交给 PHP 脚本时，表单中的信息会自动在脚本中可用。有几个方法访问此信息，例如：

**一个简单的 HTML 表单**

```html


<form action="foo.php" method="POST">
    Name:  <input type="text" name="username"><br />
    Email: <input type="text" name="email"><br />
    <input type="submit" name="submit" value="Submit me!" />
</form>

      
```

只有两种方法可以访问 HTML 表单中的数据。以下列出了当前有效的方法：

**从简单的 POST HTML 表单访问数据**

```php


<?php
echo $_POST['username'];
echo $_REQUEST['username'];
?>

      
```

使用 GET 表单也类似，只不过要用适当的 GET 预定义变量。GET 也适用于 `QUERY_STRING`（URL 中在“?”之后的信息）。因此，举例说，`http://www.example.com/test.php?id=3` 包含有可用 `$_GET['id']` 来访问的 GET 数据。参见 $_REQUEST。

> 变量名中的点和空格被转换成下划线。例如 `<input name="a.b" />` 变成了 `$_REQUEST["a_b"]`。

PHP 也理解表单变量上下文中的数组（参见相关常见问题）。例如可以将相关的变量编成组，或者用此功能从多选输入框中取得值。例如，将表单 POST 给自己并在提交时显示数据：

**更复杂的表单变量**

```php


<?php
if ($_POST) {
    echo '<pre>';
    echo htmlspecialchars(print_r($_POST, true));
    echo '</pre>';
}
?>
<form action="" method="post">
    Name:  <input type="text" name="personal[name]" /><br />
    Email: <input type="text" name="personal[email]" /><br />
    Beer: <br />
    <select multiple name="beer[]">
        <option value="warthog">Warthog</option>
        <option value="guinness">Guinness</option>
        <option value="stuttgarter">Stuttgarter Schwabenbräu</option>
    </select><br />
    <input type="submit" value="submit me!" />
</form>

      
```

> 如果外部变量名以有效的数组语法开头，则将会忽略尾随字符。例如，`<input name="foo[bar]baz">` 变为 `$_REQUEST['foo']['bar']`。

#### IMAGE SUBMIT 变量名

当提交表单时，可以用一幅图像代替标准的提交按钮，用类似这样的标记：

 
```html

<input type="image" src="image.gif" name="sub" />

      
```

 

当用户点击到图像中的某处时，相应的表单会被传送到服务器，并加上两个变量 `sub_x` 和 `sub_y`。它们包含了用户点击图像的坐标。有经验的用户可能会注意到被浏览器发送的实际变量名包含的是一个点而不是下划线（即 sub.x 和 sub.y），但 PHP 自动将点转换成了下划线。

### HTTP Cookie

PHP 透明地支持 [RFC 6265](6265)定义中的 HTTP cookies。Cookies 是一种在远端浏览器端存储数据并能追踪或识别再次访问的用户的机制。可以用 `setcookie()` 函数设定 cookies。Cookies 是 HTTP 信息头中的一部分，因此 SetCookie 函数必须在向浏览器发送任何输出之前调用。对于 `header()` 函数也有同样的限制。Cookie 数据会在相应的 cookie 数据数组中可用，例如 `$_COOKIE` 和 `$_REQUEST`。更多细节和例子见 `setcookie()` 手册页面。

> 自 PHP 7.2.34、7.3.23 和 7.4.11 起，出于安全原因，传入 cookie 的 *name* 不再进行 url 解码。

如果要将多个值赋给单个 cookie 变量，可以将其赋成数组。例如：

 
```php

<?php
  setcookie("MyCookie[foo]", 'Testing 1', time()+3600);
  setcookie("MyCookie[bar]", 'Testing 2', time()+3600);
?>

     
```

 

尽管 `MyCookie` 在脚本中是单个数组，这将会建立两个单独的 cookie。如果只需为一个 cookie 设定多个值，考虑先在值上使用 `serialize()` 或 `explode()`。

注意，除非路径或者域不同，cookie 将替换浏览器中先前的同名 cookie。因此对于购物车程序，可以保留一个计数器并一起传递，即

**一个 `setcookie()` 的示例**

```php


<?php
if (isset($_COOKIE['count'])) {
    $count = $_COOKIE['count'] + 1;
} else {
    $count = 1;
}
setcookie('count', $count, time()+3600);
setcookie("Cart[$count]", $item, time()+3600);
?>

     
```

### 变量名中的点

通常，PHP 不会改变传递给脚本中的变量名。然而应该注意到点（句号）不是 PHP 变量名中的合法字符。至于原因，看看：

```php


<?php
$varname.ext;  /* 非法变量名 */
?>

     
```

这时，解析器看到是一个名为 `$varname` 的变量，后面跟着一个字符串连接运算符，后面跟着一个裸字符串（即没有加引号的字符串，且不匹配任何已知的健名或保留字）'ext'。很明显这不是想要的结果。

出于此原因，要注意 PHP 将会自动将变量名中的点替换成下划线。

### 确定变量类型

因为 PHP 会判断变量类型并在需要时进行转换（通常情况下），因此在某一时刻给定的变量是何种类型并不明显。PHP 包括几个函数可以判断变量的类型，例如：`gettype()`，`is_array()`，`is_float()`，`is_int()`，`is_object()` 和 `is_string()`。参见类型一章。

HTTP 是一种文本协议，大多数（可能不是全部）超全局数组中的内容（如 `$_POST` 和 `$_GET`）将保留为字符串。PHP 不会尝试将值转换为特定类型。在下面的示例中，`$_GET["var1"]` 将包含字符串“null”，而 `$_GET["var2"]` 将包含字符串“123”。

```text


/index.php?var1=null&var2=123

      
```

### 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.34, 7.3.23, 7.4.11 | 出于安全原因，传入 cookie 的 *name* 不再进行 URL 解码。 |
