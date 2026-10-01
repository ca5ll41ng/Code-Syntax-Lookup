---
id: "zh-php-function-function-readline"
language: "php"
lang: "zh"
category: "function"
name: "readline"
title: "读取一行"
signature: "string|false readline(string|null $prompt = null)"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取一行

## 说明

```php
string|false readline(string|null $prompt = null)
```

从用户端读取一行。必须使用 `readline_add_history()` 将这一行添加到历史记录中。

## 参数

- **`$prompt`** — 可以指定字符串来作为用户的提示信息。

## 返回值

从用户端返回单个字符串。返回的行将会移除行尾换行符。 如果没有更多数据可读，则返回 `false`。

## 示例

**`readline()` 示例**

```php


<?php
//get 3 commands from user
for ($i=0; $i < 3; $i++) {
        $line = readline("Command: ");
        readline_add_history($line);
}

//dump history
print_r(readline_list_history());

//dump variables
print_r(readline_info());
?>

   
```
