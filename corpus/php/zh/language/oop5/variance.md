---
id: "zh-php-syntax-language-oop5-variance"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.variance"
title: "协变与逆变"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.variance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 协变与逆变

在 PHP 7.2.0 里，通过对子类方法里参数的类型放宽限制，实现对逆变的部分支持。 自 PHP 7.4.0 起开始支持完整的协变和逆变。

协变使子类比父类方法能返回更具体的类型；逆变使子类比父类方法参数类型能接受更模糊的类型。

在以下情况下，类型声明被认为更具体：

- 在 联合类型 中删除类型
- 在 交集类型 中添加类型
- 类类型（class type）修改为子类类型
- `iterable` 修改为 `array` 或者 `Traversable`

如果情况相反，则类型类被认为是模糊的。

### 协变

创建一个名为 `Animal` 的简单的抽象父类，用于演示什么是协变。 两个子类：`Cat` 和 `Dog` 扩展（extended）了 `Animal`。

 
```php

<?php

abstract class Animal
{
    protected string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    abstract public function speak();
}

class Dog extends Animal
{
    public function speak()
    {
        echo $this->name . " barks";
    }
}

class Cat extends Animal 
{
    public function speak()
    {
        echo $this->name . " meows";
    }
}

   
```

 

注意：在这个例子中，没有方法返回了值。 将通过添加个别工厂方法，创建并返回 `Animal`、`Cat`、`Dog` 类型的新对象。

 
```php

<?php

interface AnimalShelter
{
    public function adopt(string $name): Animal;
}

class CatShelter implements AnimalShelter
{
    public function adopt(string $name): Cat // 返回类的类型不仅限于 Animal，还可以是 Cat 类型
    {
        return new Cat($name);
    }
}

class DogShelter implements AnimalShelter
{
    public function adopt(string $name): Dog // 返回类的类型不仅限于 Animal，还可以是 Dog 类型
    {
        return new Dog($name);
    }
}

$kitty = (new CatShelter)->adopt("Ricky");
$kitty->speak();
echo "\n";

$doggy = (new DogShelter)->adopt("Mavrick");
$doggy->speak();

   
```

 以上示例会输出：  
```text

Ricky meows
Mavrick barks

   
```

 

### 逆变

继续上一个例子，除了 `Animal`、 `Cat`、`Dog`，我们还添加了 `Food`、`AnimalFood` 类， 同时为抽象类 `Animal` 添加了一个 `eat(AnimalFood $food)` 方法。

 
```php

<?php

class Food {}

class AnimalFood extends Food {}

abstract class Animal
{
    protected string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function eat(AnimalFood $food)
    {
        echo $this->name . " eats " . get_class($food);
    }
}

   
```

 

为了演示什么是逆变，`Dog` 类重写（overridden）了 `eat` 方法， 允许传入任意 `Food` 类型的对象。 而 `Cat` 类保持不变。

 
```php

<?php

class Dog extends Animal
{
    public function eat(Food $food) {
        echo $this->name . " eats " . get_class($food);
    }
}

   
```

 

下面的例子展示了逆变。

 
```php

<?php

$kitty = (new CatShelter)->adopt("Ricky");
$catFood = new AnimalFood();
$kitty->eat($catFood);
echo "\n";

$doggy = (new DogShelter)->adopt("Mavrick");
$banana = new Food();
$doggy->eat($banana);

   
```

 以上示例会输出：  
```text

Ricky eats AnimalFood
Mavrick eats Food

   
```

  但 `$kitty` 若尝试 `eat()` `$banana` 会发生什么呢？   
```php

$kitty->eat($banana);

   
```

 以上示例会输出：  
```text

Fatal error: Uncaught TypeError: Argument 1 passed to Animal::eat() must be an instance of AnimalFood, instance of Food given

   
```

 

### 属性差异

默认情况下，属性既不是协变也不是逆变，因此是不变的。也就是说，它们的类型在子类中可能根本不会改变。原因是“get”操作必须是协变的，而“set”操作必须是逆变的。属性满足这两个要求的唯一方法是不变的。

自 PHP 8.4.0 起，随着抽象属性（在接口或抽象类上）和虚拟属性的增加，可以声明仅具有 get 或 set 操作的属性。因此，仅需“get”操作的抽象属性或虚拟属性可能是协变的。同样，仅需“set”操作的抽象属性或虚拟属性可能是逆变的。

然而，一旦属性同时具有 get 和 set 操作，就不再是协变或逆变的了，无法进一步扩展。也就是说，现在是不变的。

**属性类型差异**

```php


<?php
class Animal {}
class Dog extends Animal {}
class Poodle extends Dog {}

interface PetOwner
{
    // 只需要 get 操作，因此这可能是协变的。
    public Animal $pet { get; }
}

class DogOwner implements PetOwner
{
    // 这可能是一个更严格的类型，
    // 因为“get”端仍返回 Animal。但是，作为原生属性，
    // 此类的子类可能无法再更改类型。
    public Dog $pet;
}

class PoodleOwner extends DogOwner
{
    // 这是不允许的，因为 DogOwner::$pet
    // 已经定义并要求 get 和 set 操作。
    public Poodle $pet;
}
?>

   
```
