---
id: "zh-php-syntax-language-oop5-anonymous"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.anonymous"
title: "匿名类"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.anonymous.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 匿名类

匿名类很有用，可以创建一次性的简单对象。

 
```php

<?php

// 使用显性类
class Logger
{
    public function log($msg)
    {
        echo $msg;
    }
}

$util->setLogger(new Logger());

// 使用匿名类
$util->setLogger(new class {
    public function log($msg)
    {
        echo $msg;
    }
});

  
```

 

可以传递参数到匿名类的构造器，也可以继承其他类、实现接口（implement interface），以及像其他普通的类一样使用 trait：

 
```php

<?php

class SomeClass {}
interface SomeInterface {}
trait SomeTrait {}

var_dump(new class(10) extends SomeClass implements SomeInterface {
    private $num;

    public function __construct($num)
    {
        $this->num = $num;
    }

    use SomeTrait;
});

  
```

 以上示例会输出：  
```text

object(class@anonymous)#1 (1) {
  ["Command line code0x104c5b612":"class@anonymous":private]=>
  int(10)
}

  
```

 

匿名类被嵌套进普通 Class 后，不能访问这个外部类（Outer class）的 private（私有）、protected（受保护）方法或者属性。 为了访问外部类（Outer class）protected 属性或方法，匿名类可以 extend（扩展）此外部类。 为了使用外部类（Outer class）的 private 属性，必须通过构造器传进来：

 
```php

<?php

class Outer
{
    private $prop = 1;
    protected $prop2 = 2;

    protected function func1()
    {
        return 3;
    }

    public function func2()
    {
        return new class($this->prop) extends Outer {
            private $prop3;

            public function __construct($prop)
            {
                $this->prop3 = $prop;
            }

            public function func3()
            {
                return $this->prop2 + $this->prop3 + $this->func1();
            }
        };
    }
}

echo (new Outer)->func2()->func3();

  
```

 以上示例会输出：  
```text

6

  
```

 

声明的同一个匿名类，所创建的对象都是这个类的实例。

 
```php

<?php
function anonymous_class()
{
    return new class {};
}

if (get_class(anonymous_class()) === get_class(anonymous_class())) {
    echo 'same class';
} else {
    echo 'different class';
}
 
```

 以上示例会输出：  
```text

same class

  
```

 

> 注意，匿名类的名称是通过引擎赋予的，如下例所示。 由于实现的细节，不应该去依赖这个类名。
>
> ```php <?php echo get_class(new class {}); ``` 以上示例的输出类似于： ```text class@anonymous/in/oNi1A0x7f8636ad2021 ```

### 只读匿名类

自 PHP 8.3.0 起，`readonly` 修饰符可应用于匿名类。

**定义 readonly 匿名类**

```php

    
<?php
// 使用匿名类
var_dump(new readonly class('[DEBUG]') {
    public function __construct(private string $prefix)
    {
    }

    public function log($msg)
    {
        echo $this->prefix . ' ' . $msg;
    }
});

   
```
