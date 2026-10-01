---
id: "zh-php-syntax-class-iteratoraggregate"
language: "php"
lang: "zh"
category: "syntax"
name: "class.iteratoraggregate"
title: "IteratorAggregate（聚合式迭代器）接口"
module: "language"
source_url: "https://www.php.net/manual/zh/class.iteratoraggregate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# IteratorAggregate（聚合式迭代器）接口

IteratorAggregate

   简介  创建外部迭代器的接口。      接口摘要    IteratorAggregate   `extends` Traversable  方法      示例 
**基本用法**

 {{{ 

```php

<?php

class myData implements IteratorAggregate
{
    public $property1 = "Public property one";
    public $property2 = "Public property two";
    public $property3 = "Public property three";
    public $property4 = "";

    public function __construct()
    {
        $this->property4 = "last property";
    }

    public function getIterator(): Traversable
    {
        return new ArrayIterator($this);
    }
}

$obj = new myData();

foreach ($obj as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}

?>

    
```

以上示例的输出类似于：

```text

string(9) "property1"
string(19) "Public property one"

string(9) "property2"
string(19) "Public property two"

string(9) "property3"
string(21) "Public property three"

string(9) "property4"
string(13) "last property"

    
```
