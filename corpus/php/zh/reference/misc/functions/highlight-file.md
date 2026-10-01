---
id: "zh-php-function-function-highlight-file"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "highlight_file"
title: "语法高亮一个文件"
signature: "string|bool highlight_file(string $filename, bool $return = false)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.highlight-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 语法高亮一个文件

## 说明

```php
string|bool highlight_file(string $filename, bool $return = false)
```

使用 PHP 内置的语法高亮器所定义的颜色，打印输出或者返回 `$filename` 文件中语法高亮版本的代码。

许多服务器配置了自动高亮 *phps* 扩展的文件。比如，访问 `example.phps` 会显示语法高亮后的文件。添加以下一行代码到  使此生效：

```text


AddType application/x-httpd-php-source .phps

  
```

## 参数

- **`$filename`** — 欲高亮文件的路径。
- **`$return`** — 设置该参数为 `true` 使函数返回高亮后的代码。

## 返回值

如果 `$return` 设置为 `true`，高亮后的代码不会被打印输出，而是以字符串的形式返回。高亮成功返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 由此产生的 HTML 有所改变。 |

## 注释

> 应当注意在使用 `highlight_file()` 时，确认没有在不经意间泄漏敏感信息，类似密码或者其他任何具有潜在安全风险的信息。

> 当使用了`$return` 参数时，本函数使用其内部输出缓冲，因此不能在 `ob_start()` 回调函数的内部使用。

## 参见

`highlight_string()` 高亮 INI 指令
