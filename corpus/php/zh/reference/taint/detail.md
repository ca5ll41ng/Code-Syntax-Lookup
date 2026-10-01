---
id: "zh-php-guide-taint-detail"
language: "php"
lang: "zh"
category: "guide"
name: "taint.detail"
title: "传播规则与被检查的汇点"
module: "taint"
source_url: "https://www.php.net/manual/zh/taint.detail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 传播规则与被检查的汇点

## 污点标记如何传播

污点标记是存储于字符串本身上的一个比特位，而不是存储于持有它的 变量上。对被污染的字符串进行赋值、传参或其它形式的共享，标记都会 保留。字符串拼接和插值同样会传播标记：

| `=`（赋值，包括 `list()` / `数组解构`） |
| --- |
| `.`（拼接） |
| `.=`（拼接赋值） |
| `"{$var}"`（字符串插值，包括 `ROPE` 快速路径） |

此外，taint 还理解一组固定的字符串函数：只要相关的字符串参数被污染， 返回的字符串也会被标记为已污染。常规调用和 PHP 8.4+ 的 frameless 快速路径调用都在覆盖范围内。

| `trim()`, `rtrim()`, `ltrim()` |
| --- |
| `substr()`, `strstr()` |
| `str_replace()`, `str_ireplace()` |
| `str_pad()`, `strtolower()`, `strtoupper()`, `strval()` |
| `explode()`（结果数组中的每一个元素） |
| `implode()`/`join()`（分隔符被污染时，结果同样会被污染） |
| `sprintf()`, `vsprintf()`（只有 `%s` 说明符会携带标记；`sprintf("%d", $t)` 返回的是干净字符串） |
| `dirname()`, `basename()`, `pathinfo()` |

任何 taint 没有显式理解的函数都会返回一个新的、不带标记的字符串 —— 包括 `htmlspecialchars()`、`htmlentities()` 或 `mysqli_real_escape_string()` 这类转义函数。 这是有意为之：taint 宁可多报，也不会去判断某个值在特定输出场景下 是否安全。对于已经自行校验过的值，请用 `untaint()` 清除标记。

## taint 在哪里发出警告

当一个被污染的字符串到达下列汇点（sink）之一时，taint 会发出警告 （默认级别为 `E_USER_WARNING`；可通过 taint.error_level 配置）。只有顶层的字符串参数会被检查；只是内容中包含被污染值的数组， 在 dump 时不会触发警告。

| 汇点 | 检查的内容 |
| --- | --- |
| `echo`、`print` | 被 echo / print 输出的表达式 |
| `printf()`、`vprintf()` | 格式串及其代入的各个值 |
| `print_r()`、`var_dump()`、`var_export()` | 被 dump 的值（当它是字符串时） |
| 带消息的 `exit`/`die` | 消息内容 |
| 写入 `php://output` 的 `file_put_contents()`、`fwrite()`、`fputs()` | 被写入的数据 |

| 汇点 | 检查的内容 |
| --- | --- |
| `fopen()`、`opendir()`、`unlink()` | 路径 |
| `file()`、`readfile()`、`file_get_contents()`、`highlight_file()`/`show_source()` | 路径 |
| `copy()`、`rename()`、`move_uploaded_file()` | 源路径和目标路径 |
| `mkdir()`、`rmdir()`、`touch()` | 路径 |
| `include`、`include_once`、`require`、`require_once` | 文件路径 |

| 汇点 | 检查的内容 |
| --- | --- |
| `mysqli_query()`、`mysqli_prepare()`、`mysqli_real_query()`、`mysqli_multi_query()` | 查询字符串 |
| `mysql_query()`、`sqlite_query()`、`sqlite_single_query()`、`oci_parse()`、`pg_query()`、`pg_send_query()` | 查询字符串 |
| `mysqli::query()`、`mysqli::prepare()`、`mysqli::real_query()`、`mysqli::multi_query()` | 查询字符串 |
| `PDO::query()`、`PDO::prepare()`、`PDO::exec()` | 查询字符串 |
| `SQLite3::query()`、`SQLite3::prepare()`、`SQLite3::exec()`、`SQLiteDatabase::query()`、`SQLiteDatabase::singleQuery()` | 查询字符串 |

| 汇点 | 检查的内容 |
| --- | --- |
| `exec()`、`system()`、`passthru()`、`shell_exec()`（包括反引号运算符） | 命令字符串 |
| `proc_open()`、`popen()` | 命令字符串 |
| `eval` | 被执行的代码 |
| 动态调用，如 `$func()`、`$obj->$method()`、`call_user_func()`、数组形式的 callable | 被解析的函数/方法/类名 |
| `preg_match()`、`preg_match_all()`、`preg_replace()`、`preg_split()`、`preg_grep()`、`preg_replace_callback()` | pattern（以及 `preg_replace_callback()` 的回调名） |

| 汇点 | 检查的内容 |
| --- | --- |
| `header()` | header 字符串 |
| `setcookie()`、`setrawcookie()` | cookie 的名称和值 |

| 汇点 | 检查的内容 |
| --- | --- |
| `unserialize()` | 序列化字符串 |
| `mail()` | to、subject、additional_parameters 和 additional_headers（邮件正文属于内容，不检查） |

警告的格式为 `function_name() [sink]: message`，其中 `sink` 指明被检查的操作（例如 `echo`、`include` 或函数名）， message 则描述发现的可疑污染内容。
