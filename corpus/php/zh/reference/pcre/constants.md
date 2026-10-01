---
id: "zh-php-guide-pcre-constants"
language: "php"
lang: "zh"
category: "guide"
name: "pcre.constants"
title: "预定义常量"
module: "pcre"
source_url: "https://www.php.net/manual/zh/pcre.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

| 常量 | 说明 | 开始可用的版本 |
| --- | --- | --- |
| `PREG_PATTERN_ORDER` (`int`) | 对结果进行排序，以便 `$matches[0]` 是完整模式匹配的数组，`$matches[1]` 是第一个括号子模式匹配的字符串数组，以此类推。此 flag 仅与 `preg_match_all()` 一起使用。 |  |
| `PREG_SET_ORDER` (`int`) | 对结果进行排序，以便 `$matches[0]` 是第一组匹配的数组，`$matches[1]` 是第二组匹配的数组，以此类推。此 flag 仅与 `preg_match_all()` 一起使用。 |  |
| `PREG_OFFSET_CAPTURE` (`int`) | 如果设置了此 flag，则对于每次发生的匹配，还将附带返回字节偏移量。注意，这会改变返回数组中的值， 每个元素都是由匹配子串作为第 0 个元素，它相对目标字符串的偏移量作为第 1 个元素的数组。 |  |
| `PREG_SPLIT_NO_EMPTY` (`int`) | 这个 flag 告诉 `preg_split()` 仅返回非空部分。 |  |
| `PREG_SPLIT_DELIM_CAPTURE` (`int`) | 这个 flag 告诉 `preg_split()` 也捕获分隔符模式中带括号的表达式。 |  |
| `PREG_SPLIT_OFFSET_CAPTURE` (`int`) | 查看 `PREG_OFFSET_CAPTURE` 的描述。该 flag 只能用于 `preg_split()`。 |  |
| `PREG_UNMATCHED_AS_NULL` (`int`) | 此 flag 告诉 `preg_match()` 和 `preg_match_all()` 在 `$matches` 将包含的未匹配子模式作为 `null` 值。没有此 flag，未匹配的子模式将报告为空字符串，就像是空匹配一样。设置此 flag 可以区分这两种情况。 | 7.2.0 |
| `PREG_NO_ERROR` (`int`) | 如果没有错误，则由 `preg_last_error()` 返回。 | 5.2.0 |
| `PREG_INTERNAL_ERROR` (`int`) | 如果有 PCRE 内部错误，则由 `preg_last_error()` 返回。 | 5.2.0 |
| `PREG_BACKTRACK_LIMIT_ERROR` (`int`) | 如果超出了回溯限制，则由 `preg_last_error()` 返回。 | 5.2.0 |
| `PREG_RECURSION_LIMIT_ERROR` (`int`) | 如果超出了递归限制，则由 `preg_last_error()` 返回。 | 5.2.0 |
| `PREG_BAD_UTF8_ERROR` (`int`) | 如果最后一个错误是由格式错误的 UTF-8 数据引起的（仅在 UTF-8 模式下运行正则表达式时），则由 `preg_last_error()` 返回。 | 5.2.0 |
| `PREG_BAD_UTF8_OFFSET_ERROR` (`int`) | 如果偏移量不对应可用的 UTF-8 开始码位（仅在 UTF-8 模式下运行正则表达式时），则由 `preg_last_error()` 返回。 | 5.3.0 |
| `PREG_JIT_STACKLIMIT_ERROR` (`int`) | 当最后一个 PCRE 函数因 JIT 栈空间限制而失败，则由 `preg_last_error()` 返回。 | 7.0.0 |
| `PCRE_VERSION` (`string`) | PCRE 版本号和发布日期（比如：“`7.0 18-Dec-2006`”）。 | 5.2.4 |
| `PCRE_VERSION_MAJOR` (`int`) | PCRE 主版本号。 |  |
| `PCRE_VERSION_MINOR` (`int`) | PCRE 次版本号。 |  |
| `PCRE_JIT_SUPPORT` (`bool`) | 指示 PCRE JIT 支持是否可用。 |  |
| `PREG_GREP_INVERT` (`int`) | 返回与指定模式不匹配的元素。 |  |
