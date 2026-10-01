---
id: "zh-php-function-function-setlocale"
language: "php"
lang: "zh"
category: "function"
name: "setlocale"
title: "设置区域信息"
signature: "string|false setlocale(int $category, string $locales, string|null $locales)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.setlocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置区域信息

## 说明

```php
string|false setlocale(int $category, string $locales, string|null $locales)
```

替代签名（不支持命名参数）：

```php
string|false setlocale(int $category, array $locale_array)
```

设置区域信息。

> 区域信息是按进程维护的，而不是线程。如果在多线程服务器 API 上运行 PHP，区域设置可能在脚本运行时突然变化，尽管脚本本身并没有调用 `setlocale()`。这是因为其它脚本在同一时刻的同一进程的不同线程中运行，使用 `setlocale()` 改变了进程级别的区域。在 Windows 上，自 PHP 7.0.5 起，每个线程都维护自己的区域信息。

## 参数

- **`$category`** — `$category` 命名常量指定的受区域设置的功能类别: - `LC_ALL` 所有的设置 - `LC_COLLATE` 字符串比较, 详见 `strcoll()` - `LC_CTYPE` 字符串的分类与转换, 参见例子 `ctype_alpha()` - `LC_MONETARY` 等同 `localeconv()` - `LC_NUMERIC` 对于小数点的分隔（另请参见 `localeconv()`） - `LC_TIME` 时间与格式 `strftime()` - `LC_MESSAGES` 系统响应（如果 PHP 使用 `libintl` 编译）
- **`$locales`** — 如果 `$locales` 是空字符串 `""` 或 `null`，则区域名将从跟上述类别同名的环境变量的值或“LANG”中设置。 — 如果 `$locales` 是 `"0"`，则区域设置不受影响，仅返回当前设置。 — 如果 `$locales` 后跟附加参数，则每个参数都会尝试设置为新的区域，直至成功。对于以下情况非常有用：不同的系统已知的区域名称不同；为可能无效的区域提供后备。
- **`$rest`** — 可选的字符串参数，尝试作为区域设置，直至成功。
- **`$locale_array`** — 尝试将数组中的每个元素设置为新的区域，直至成功。对于以下情况非常有用：不同的系统已知的区域名称不同；为可能无效的区域提供后备。

> 在 Windows 中，setlocale(LC_ALL, '') 从系统中的区域/语言设置（通过控制面板访问）中设置区域设置信息。

## 返回值

返回新的当前区域，如果区域功能没有在当前平台实现、指定区域不存在或类别名无效时返回 `false`。

无效的类别名也会导致警告消息。类别/区域名可以在 [RFC 1766](1766) 和 [ISO 639]() 中找到。不同的系统有不同的区域命名方案。

> `setlocale()` 的返回值依赖运行 PHP 的系统。它准确返回系统 `setlocale` 函数返回的内容。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 将整数 `0` 作为 `$locales` 参数传递给 `setlocale()` 不再受支持，现会抛出 TypeError。 |

## 示例

**`setlocale()` 示例**

```php


<?php
/* 设置区域为荷兰 */
setlocale(LC_ALL, 'nl_NL');

/* 输出：vrijdag 22 december 1978 */
echo strftime("%A %e %B %Y", mktime(0, 0, 0, 12, 22, 1978));

/* 尝试为德语设置不同的可能区域 */
$loc_de = setlocale(LC_ALL, 'de_DE@euro', 'de_DE', 'de', 'ge');
echo "Preferred locale for german on this system is '$loc_de'";
?>

    
```

**`setlocale()` 读取当前设置**

```php


<?php
/* Retrieve current setting */
$current = setlocale(LC_ALL, null);

echo "Current locale '$current'";
?>

    
```

**Windows 的 `setlocale()` 示例**

```php


<?php
/* 设置区域为荷兰 */
setlocale(LC_ALL, 'nld_nld');

/* 输出：vrijdag 22 december 1978 */
echo strftime("%A %d %B %Y", mktime(0, 0, 0, 12, 22, 1978));

/* 尝试为德语设置不同的可能区域 */
$loc_de = setlocale(LC_ALL, 'de_DE@euro', 'de_DE', 'deu_deu');
echo "Preferred locale for german on this system is '$loc_de'";
?>

    
```

## 注释

> Windows 用户可以在 Microsoft 的 MSDN 网站上找到有关 `$locales` 字符串的有用信息。支持的语言字符串可在[语言字符串文档]()中找到，支持的国家/区域字符串可在[国家/区域文档]()中找到。
