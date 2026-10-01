---
id: "zh-php-function-reflectionclass-tostring"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::__toString"
title: "返回 ReflectionClass 对象字符串的表示形式"
signature: "public string ReflectionClass::__toString()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 ReflectionClass 对象字符串的表示形式

## 说明

```php
public string ReflectionClass::__toString()
```

返回 ReflectionClass 对象字符串的表示形式。

## 参数

此函数没有参数。

## 返回值

ReflectionClass 实例的字符串表示形式。

## 示例

**`ReflectionClass::__toString()` 示例**

```php


<?php
$reflectionClass = new ReflectionClass('Exception');
echo $reflectionClass->__toString();
?>

    
```

以上示例会输出：

```text


Class [ <internal:Core> class Exception ] {

  - Constants [0] {
  }

  - Static properties [0] {
  }

  - Static methods [0] {
  }

  - Properties [7] {
    Property [ <default> protected $message ]
    Property [ <default> private $string ]
    Property [ <default> protected $code ]
    Property [ <default> protected $file ]
    Property [ <default> protected $line ]
    Property [ <default> private $trace ]
    Property [ <default> private $previous ]
  }

  - Methods [10] {
    Method [ <internal:Core> final private method __clone ] {
    }

    Method [ <internal:Core, ctor> public method __construct ] {

      - Parameters [3] {
        Parameter #0 [ <optional> $message ]
        Parameter #1 [ <optional> $code ]
        Parameter #2 [ <optional> $previous ]
      }
    }

    Method [ <internal:Core> final public method getMessage ] {
    }

    Method [ <internal:Core> final public method getCode ] {
    }

    Method [ <internal:Core> final public method getFile ] {
    }

    Method [ <internal:Core> final public method getLine ] {
    }

    Method [ <internal:Core> final public method getTrace ] {
    }

    Method [ <internal:Core> final public method getPrevious ] {
    }

    Method [ <internal:Core> final public method getTraceAsString ] {
    }

    Method [ <internal:Core> public method __toString ] {
    }
  }
}

    
```

## 参见

`ReflectionClass::export()` __toString()
