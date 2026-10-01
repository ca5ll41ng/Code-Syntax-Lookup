---
id: "zh-php-syntax-language-oop5-iterations"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.iterations"
title: "遍历对象"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.iterations.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 遍历对象

PHP 提供了一种定义对象的方法使其可以通过单元列表来遍历，例如用  语句。默认情况下，所有可见属性都将被用于遍历。

**简单的对象遍历**

```php


<?php
class MyClass
{
    public $var1 = 'value 1';
    public $var2 = 'value 2';
    public $var3 = 'value 3';

    protected $protected = 'protected var';
    private   $private   = 'private var';

    function iterateVisible() {
       echo "MyClass::iterateVisible:\n";
       foreach ($this as $key => $value) {
           print "$key => $value\n";
       }
    }
}

$class = new MyClass();

foreach($class as $key => $value) {
    print "$key => $value\n";
}
echo "\n";


$class->iterateVisible();

?>

  
```

以上示例会输出：

```php


var1 => value 1
var2 => value 2
var3 => value 3

MyClass::iterateVisible:
var1 => value 1
var2 => value 2
var3 => value 3
protected => protected var
private => private var

  
```

如上所示， 遍历了所有其能够访问的可见属性。

 参见   生成器 Iterator IteratorAggregate SPL 迭代器
