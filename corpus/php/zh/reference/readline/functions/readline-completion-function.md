---
id: "zh-php-function-function-readline-completion-function"
language: "php"
lang: "zh"
category: "function"
name: "readline_completion_function"
title: "注册完成函数"
signature: "bool readline_completion_function(callable $callback)"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-completion-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册完成函数

## 说明

```php
bool readline_completion_function(callable $callback)
```

这个函数注册完成函数。这与在使用 Bash 时按下 Tab 键将获得的功能相同。

## 参数

- **`$callback`** — 必须提供现有的函数名，该函数接受部分命令行并返回可能的匹配项数组。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
