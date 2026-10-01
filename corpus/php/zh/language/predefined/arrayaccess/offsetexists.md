---
id: "zh-php-function-arrayaccess-offsetexists"
language: "php"
lang: "zh"
category: "function"
name: "ArrayAccess::offsetExists"
title: "检查一个偏移位置是否存在"
signature: "public bool ArrayAccess::offsetExists(mixed $offset)"
module: "language"
source_url: "https://www.php.net/manual/zh/arrayaccess.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查一个偏移位置是否存在

## 说明

```php
public bool ArrayAccess::offsetExists(mixed $offset)
```

检查一个偏移位置是否存在。

对一个实现了 `ArrayAccess` 接口的对象使用 `isset()` 或 `empty()` 时，此方法将执行。

> 当使用 `empty()` 并且仅当 `ArrayAccess::offsetExists()` 返回 `true` 时，`ArrayAccess::offsetGet()` 将被调用以检查是为否空。

## 参数

- **`$offset`** — 需要检查的偏移位置。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果一个非布尔型返回值被返回，将被转换为 `bool` 。

## 示例

**`ArrayAccess::offsetExists()` 示例**

```php


<?php
class obj implements ArrayAccess {
    public function offsetSet($offset, $value): void {
        var_dump(__METHOD__);
    }
    public function offsetExists($var): bool {
        var_dump(__METHOD__);
        if ($var == "foobar") {
            return true;
        }
        return false;
    }
    public function offsetUnset($var): void {
        var_dump(__METHOD__);
    }
    #[\ReturnTypeWillChange]
    public function offsetGet($var) {
        var_dump(__METHOD__);
        return "value";
    }
}

$obj = new obj;

echo "Runs obj::offsetExists()\n";
var_dump(isset($obj["foobar"]));

echo "\nRuns obj::offsetExists() and obj::offsetGet()\n";
var_dump(empty($obj["foobar"]));

echo "\nRuns obj::offsetExists(), *not* obj:offsetGet() as there is nothing to get\n";
var_dump(empty($obj["foobaz"]));
?>

    
```

以上示例的输出类似于：

```text


Runs obj::offsetExists()
string(17) "obj::offsetExists"
bool(true)

Runs obj::offsetExists() and obj::offsetGet()
string(17) "obj::offsetExists"
string(14) "obj::offsetGet"
bool(false)

Runs obj::offsetExists(), *not* obj:offsetGet() as there is nothing to get
string(17) "obj::offsetExists"
bool(true)

    
```

 <refsect1 role="seealso"> <title xmlns="http://docbook.org/ns/docbook">参见</title> <para> <simplelist> <member><methodname>Classname::Method</methodname></member> </simplelist> </para> </refsect1>
