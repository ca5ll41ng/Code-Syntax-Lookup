---
id: "zh-php-syntax-class-arrayaccess"
language: "php"
lang: "zh"
category: "syntax"
name: "class.arrayaccess"
title: "ArrayAccess（数组式访问）接口"
module: "language"
source_url: "https://www.php.net/manual/zh/class.arrayaccess.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ArrayAccess（数组式访问）接口

ArrayAccess

   简介  提供像访问数组一样访问对象的能力的接口。      接口摘要    ArrayAccess  方法      示例 
**基础用法**

 {{{ 

```php

<?php
class Obj implements ArrayAccess {
    public $container = [
        "one"   => 1,
        "two"   => 2,
        "three" => 3,
    ];

    public function offsetSet($offset, $value): void {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    public function offsetExists($offset): bool {
        return isset($this->container[$offset]);
    }

    public function offsetUnset($offset): void {
        unset($this->container[$offset]);
    }

    public function offsetGet($offset): mixed {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }
}

$obj = new Obj;

var_dump(isset($obj["two"]));
var_dump($obj["two"]);
unset($obj["two"]);
var_dump(isset($obj["two"]));
$obj["two"] = "A value";
var_dump($obj["two"]);
$obj[] = 'Append 1';
$obj[] = 'Append 2';
$obj[] = 'Append 3';
print_r($obj);
?>

    
```

以上示例的输出类似于：

```text

bool(true)
int(2)
bool(false)
string(7) "A value"
obj Object
(
    [container:obj:private] => Array
        (
            [one] => 1
            [three] => 3
            [two] => A value
            [0] => Append 1
            [1] => Append 2
            [2] => Append 3
        )

)

    
```
