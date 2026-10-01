---
id: "zh-php-function-function-token-get-all"
language: "php"
lang: "zh"
category: "function"
name: "token_get_all"
title: "将提供的源码按 PHP 标记进行分割"
signature: "array token_get_all(string $code, int $flags = 0)"
module: "tokenizer"
source_url: "https://www.php.net/manual/zh/function.token-get-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将提供的源码按 PHP 标记进行分割

## 说明

```php
array token_get_all(string $code, int $flags = 0)
```

`token_get_all()` 解析提供的 `$code` 源码字符，然后使用 Zend 引擎的语法分析器获取源码中的 PHP 语言的解析器记号。

解析器记号列表见`tokens`，或者使用 `token_name()` 翻译获取这个记号的字符串表示。

## 参数

- **`$code`** — 需要解析的 PHP 源码.
- **`$flags`** — 有效 flag： - `TOKEN_PARSE`——在指定上下文中识别关键词。

## 返回值

记号标识符数组。每个单独的记号标识符要么是单个字符（即 `;`、`.`、`>`、`!` 等），要么是有三个元素的数组，其中元素 0 是记号索引，元素 1 是原始记号的字符串内容和元素 2 是行号。

## 示例

**`token_get_all()` 示例**

```php


<?php
$tokens = token_get_all('<?php echo; ?>');

foreach ($tokens as $token) {
    if (is_array($token)) {
        echo "Line {$token[2]}: ", token_name($token[0]), " ('{$token[1]}')", PHP_EOL;
    }
}
?>

    
```

以上示例的输出类似于：

```text


Line 1: T_OPEN_TAG ('<?php ')
Line 1: T_ECHO ('echo')
Line 1: T_WHITESPACE (' ')
Line 1: T_CLOSE_TAG ('?>')

    
```

**`token_get_all()` 错误用法示例**

```php


<?php
$tokens = token_get_all('/* comment */');

foreach ($tokens as $token) {
    if (is_array($token)) {
        echo "Line {$token[2]}: ", token_name($token[0]), " ('{$token[1]}')", PHP_EOL;
    }
}
?>

    
```

以上示例的输出类似于：

```text


Line 1: T_INLINE_HTML ('/* comment */')

    
```

请注意，在前面的示例中，字符串解析为 `T_INLINE_HTML` 而不是预期的 `T_COMMENT`。这是因为在提供的代码中没有使用开放标记。这相当于在普通文件中将注释放在 PHP 标记之外。

**`token_get_all()` 在类上使用关键词示例**

```php


<?php

$source = <<<'code'
<?php

class A
{
    const PUBLIC = 1;
}
code;

$tokens = token_get_all($source, TOKEN_PARSE);

foreach ($tokens as $token) {
    if (is_array($token)) {
        echo token_name($token[0]) , PHP_EOL;
    }
}
?>

    
```

以上示例的输出类似于：

```text


T_OPEN_TAG
T_WHITESPACE
T_CLASS
T_WHITESPACE
T_STRING
T_CONST
T_WHITESPACE
T_STRING
T_LNUMBER

    
```

如果没有 `TOKEN_PARSE` flag，倒数第二个记号（`T_STRING`）将是 `T_PUBLIC`。

## 参见

`PhpToken::tokenize()` `token_name()`
