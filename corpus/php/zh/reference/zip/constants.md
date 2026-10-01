---
id: "zh-php-guide-zip-constants"
language: "php"
lang: "zh"
category: "guide"
name: "zip.constants"
title: "预定义常量"
module: "zip"
source_url: "https://www.php.net/manual/zh/zip.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

`ZipArchive` 使用类常量。有各种类型的常量，主要有：Flag（以 `FL_` 为前缀）、全局 Flag（以 `AFL_` 为前缀）、错误（以 `ER_` 为前缀）以及模式（没有前缀）。

- **`ZIPARCHIVE::CREATE` (`int`)** — 如果不存在则创建归档。
- **`ZIPARCHIVE::OVERWRITE` (`int`)** — 如果归档存在，则忽略其当前内容。换句话说，处理方式与空归档相同。
- **`ZIPARCHIVE::EXCL` (`int`)** — 如果归档已经存在，则出错。
- **`ZipArchive::RDONLY` (`int`)** — 只读模式打开归档。 在 PHP 7.4.3 和 PECL zip 1.17.1 中可用，前提是编译时使用的 libzip 版本大于等于 1.0.0。
- **`ZIPARCHIVE::CHECKCONS` (`int`)** — 对归档执行额外的一致性检查，如果失败则显示错误。

- **`ZipArchive::AFL_RDONLY` (`int`)** — 归档只读，无法清除。如果构建时使用的是 libzip ≥ 1.10.0，分别在 PHP 8.3.0 和 PECL zip 1.22.0 中可用。
- **`ZipArchive::AFL_IS_TORRENTZIP` (`int`)** — 当前归档是 torrentzipped（使用 BitTorrent 压缩）。如果构建时使用的是 libzip ≥ 1.10.0，分别在 PHP 8.3.0 和 PECL zip 1.22.0 中可用。
- **`ZipArchive::AFL_WANT_TORRENTZIP` (`int`)** — 使用 torrentzip 格式写入归档。如果构建时使用的是 libzip ≥ 1.10.0，分别在 PHP 8.3.0 和 PECL zip 1.22.0 中可用。
- **`ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE` (`int`)** — 归档为空时不要删除文件。如果构建时使用的是 libzip ≥ 1.10.0，分别在 PHP 8.3.0 和 PECL zip 1.22.0 中可用。

- **`ZIPARCHIVE::FL_NOCASE` (`int`)** — 名称查找时忽略大小写。
- **`ZIPARCHIVE::FL_NODIR` (`int`)** — 忽略目录部分
- **`ZIPARCHIVE::FL_COMPRESSED` (`int`)** — 读取压缩数据
- **`ZIPARCHIVE::FL_UNCHANGED` (`int`)** — 使用原始数据，忽略更改。
- **`ZipArchive::FL_RECOMPRESS` (`int`)** — 强制重新压缩数据。 PHP 8.0.0 和 PECL zip 1.18.0 起可以使用。 从 PHP 8.3.0 和 PECL zip 1.22.1 起已被弃用， 将在 libzip 的未来版本中被删除。
- **`ZipArchive::FL_ENCRYPTED` (`int`)** — 读取加密数据（意味着 FL_COMPRESSED）。 PHP 8.0.0 和 PECL zip 1.18.0 起可以使用。
- **`ZipArchive::FL_OVERWRITE` (`int`)** — 如果文件名称存在，重写（覆盖）它。 PHP 8.0.0 和 PECL zip 1.18.0 起可以使用。
- **`ZipArchive::FL_LOCAL` (`int`)** — 在本地 header 中。 PHP 8.0.0 和 PECL zip 1.18.0 起可以使用。
- **`ZipArchive::FL_CENTRAL` (`int`)** — In central directory. PHP 8.0.0 和 PECL zip 1.18.0 起可以使用。
- **`ZipArchive::FL_ENC_GUESS` (`int`)** — 猜测字符串编码（默认情况）。从 PHP 7.0.8 起可用。
- **`ZipArchive::FL_ENC_RAW` (`int`)** — 获取未修改的字符串。从 PHP 7.0.8 起可用。
- **`ZipArchive::FL_ENC_STRICT` (`int`)** — 严格遵循规范要求。从 PHP 7.0.8 起可用。
- **`ZipArchive::FL_ENC_UTF_8` (`int`)** — 字符串是 UTF-8 编码。从 PHP 7.0.8 起可用。
- **`ZipArchive::FL_ENC_CP437` (`int`)** — 字符串是 CP437 编码。从 PHP 7.0.8 起可用。
- **`ZipArchive::FL_OPEN_FILE_NOW` (`int`)** — 在添加文件，而不是等待归档关闭时打开文件。需要注意文件描述符消耗的情况。 从 PHP 8.3.0 和 PECL zip 1.22.1 起可用。

- **`ZIPARCHIVE::CM_DEFAULT` (`int`)** — 更好的压缩或存储。
- **`ZIPARCHIVE::CM_STORE` (`int`)** — 存储（不压缩）。
- **`ZIPARCHIVE::CM_SHRINK` (`int`)** — 收缩
- **`ZIPARCHIVE::CM_REDUCE_1` (`int`)** — 用因子 1 换算
- **`ZIPARCHIVE::CM_REDUCE_2` (`int`)** — 用因子 2 换算
- **`ZIPARCHIVE::CM_REDUCE_3` (`int`)** — 用因子 3 换算
- **`ZIPARCHIVE::CM_REDUCE_4` (`int`)** — 用因子 4 换算
- **`ZIPARCHIVE::CM_IMPLODE` (`int`)** — 聚爆
- **`ZIPARCHIVE::CM_DEFLATE` (`int`)** — deflated
- **`ZIPARCHIVE::CM_DEFLATE64` (`int`)** — deflate64
- **`ZIPARCHIVE::CM_PKWARE_IMPLODE` (`int`)** — PKWARE imploding
- **`ZIPARCHIVE::CM_BZIP2` (`int`)** — BZIP2 算法
- **`ZipArchive::CM_LZMA` (`int`)** — LZMA 算法
- **`ZipArchive::CM_LZMA2` (`int`)** — LZMA2 algorithm. Available as of PHP 7.4.3 and PECL zip 1.16.0, respectively, if built against libzip ≥ 1.6.0.
- **`ZipArchive::CM_ZSTD` (`int`)** — Zstandard（zstd）压缩算法。如果针对 libzip ≥ 1.8.0 编译，则分别从 PHP 8.0.0 和 PECL zip 1.19.1 开始可用。
- **`ZipArchive::CM_XZ` (`int`)** — XZ 算法。 在 PHP 7.4.3 和 PECL zip 1.16.1 中可用，前提是编译时使用的 libzip 版本大于等于 1.6.0。
- **`ZipArchive::CM_TERSE` (`int`)**
- **`ZipArchive::CM_LZ77` (`int`)**
- **`ZipArchive::CM_WAVPACK` (`int`)**
- **`ZipArchive::CM_PPMD` (`int`)**

- **`ZIPARCHIVE::ER_OK` (`int`)** — 没有错误。
- **`ZIPARCHIVE::ER_MULTIDISK` (`int`)** — 不支持多磁盘 zip 归档。
- **`ZIPARCHIVE::ER_RENAME` (`int`)** — 重命名临时文件失败。
- **`ZIPARCHIVE::ER_CLOSE` (`int`)** — 关闭 zip 归档失败
- **`ZIPARCHIVE::ER_SEEK` (`int`)** — 寻址错误
- **`ZIPARCHIVE::ER_READ` (`int`)** — 读取错误
- **`ZIPARCHIVE::ER_WRITE` (`int`)** — 写入错误
- **`ZIPARCHIVE::ER_CRC` (`int`)** — CRC校验失败
- **`ZIPARCHIVE::ER_ZIPCLOSED` (`int`)** — zip 归档已关闭
- **`ZIPARCHIVE::ER_NOENT` (`int`)** — 没有文件
- **`ZIPARCHIVE::ER_EXISTS` (`int`)** — 文件已经存在
- **`ZIPARCHIVE::ER_OPEN` (`int`)** — 不能打开文件
- **`ZIPARCHIVE::ER_TMPOPEN` (`int`)** — 创建临时文件失败
- **`ZIPARCHIVE::ER_ZLIB` (`int`)** — Zlib错误
- **`ZIPARCHIVE::ER_MEMORY` (`int`)** — 内存分配失败
- **`ZIPARCHIVE::ER_CHANGED` (`int`)** — 条目已被改变
- **`ZIPARCHIVE::ER_COMPNOTSUPP` (`int`)** — 不支持的压缩方式
- **`ZIPARCHIVE::ER_EOF` (`int`)** — 过早的EOF
- **`ZIPARCHIVE::ER_INVAL` (`int`)** — 无效的参数
- **`ZIPARCHIVE::ER_NOZIP` (`int`)** — 不是 zip 归档
- **`ZIPARCHIVE::ER_INTERNAL` (`int`)** — 内部错误
- **`ZIPARCHIVE::ER_INCONS` (`int`)** — Zip 归档不一致
- **`ZIPARCHIVE::ER_REMOVE` (`int`)** — 不能移除文件
- **`ZIPARCHIVE::ER_DELETED` (`int`)** — 条目已删除
- **`ZipArchive::ER_ENCRNOTSUPP` (`int`)** — 不支持的压缩方式。 PHP 7.4.3 和 PECL zip 1.16.1 起可用。
- **`ZipArchive::ER_RDONLY` (`int`)** — 归档只读。 分别于 PHP 7.4.3 和 PECL zip 1.16.1 起可用。
- **`ZipArchive::ER_NOPASSWD` (`int`)** — 没有提供密码。 分别于 PHP 7.4.3 和 PECL zip 1.16.1 起可用。
- **`ZipArchive::ER_WRONGPASSWD` (`int`)** — 提供的密码错误。 分别于 PHP 7.4.3 和 PECL zip 1.16.1 起可用。
- **`ZipArchive::ER_OPNOTSUPP` (`int`)** — 操作不支持。 在 PHP 7.4.3 和 PECL zip 1.16.1 中可用，前提是编译时使用的 libzip 版本大于等于 1.0.0。
- **`ZipArchive::ER_INUSE` (`int`)** — 资源仍在使用。 在 PHP 7.4.3 和 PECL zip 1.16.1 中可用，前提是编译时使用的 libzip 版本大于等于 1.0.0。
- **`ZipArchive::ER_TELL` (`int`)** — Tell error. 在 PHP 7.4.3 和 PECL zip 1.16.1 中可用，前提是编译时使用的 libzip 版本大于等于 1.0.0。
- **`ZipArchive::ER_COMPRESSED_DATA` (`int`)** — 压缩数据无效。 在 PHP 7.4.3 和 PECL zip 1.16.1 中可用，前提是编译时使用的 libzip 版本大于等于 1.6.0。
- **`ZipArchive::ER_CANCELLED` (`int`)** — 操作已取消。 在 PHP 7.4.3 和 PECL zip 1.16.1 中可用，前提是编译时使用的 libzip 版本大于等于 1.6.0。
- **`ZipArchive::ER_DATA_LENGTH` (`int`)** — 数据长度异常。如果构建时使用的是 libzip ≥ 1.10.0，分别在 PHP 8.3.0 和 PECL zip 1.22.0 中可用。
- **`ZipArchive::ER_NOT_ALLOWED` (`int`)** — 在 torrentzip 中不允许。如果构建时使用的是 libzip ≥ 1.10.0，分别在 PHP 8.3.0 和 PECL zip 1.22.0 中可用。
- **`ZipArchive::ER_TRUNCATED_ZIP` (`int`)** — 可能截断或损坏的 zip 归档。 如果构建时使用的是 libzip ≥ 1.11.1， 分别在 PHP 8.4.0 和 PECL zip 1.22.4 中可用。

- **`ZipArchive::EM_NONE` (`int`)** — 没有加密。分别从 PHP 7.2.0 和 PECL zip 1.14.0 开始可用。
- **`ZipArchive::EM_TRAD_PKWARE` (`int`)** — 传统 PKWARE 加密。分别从 PHP 8.0.0 和 PECL zip 1.19.0 开始可用。
- **`ZipArchive::EM_AES_128` (`int`)** — AES 128 encryption, since PHP 7.2.0, PECL zip 1.14.0
- **`ZipArchive::EM_AES_192` (`int`)** — AES 1192 encryption, since PHP 7.2.0, PECL zip 1.14.0
- **`ZipArchive::EM_AES_256` (`int`)** — AES 256 encryption, since PHP 7.2.0, PECL zip 1.14.0
- **`ZipArchive::EM_UNKNOWN` (`int`)** — 未知的加密算法。分别从 PHP 8.0.0 和 PECL zip 1.19.0 开始可用。

- **`ZipArchive::LENGTH_TO_END` (`int`)** — 使用的文件大小，如果文件增大，将会忽略附加数据，如果文件变小，则会引发错误（`ZipArchive::ER_DATA_LENGTH`）。 自 PHP 8.3.0 和 PECL zip 1.22.2 起可用。
- **`ZipArchive::LENGTH_UNCHECKED` (`int`)** — 使用所有可用的数据。如果针对 libzip ≥ 1.10.1 编译，自 PHP 8.3.0 和 PECL zip 1.22.2 起可用。

- **`ZipArchive::LIBZIP_VERSION` (`string`)** — Zip 库版本。从 PHP 7.4.3 和 PECL zip 1.16.0 开始起可用。

- **`ZipArchive::OPSYS_DOS` (`int`)**
- **`ZipArchive::OPSYS_AMIGA` (`int`)**
- **`ZipArchive::OPSYS_OPENVMS` (`int`)**
- **`ZipArchive::OPSYS_UNIX` (`int`)**
- **`ZipArchive::OPSYS_VM_CMS` (`int`)**
- **`ZipArchive::OPSYS_ATARI_ST` (`int`)**
- **`ZipArchive::OPSYS_OS_2` (`int`)**
- **`ZipArchive::OPSYS_MACINTOSH` (`int`)**
- **`ZipArchive::OPSYS_Z_SYSTEM` (`int`)**
- **`ZipArchive::OPSYS_CPM` (`int`)**
- **`ZipArchive::OPSYS_WINDOWS_NTFS` (`int`)**
- **`ZipArchive::OPSYS_MVS` (`int`)**
- **`ZipArchive::OPSYS_VSE` (`int`)**
- **`ZipArchive::OPSYS_ACORN_RISC` (`int`)**
- **`ZipArchive::OPSYS_VFAT` (`int`)**
- **`ZipArchive::OPSYS_ALTERNATE_MVS` (`int`)**
- **`ZipArchive::OPSYS_BEOS` (`int`)**
- **`ZipArchive::OPSYS_TANDEM` (`int`)**
- **`ZipArchive::OPSYS_OS_400` (`int`)**
- **`ZipArchive::OPSYS_OS_X` (`int`)**
- **`ZipArchive::OPSYS_DEFAULT` (`int`)** — 自 PECL zip 1.12.4 起可用
