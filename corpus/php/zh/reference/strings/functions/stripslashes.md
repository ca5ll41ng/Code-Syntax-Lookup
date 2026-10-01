---
id: "zh-php-function-function-stripslashes"
language: "php"
lang: "zh"
category: "function"
name: "stripslashes"
title: "反引用一个引用字符串"
signature: "string stripslashes(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.stripslashes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 反引用一个引用字符串

## 说明

```php
string stripslashes(string $string)
```

反引用一个引用字符串。

如果不需要将数据插入到一个需要转义的位置（例如数据库）则可以使用 `stripslashes()`。例如，直接从 HTML 表单输出数据。

## 参数

- **`$string`** — 输入字符串。

## 返回值

返回一个去除转义反斜线后的字符串（`\'` 转换为 `'` 等等）。双反斜线（`\\`）被转换为单个反斜线（`\`）。

## 示例

**`stripslashes()` 示例**

```php


<?php
$str = "Is your name O\'reilly?";

// 输出: Is your name O'reilly?
echo stripslashes($str);
?>

    
```

> `stripslashes()` 是非递归的。如果你想要在多维数组中使用该函数，你需要使用递归函数。

**对数组使用 `stripslashes()`**

```php


<?php
function stripslashes_deep($value)
{
    $value = is_array($value) ?
                array_map('stripslashes_deep', $value) :
                stripslashes($value);

    return $value;
}

// 示例
$array = array("f\\'oo", "b\\'ar", array("fo\\'o", "b\\'ar"));
$array = stripslashes_deep($array);

// 输出
print_r($array);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => f'oo
    [1] => b'ar
    [2] => Array
        (
            [0] => fo'o
            [1] => b'ar
        )

)

    
```

## 参见

`addslashes()` `get_magic_quotes_gpc()`
