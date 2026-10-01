---
id: "zh-php-function-function-preg-replace-callback"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["code_injection"],"cwe":["CWE-95"],"params":[2]}
name: "preg_replace_callback"
title: "执行一个正则表达式搜索并且使用一个回调进行替换"
signature: "string|array|null preg_replace_callback(string|array $pattern, callable $callback, string|array $subject, int $limit = -1, int $count = null, int $flags = 0)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-replace-callback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个正则表达式搜索并且使用一个回调进行替换

## 说明

```php
string|array|null preg_replace_callback(string|array $pattern, callable $callback, string|array $subject, int $limit = -1, int $count = null, int $flags = 0)
```

这个函数的行为除了可以指定一个 `$callback` 替代 `$replacement` 进行替换字符串的计算，其他方面等同于 `preg_replace()`。

## 参数

- **`$pattern`** — 要搜索的模式，可以是字符串或一个字符串数组。
- **`$callback`** — 一个回调函数，在每次需要替换时调用，调用时函数得到的参数是从 `$subject` 中匹配到的结果。回调函数返回真正参与替换的字符串。这是该回调函数的签名： — `string``{handler}()` `array``$matches` — 经常会需要 `$callback` 函数而仅用于 `preg_replace_callback()` 一个地方的调用。在这种情况下，你可以使用 匿名函数 来定义一个匿名函数作为 `preg_replace_callback()` 调用时的回调。 这样做你可以保留所有调用信息在同一个位置并且不会因为一个不在任何其他地方使用的回调函数名称而污染函数名称空间。 — **`preg_replace_callback()` 和 匿名函数** ```php <?php /* 一个unix样式的命令行过滤器，用于将段落开始部分的大写字母转换为小写。 */ $fp = fopen("php://stdin", "r") or die("can't read stdin"); while (!feof($fp)) { $line = fgets($fp); $line = preg_replace_callback( '|<p>\s*\w|', function ($matches) { return strtolower($matches[0]); }, $line ); echo $line; } fclose($fp); ?> ```
- **`$subject`** — 要搜索替换的目标字符串或字符串数组。
- **`$limit`** — 对于每个模式用于每个 `$subject` 字符串的最大可替换次数。 默认是 `-1`（无限制）。
- **`$count`** — 如果指定，这个变量将被填充为替换执行的次数。
- **`$flags`** — `$flags` 可以是 `PREG_OFFSET_CAPTURE` 和 `PREG_UNMATCHED_AS_NULL` 标志的组合， 这会影响匹配到的结果的格式。 相关详情请参阅 `preg_match()` 中的描述。

## 返回值

如果 `$subject` 是一个数组， `preg_replace_callback()` 返回一个数组，其他情况返回字符串。错误发生时返回 `null`。

如果查找到了匹配，返回替换后的目标字符串（或字符串数组），其他情况 `$subject` 将会无变化返回。

## 错误／异常

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 新增 `$flags` 参数。 |

## 示例

**`preg_replace_callback()`示例**

```php


<?php
// 将文本中的年份增加一年.
$text = "April fools day is 04/01/2002\n";
$text.= "Last christmas was 12/24/2001\n";
// 回调函数
function next_year($matches)
{
  // 通常: $matches[0]是完成的匹配
  // $matches[1]是第一个捕获子组的匹配
  // 以此类推
  return $matches[1].($matches[2]+1);
}
echo preg_replace_callback(
            "|(\d{2}/\d{2}/)(\d{4})|",
            "next_year",
            $text);

?>

    
```

以上示例会输出：

```text


April fools day is 04/01/2003
Last christmas was 12/24/2002

    
```

**`preg_replace_callback()` 使用递归构造处理 BB 码的封装**

```php


<?php
$input = "plain [indent] deep [indent] deeper [/indent] deep [/indent] plain";

function parseTagsRecursive($input)
{
     /* 译注: 对此正则表达式分段分析
     * 首尾两个#是正则分隔符
     * \[indent] 匹配一个原文的[indent]
     * ((?:[^[]|\[(?!/?indent])|(?R))+)分析:
     *   (?:[^[]|\[(?!/?indent])分析:
     *  首先它是一个非捕获子组
     *   两个可选路径, 一个是非[字符, 另一个是[字符但后面紧跟着不是/indent或indent.
     *   (?R) 正则表达式递归
     *     \[/indent] 匹配结束的[/indent]
     * /

    $regex = '#\[indent]((?:[^[]|\[(?!/?indent])|(?R))+)\[/indent]#';

    if (is_array($input)) {
        $input = '<div style="margin-left: 10px">'.$input[1].'</div>';
    }

    return preg_replace_callback($regex, 'parseTagsRecursive', $input);
}

$output = parseTagsRecursive($input);

echo $output;
?>

    
```

## 参见

PCRE 模式 `preg_replace_callback_array()` `preg_quote()` `preg_replace()` `preg_last_error()` 匿名函数
