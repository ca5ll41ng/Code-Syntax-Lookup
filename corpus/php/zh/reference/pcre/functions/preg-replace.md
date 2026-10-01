---
id: "zh-php-function-function-preg-replace"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["redos"],"cwe":["CWE-1333"],"params":[1]},{"type":"sanitizer","params":[3,2,1]}]
name: "preg_replace"
title: "执行一个正则表达式的搜索和替换"
signature: "string|array|null preg_replace(string|array $pattern, string|array $replacement, string|array $subject, int $limit = -1, int $count = null)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个正则表达式的搜索和替换

## 说明

```php
string|array|null preg_replace(string|array $pattern, string|array $replacement, string|array $subject, int $limit = -1, int $count = null)
```

搜索 `$subject` 中匹配 `$pattern` 的部分，以 `$replacement` 进行替换。

匹配一个精确的字符串，而不是一个模式， 可以使用 `str_replace()` 或 `str_ireplace()` 代替这个函数。

## 参数

- **`$pattern`** — 要搜索的模式。可以是一个字符串或字符串数组。 — 可以使用一些 PCRE 修饰符。
- **`$replacement`** — 用于替换的字符串或字符串数组。如果这个参数是一个字符串，并且 `$pattern` 是一个数组，那么所有的模式都使用这个字符串进行替换。如果 `$pattern` 和 `$replacement` 都是数组，每个 `$pattern` 使用 `$replacement` 中对应的元素进行替换。如果 `$replacement` 中的元素比 `$pattern` 中的少，多出来的 `$pattern` 使用空字符串进行替换。 — `$replacement` 中可以包含后向引用 `\\{n}` 或 `${n}`，语法上首选后者。 每个这样的引用将被匹配到的第 {n} 个捕获子组捕获到的文本替换。 {n} 可以是0-99，`\\0` 和 `$0` 代表完整的模式匹配文本。捕获子组的序号计数方式为：代表捕获子组的左括号从左到右， 从1开始数。如果要在 `$replacement` 中使用反斜线，必须使用 4 个(`"\\\\"`，译注：因为这首先是 PHP 的字符串，经过转义后，是两个，再经过正则表达式引擎后才被认为是一个原文反斜线)。 — 当在替换模式下工作并且后向引用后面紧跟着需要是另外一个数字 (比如：在一个匹配模式后紧接着增加一个原文数字)，不能使用 `\\1` 这样的语法来描述后向引用。比如，`\\11`将会使`preg_replace()` 不能理解你希望的是一个 `\\1` 后向引用紧跟一个原文 `1`，还是一个 `\\11` 后向引用后面不跟任何东西。 这种情况下解决方案是使用 `${1}1`。这创建了一个独立的 `$1` 后向引用, 一个独立的原文 `1`。
- **`$subject`** — 要进行搜索和替换的字符串或字符串数组。 — 如果 `$subject` 是一个数组，搜索和替换回在 `$subject` 的每一个元素上进行, 并且返回值也会是一个数组。 — 如果 `$subject` 是关联数组，则键会保留在返回值中。
- **`$limit`** — 每个模式在每个 `$subject` 上进行替换的最大次数。默认是 `-1`(无限)。
- **`$count`** — 如果指定，将会被填充为完成的替换次数。

## 返回值

如果 `$subject` 是一个数组，`preg_replace()` 返回一个数组，其他情况下返回一个字符串。

如果匹配被查找到，替换后的 `$subject` 被返回，其他情况下返回没有改变的 `$subject`。如果发生错误，返回 `null` 。

## 错误／异常

"\e" 会并忽略，并产生 `E_WARNING` 错误。

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 示例

**使用后向引用紧跟数值原文**

```php


<?php
$string = 'April 15, 2003';
$pattern = '/(\w+) (\d+), (\d+)/i';
$replacement = '${1}1,$3';
echo preg_replace($pattern, $replacement, $string);
?>

    
```

以上示例会输出：

```text


April1,2003

    
```

**`preg_replace()` 中使用基于索引的数组**

```php


<?php
$string = 'The quick brown fox jumps over the lazy dog.';
$patterns = array();
$patterns[0] = '/quick/';
$patterns[1] = '/brown/';
$patterns[2] = '/fox/';
$replacements = array();
$replacements[2] = 'bear';
$replacements[1] = 'black';
$replacements[0] = 'slow';
echo preg_replace($patterns, $replacements, $string);
?>

    
```

以上示例会输出：

```text


The bear black slow jumps over the lazy dog.

    
```

对模式和替换内容按 key 进行排序我们可以得到期望的结果。

```php


<?php
$string = 'The quick brown fox jumps over the lazy dog.';
$patterns = array();
$patterns[0] = '/quick/';
$patterns[1] = '/brown/';
$patterns[2] = '/fox/';
$replacements = array();
$replacements[2] = 'bear';
$replacements[1] = 'black';
$replacements[0] = 'slow';
ksort($patterns);
ksort($replacements);
echo preg_replace($patterns, $replacements, $string);
?>

    
```

以上示例会输出：

```text


The slow black bear jumps over the lazy dog.

    
```

**替换一些值**

```php


<?php
$patterns = array ('/(19|20)(\d{2})-(\d{1,2})-(\d{1,2})/',
                   '/^\s*{(\w+)}\s*=/');
$replace = array ('\3/\4/\1\2', '$\1 =');
echo preg_replace($patterns, $replace, '{startDate} = 1999-5-27');
?>

    
```

以上示例会输出：

```text


$startDate = 5/27/1999

    
```

**剥离空白字符**

这个例子剥离多余的空白字符

```php


<?php
$str = 'foo   o';
$str = preg_replace('/\s\s+/', ' ', $str);
// 将会改变为'foo o'
echo $str;
?>

    
```

**使用参数 `$count`**

```php


<?php
$count = 0;

echo preg_replace(array('/\d/', '/\s/'), '*', 'xp 4 to', -1 , $count);
echo $count; //3
?>

    
```

以上示例会输出：

```text


xp***to
3
     
    
```

## 注释

> 当使用数组形式的`$pattern`和`$replacement`时, 将会按照key在数组中出现的顺序进行处理. 这*不一定*和数组的索引顺序一致. 如果你期望使用索引对等方式用`$replacement`对`$pattern` 进行替换, 你可以在调用`preg_replace()`之前对两个数组各进行一次`ksort()`排序.

> 当 `$pattern` 和 `$replacement` 都是数组时，匹配规则将按顺序执行。也就是说第二个 `$pattern`/`$replacement` 将作用于第一个 `$pattern`/`$replacement` 生成的字符串，而不是原始字符串。 If you want to simulate replacements operating in parallel, such as swapping two values, replace one pattern by an intermediary placeholder, then in a later pair replace that intermediary placeholder with the desired replacement.
>
> ```php <?php $p = array('/a/', '/b/', '/c/'); $r = array('b', 'c', 'd'); print_r(preg_replace($p, $r, 'a')); // 打印 d ?> ```

## 参见

PCRE 模式 `preg_quote()` `preg_filter()` `preg_match()` `preg_replace_callback()` `preg_split()` `preg_last_error()` `str_replace()`
