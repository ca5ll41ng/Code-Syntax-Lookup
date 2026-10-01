---
id: "zh-php-guide-classobj-examples"
language: "php"
lang: "zh"
category: "guide"
name: "classobj.examples"
title: "示例"
module: "classobj"
source_url: "https://www.php.net/manual/zh/classobj.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

在这个示例中，首先定义了一个基类和该类的扩展。基类描述了普通的蔬菜， 是否可食用及其颜色。子类 `Spinach` 添加了烹饪的方法和检查是否已烹饪的方法。

**定义类**

`Vegetable`

```php


<?php

class Vegetable {
    public $edible;

    public $color;

    public function __construct($edible, $color = "green")
    {
        $this->edible = $edible;
        $this->color = $color;
    }

    public function isEdible()
    {
        return $this->edible;
    }

    public function getColor()
    {
        return $this->color;
    }
}

?>

   
```

`Spinach`

```php


<?php

class Spinach extends Vegetable {
    public $cooked = false;

    public function __construct()
    {
        parent::__construct(true, "green");
    }

    public function cook()
    {
        $this->cooked = true;
    }

    public function isCooked()
    {
        return $this->cooked;
    }
}

?>

   
```

接下来从这些类中实例化了两个对象并打印了它们的信息，包括了他们类的继承关系。 同时也定义了一些实用函数，主要为了漂亮地打印出这些变量。

**test_script.php**

```php


<?php

// 注册自动加载器以加载类
spl_autoload_register();

function printProperties($obj)
{
    foreach (get_object_vars($obj) as $prop => $val) {
        echo "\t$prop = $val\n";
    }
}

function printMethods($obj)
{
    $arr = get_class_methods(get_class($obj));
    foreach ($arr as $method) {
        echo "\tfunction $method()\n";
    }
}

function objectBelongsTo($obj, $class)
{
    if (is_subclass_of($obj, $class)) {
        echo "Object belongs to class " . get_class($obj);
        echo ", a subclass of $class\n";
    } else {
        echo "Object does not belong to a subclass of $class\n";
    }
}

// 实例化 2 对象
$veggie = new Vegetable(true, "blue");
$leafy = new Spinach();

// 打印这些对象的信息
echo "veggie: CLASS " . get_class($veggie) . "\n";
echo "leafy: CLASS " . get_class($leafy);
echo ", PARENT " . get_parent_class($leafy) . "\n";

// 显示蔬菜的属性
echo "\nveggie: Properties\n";
printProperties($veggie);

// 和 leafy 的方法
echo "\nleafy: Methods\n";
printMethods($leafy);

echo "\nParentage:\n";
objectBelongsTo($leafy, Spinach::class);
objectBelongsTo($leafy, Vegetable::class);

?>

   
```

以上示例会输出：

```text


veggie: CLASS Vegetable
leafy: CLASS Spinach, PARENT Vegetable

veggie: Properties
        edible = 1
        color = blue

leafy: Methods
        function __construct()
        function cook()
        function isCooked()
        function isEdible()
        function getColor()

Parentage:
Object does not belong to a subclass of Spinach
Object belongs to class Spinach, a subclass of Vegetable

   
```

一个重要的事情是需要注意在上面的示例中，对象 `$leafy` 是 `Spinach` 的实例（`Vegetable` 的子类）。
