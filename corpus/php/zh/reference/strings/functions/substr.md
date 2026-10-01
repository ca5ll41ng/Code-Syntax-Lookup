---
id: "zh-php-function-function-substr"
language: "php"
lang: "zh"
category: "function"
name: "substr"
title: "返回字符串的子串"
signature: "string substr(string $string, int $offset, int|null $length = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.substr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字符串的子串

## 说明

```php
string substr(string $string, int $offset, int|null $length = null)
```

返回字符串 `$string` 由 `$offset` 和 `$length` 参数指定的子字符串。

## 参数

- **`$string`** — 输入字符串。
- **`$offset`** — 如果 `$offset` 是非负数，返回的字符串将从 `$string` 的 `$offset` 位置开始，从 0 开始计算。例如，在字符串 “`abcdef`” 中，在位置 `0` 的字符是 “`a`”，位置 `2` 的字符串是 “`c`” 等等。 — 如果 `$offset` 是负数，返回的字符串将从 `$string` 结尾处向前数第 `$offset` 个字符开始。 — 如果 `$string` 的长度小于 `$offset`，将返回空字符串。 — **使用负数 `$offset`** ```php <?php echo substr("abcdef", -1), PHP_EOL; // 返回 "f" echo substr("abcdef", -2), PHP_EOL; // 返回 "ef" echo substr("abcdef", -3, 1), PHP_EOL; // 返回 "d" ?> ```
- **`$length`** — 如果提供了正数的 `$length`，返回的字符串将从 `$offset` 处开始最多包括 `$length` 个字符（取决于 `$string` 的长度）。 — 如果提供了负数的 `$length`，那么 `$string` 末尾处的 `$length` 个字符将会被省略。如果 `$offset` 不在这段文本中，那么将返回空字符串。 — 如果提供了值为 `0` 的 `$length`，那么将返回一个空字符串。 — 如果忽略 `$length` 或为 `null`，返回的子字符串将从 `$offset` 位置开始直到字符串结尾。
  **使用负数 `$length`**

  ```php


  <?php
  echo substr("abcdef", 0, -1), PHP_EOL;  // 返回 "abcde"
  echo substr("abcdef", 2, -1), PHP_EOL;  // 返回 "cde"
  echo substr("abcdef", 4, -4), PHP_EOL;  // 返回 ""; 在 PHP 8.0.0 之前，返回 false
  echo substr("abcdef", -3, -1), PHP_EOL; // 返回 "de"
  ?>

         
  ```



## 返回值

返回提取的 `$string` 部分或者空字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$length` 允许为 null。当 `$length` 显式设置为 `null` 时，函数返回在字符串末尾结束的子字符串，而之前将返回空字符串。 |
| 8.0.0 | 函数将返回空字符串, 在此之前返回 `false`。 |

## 示例

**`substr()` 基本用法**

```php


<?php
echo substr('abcdef', 1), PHP_EOL;     // bcdef
echo substr("abcdef", 1, null), PHP_EOL; // bcdef; 在 PHP 8.0.0 之前，返回空字符串
echo substr('abcdef', 1, 3), PHP_EOL;  // bcd
echo substr('abcdef', 0, 4), PHP_EOL;  // abcd
echo substr('abcdef', 0, 8), PHP_EOL;  // abcdef
echo substr('abcdef', -1, 1), PHP_EOL; // f

// 访问字符串中的单个字符
// 也可以使用中括号
$string = 'abcdef';
echo $string[0], PHP_EOL;                 // a
echo $string[3], PHP_EOL;                 // d
echo $string[strlen($string)-1], PHP_EOL; // f
?>

    
```

**`substr()` 的转换行为**

```php


<?php
class apple {
    public function __toString() {
        return "green";
    }
}

echo "1) ", var_export(substr("pear", 0, 2), true), PHP_EOL;
echo "2) ", var_export(substr(54321, 0, 2), true), PHP_EOL;
echo "3) ", var_export(substr(new apple(), 0, 2), true), PHP_EOL;
echo "4) ", var_export(substr(true, 0, 1), true), PHP_EOL;
echo "5) ", var_export(substr(false, 0, 1), true), PHP_EOL;
echo "6) ", var_export(substr("", 0, 1), true), PHP_EOL;
echo "7) ", var_export(substr(1.2e3, 0, 4), true), PHP_EOL;
?>

    
```

以上示例会输出：

```text


1) 'pe'
2) '54'
3) 'gr'
4) '1'
5) ''
6) ''
7) '1200'

    
```

**无效字符范围**

如果请求的字符范围无效, `substr()` 从 PHP 8.0.0 开始返回空字符串；在此之前返回 `false` 。

```php


<?php
var_dump(substr('a', 2));
?>

   
```

以上示例在 PHP 8 中的输出：

```text


string(0) ""

   
```

以上示例在 PHP 7 中的输出：

```text


bool(false)

    
```

## 参见

`strrchr()` `substr_replace()` `preg_match()` `trim()` `mb_substr()` `wordwrap()` 字符串访问和修改
