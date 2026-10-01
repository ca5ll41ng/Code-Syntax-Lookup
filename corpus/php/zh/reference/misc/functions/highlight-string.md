---
id: "zh-php-function-function-highlight-string"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "highlight_string"
title: "字符串的语法高亮"
signature: "string|true highlight_string(string $string, bool $return = false)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.highlight-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 字符串的语法高亮

## 说明

```php
string|true highlight_string(string $string, bool $return = false)
```

使用 PHP 内置的语法高亮器所定义的颜色，打印输出或者返回输出或者返回语法高亮版本的 PHP 代码。

## 参数

- **`$string`** — 需要高亮的 PHP 代码，应当包含开始标签。
- **`$return`** — 设置该参数为 `true` 使函数返回高亮后的代码。

## 返回值

如果 `$return` 设置为 `true`，不会打印输出高亮后的代码，而是以字符串的形式返回。否则返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 返回类型从 `string\|bool` 变更为 `string\|true`。 |
| 8.3.0 | 由此产生的 HTML 有所改变。 |

## 示例

**`highlight_string()` 例子**

```php


<?php
highlight_string('<?php phpinfo(); ?>');
?>

    
```

以上示例会输出：

```text


<code><span style="color: #000000">
<span style="color: #0000BB">?php phpinfo</span><span style="color: #007700">(); </span><span style="color: #0000BB">?</span>
</span>
</code>

    
```

以上示例在 PHP 8.3 中的输出：

```text


<pre><code style="color: #000000"><span style="color: #0000BB">?php phpinfo</span><span style="color: #007700">(); </span><span style="color: #0000BB">?</span></code></pre>

    
```

## 注释

> 当使用了`$return` 参数时，本函数使用其内部输出缓冲，因此不能在 `ob_start()` 回调函数的内部使用。

产生的 HTML 标记可能会有更改。

## 参见

`highlight_file()` 高亮 INI 指令
