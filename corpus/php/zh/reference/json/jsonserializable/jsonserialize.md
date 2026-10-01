---
id: "zh-php-function-jsonserializable-jsonserialize"
language: "php"
lang: "zh"
category: "function"
name: "JsonSerializable::jsonSerialize"
title: "指定需要被序列化成 JSON 的数据"
signature: "public mixed JsonSerializable::jsonSerialize()"
module: "json"
source_url: "https://www.php.net/manual/zh/jsonserializable.jsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 指定需要被序列化成 JSON 的数据

## 说明

```php
public mixed JsonSerializable::jsonSerialize()
```

序列化物体（Object）成能被 `json_encode()` 原生地序列化的值。

## 参数

此函数没有参数。

## 返回值

返回能被 `json_encode()` 序列化的数据， 这个值可以是除了 `resource` 外的任意类型。

## 示例

**返回 `array` 的 `JsonSerializable::jsonSerialize()` 例子**

```php


<?php
class ArrayValue implements JsonSerializable {
    private $array;
    public function __construct(array $array) {
        $this->array = $array;
    }

    public function jsonSerialize(): mixed {
        return $this->array;
    }
}

$array = [1, 2, 3];
echo json_encode(new ArrayValue($array), JSON_PRETTY_PRINT);
?>

    
```

以上示例会输出：

```text


[
    1,
    2,
    3
]

    
```

**返回关联 `array` 的 `JsonSerializable::jsonSerialize()` 例子**

```php


<?php
class ArrayValue implements JsonSerializable {
    private $array;
    public function __construct(array $array) {
        $this->array = $array;
    }

    public function jsonSerialize() {
        return $this->array;
    }
}

$array = ['foo' => 'bar', 'quux' => 'baz'];
echo json_encode(new ArrayValue($array), JSON_PRETTY_PRINT);
?>

    
```

以上示例会输出：

```text


{
    "foo": "bar",
    "quux": "baz"
}

    
```

**返回 `integer` 的 `JsonSerializable::jsonSerialize()` 例子s**

```php


<?php
class IntegerValue implements JsonSerializable {
    private $number;
    public function __construct($number) {
        $this->number = (int) $number;
    }

    public function jsonSerialize() {
        return $this->number;
    }
}

echo json_encode(new IntegerValue(1), JSON_PRETTY_PRINT);
?>

    
```

以上示例会输出：

```text


1

    
```

**返回 `string` 的`JsonSerializable::jsonSerialize()` 例子**

```php


<?php
class StringValue implements JsonSerializable {
    private $string;
    public function __construct($string) {
        $this->string = (string) $string;
    }

    public function jsonSerialize() {
        return $this->string;
    }
}

echo json_encode(new StringValue('Hello!'), JSON_PRETTY_PRINT);
?>

    
```

以上示例会输出：

```text


"Hello!"

    
```
