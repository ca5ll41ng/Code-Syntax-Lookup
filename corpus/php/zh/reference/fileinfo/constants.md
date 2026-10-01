---
id: "zh-php-guide-fileinfo-constants"
language: "php"
lang: "zh"
category: "guide"
name: "fileinfo.constants"
title: "预定义常量"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/fileinfo.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`FILEINFO_NONE` (`int`)** — 无特殊处理。
- **`FILEINFO_SYMLINK` (`int`)** — 跟随符号链接。
- **`FILEINFO_MIME_TYPE` (`int`)** — 返回 mime 类型。 — 自 PHP 5.3.0 可用。
- **`FILEINFO_MIME_ENCODING` (`int`)** — 返回文件的 mime 编码。
- **`FILEINFO_MIME` (`int`)** — 按照 RFC 2045 定义的格式返回文件 mime 类型和编码。
- **`FILEINFO_COMPRESS` (`int`)** — 解压缩文件。 — 由于线程安全问题而禁用。
- **`FILEINFO_DEVICES` (`int`)** — 查看设备的块内容或字符。
- **`FILEINFO_CONTINUE` (`int`)** — 返回全部匹配的类型。
- **`FILEINFO_PRESERVE_ATIME` (`int`)** — 如果可以的话，尽可能保持原始的访问时间。
- **`FILEINFO_RAW` (`int`)** — 对于不可打印字符不转换成 `\ooo` 八进制表示格式。
- **`FILEINFO_EXTENSION` (`int`)** — 根据在文件中检测到的 MIME 类型返回适当的文件扩展名。 — 有的文件类型具有多种扩展名，例如 `JPEG` 将会返回多个扩展名，以斜线分隔，比如 `"jpeg/jpg/jpe/jfif"`。如果在 `magic.mime` 数据库里类型未知，则返回的是 `"???"`。 — PHP 7.2.0 起有效。
- **`FILEINFO_APPLE` (`int`)** — 返回 Apple 创建者和类型。
