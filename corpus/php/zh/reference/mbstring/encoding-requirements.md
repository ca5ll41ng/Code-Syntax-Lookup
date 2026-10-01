---
id: "zh-php-guide-mbstring-php4-req"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.php4.req"
title: "PHP字符编码的要求"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.php4.req.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PHP字符编码的要求

以下类型的编码能够被 PHP 安全地使用。

- 单字节编码 - ASCII兼容（ISO646 兼容），在 `00h` 到 `7fh` 的范围内映射字符集。
- 多字节编码， - ASCII兼容，在 `00h` 到 `7fh` 的范围内映射字符集。 - 不使用 ISO2022 转义序列（escape sequences）。 - 单个字符以任意复合字节表达、不使用 `00h` 到 `7fh` 的值。

有几个不太可能用 PHP 运行的字符编码例子。 ```text JIS, SJIS, ISO-2022-JP, BIG-5 ```

虽然用任何其中一个编码来编写 PHP 脚本可能无法工作，尤其是这些编码的字符串以标识符（identifier）和字符（literal）出现， 但通过设置 `mbstring` 透明地过滤编码的函数，你几乎可以避免传入的 HTTP 查询使用这些编码。

> 我们极度不赞成在内部编码中使用 SJIS、BIG5、CP936、CP949 和 GB18030，除非你熟悉解析器（parser）、扫描器（scanner）和该字符编码。

> 当你用 PHP 连接到一个数据库，为了易用性和性能，推荐在数据库和`内部编码`使用一致的字符编码。
>
> 如果你使用的是 PostgreSQL，数据库里使用的编码和 PHP 里使用的编码可以是不同的，因为它支持字符集在前端和后端之间进行自动转换。
