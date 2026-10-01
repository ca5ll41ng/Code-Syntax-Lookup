---
id: "zh-php-guide-filesystem-constants"
language: "php"
lang: "zh"
category: "guide"
name: "filesystem.constants"
title: "预定义常量"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/filesystem.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`SEEK_SET` (`int`)**
- **`SEEK_CUR` (`int`)**
- **`SEEK_END` (`int`)**
- **`LOCK_SH` (`int`)**
- **`LOCK_EX` (`int`)**
- **`LOCK_UN` (`int`)**
- **`LOCK_NB` (`int`)**

- **`FILE_USE_INCLUDE_PATH` (`int`)** — 在 include_path 里搜索 `$filename`。
- **`FILE_NO_DEFAULT_CONTEXT` (`int`)**
- **`FILE_APPEND` (`int`)** — 为存在的文件添加内容。
- **`FILE_IGNORE_NEW_LINES` (`int`)** — 过滤换行（EOL）字符。
- **`FILE_SKIP_EMPTY_LINES` (`int`)** — 过滤空行。
- **`FILE_BINARY` (`int`)** — 二进制模式。 > 此常量无效，并且自 PHP 8.1.0 起弃用。
- **`FILE_TEXT` (`int`)** — 文本模式。 > 此常量无效，并且自 PHP 8.1.0 起弃用。

- **`GLOB_AVAILABLE_FLAGS` (`int`)** — 所有 `GLOB_{*}` flag 的组合。等同于 `0` | `GLOB_BRACE` | `GLOB_MARK` | `GLOB_NOSORT` | `GLOB_NOCHECK` | `GLOB_NOESCAPE` | `GLOB_ERR` | `GLOB_ONLYDIR`
- **`GLOB_BRACE` (`int`)** — 扩展 {a,b,c} 为匹配“a”、“b”或“c”
  > `GLOB_BRACE` 在一些非 GUN 系统无效，像 Solaris 或 Alpine Linux。


- **`GLOB_ERR` (`int`)** — 读取错误（如目录无法读取）时停止，默认忽略错误。
- **`GLOB_MARK` (`int`)** — 向每个返回的目录添加斜线（在 Windows 上为反斜线）
- **`GLOB_NOCHECK` (`int`)** — 如果没有找到匹配该模式的文件，则返回搜索模式
- **`GLOB_NOESCAPE` (`int`)** — 反斜线不引用元字符
- **`GLOB_NOSORT` (`int`)** — 按照目录中出现的顺序返回文件（不排序）。当不使用此 flag 时，路径名按字母顺序排序
- **`GLOB_ONLYDIR` (`int`)** — 只返回与模式匹配的目录条目

- **`PATHINFO_ALL` (`int`)** — 路径信息的所有部分都以关联数组的形式返回。
- **`PATHINFO_DIRNAME` (`int`)** — 目录或文件的路径。
- **`PATHINFO_BASENAME` (`int`)** — 目录的名称或文件的名称和扩展名。
- **`PATHINFO_EXTENSION` (`int`)** — 文件的扩展名。
- **`PATHINFO_FILENAME` (`int`)** — 文件的名称（不带扩展名）或目录的名称。

- **`INI_SCANNER_NORMAL` (`int`)** — 普通的 INI 扫描模式。
- **`INI_SCANNER_RAW` (`int`)** — 原始（Raw） INI 扫描模式。
- **`INI_SCANNER_TYPED` (`int`)** — Typed INI 扫描模式。

- **`FNM_NOESCAPE` (`int`)** — 禁用反斜线转义
- **`FNM_PATHNAME` (`int`)** — 字符串里的斜杠只匹配指定模式里的斜杠。
- **`FNM_PERIOD` (`int`)** — 字符串里的起始点号必须完全匹配指定模式里的点号。
- **`FNM_CASEFOLD` (`int`)** — 大小写不敏感的匹配，GNU 扩展的一部分。

- **`UPLOAD_ERR_CANT_WRITE` (`int`)** — 文件无法写入磁盘。常量值为 `7`。
- **`UPLOAD_ERR_EXTENSION` (`int`)** — PHP 扩展程序停止了文件上传。PHP 没有提供确定是哪个扩展程序导致文件上传停止的方法；使用 `phpinfo()` 检查已加载扩展程序的列表可能会有所帮助。常量的值为 `8`。
- **`UPLOAD_ERR_FORM_SIZE` (`int`)** — 上传的文件超出了 HTML 表单中指定的 *MAX_FILE_SIZE* 指令。常量的值为 `2`。
- **`UPLOAD_ERR_INI_SIZE` (`int`)** — 上传的文件超出了 php.ini 中 upload_max_filesize 命令的大小。该常量的值是 `1`。
- **`UPLOAD_ERR_NO_FILE` (`int`)** — 未上传任何文件。常量值为 `4`。
- **`UPLOAD_ERR_NO_TMP_DIR` (`int`)** — 缺少临时文件夹。常量的值为 `6`。
- **`UPLOAD_ERR_OK` (`int`)** — 没有错误，文件上传成功。常量值为 `0`。
- **`UPLOAD_ERR_PARTIAL` (`int`)** — 上传的文件仅部分上传。常量值为 `3`。
