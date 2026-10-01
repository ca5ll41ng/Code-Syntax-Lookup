---
id: "zh-php-guide-mbstring-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.configuration"
title: "运行时配置"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| mbstring.language | "neutral" | `INI_ALL` |  |
| mbstring.detect_order | NULL | `INI_ALL` |  |
| mbstring.http_input | "pass" | `INI_ALL` | 已弃用 |
| mbstring.http_output | "pass" | `INI_ALL` | 已弃用 |
| mbstring.internal_encoding | NULL | `INI_ALL` | 已弃用 |
| mbstring.substitute_character | NULL | `INI_ALL` |  |
| mbstring.func_overload | "0" | `INI_SYSTEM` | 自 PHP 7.2.0 起弃用，PHP 8.0.0 起删除。 |
| mbstring.encoding_translation | "0" | `INI_PERDIR` |  |
| mbstring.http_output_conv_mimetypes | "^(text/\|application/xhtml\+xml)" | `INI_ALL` |  |
| mbstring.strict_detection | "0" | `INI_ALL` |  |
| mbstring.regex_retry_limit | "1000000" | `INI_ALL` | 自 PHP 7.4.0 起可用。 |
| mbstring.regex_stack_limit | "100000" | `INI_ALL` | 自 PHP 7.3.5 起可用。 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$mbstring.language` `string`** — mbstring 使用了国家默认语言设置（NLS）。 注意，该选项自动地定义了 `mbstring.internal_encoding` 和 `mbstring.internal_encoding`，在 php.ini 里应当放置在 `mbstring.language` 之后。
- **`$mbstring.encoding_translation` `bool`** — 为传入的 HTTP 查询启用透明字符编码过滤器，将检测和转换输入的编码为内部字符编码（internal character encoding）。
- **`$mbstring.internal_encoding` `string`**
  > 本过时特性*将*肯定会在未来被*移除*。

 — 定义内部字符的默认编码。 — 用户应该将此选项留空，并设置 `$default_charset` 作为代替。
- **`$mbstring.http_input` `string`**
  > 本过时特性*将*肯定会在未来被*移除*。

 — 定义 HTTP 输入字符的默认编码。 — 用户应该将此选项留空，并设置 `$default_charset` 作为代替。
- **`$mbstring.http_output` `string`**
  > 本过时特性*将*肯定会在未来被*移除*。

 — 定义 HTTP 输出字符的默认编码。 — 用户应该将此选项留空，并设置 `$default_charset` 作为代替。
- **`$mbstring.detect_order` `string`** — 定义字符编码的默认检测顺序。参见 `mb_detect_order()`。
- **`$mbstring.substitute_character` `string`** — 为无效编码的字符定义替代字符。 参见 `mb_substitute_character()` ，查看支持的值。
- **`$mbstring.func_overload` `string`**
  > 本特性自 PHP 7.2.0 起*废弃*，并且自 PHP 8.0.0 起被*移除*。 强烈建议不要使用本特性。

 — 用 mbstring 对应的函数覆盖单字节版本的函数集。更多信息参见函数的覆盖。 — 该设置仅能通过 php.ini 文件来修改。
- **`$mbstring.http_output_conv_mimetypes` `string`**
- **`$mbstring.strict_detection` `bool`** — 使用严格的编码检测。有关描述和示例，参见 `mb_detect_encoding()`。
- **`$mbstring.regex_retry_limit` `int`** — Limits the amount of backtracking that may be performed during one mbregex match. — 此设置仅在链接的 oniguruma >= 6.8.0 时生效。
- **`$mbstring.regex_stack_limit` `int`** — 限制 mbstring 正则表达式的栈深度。

根据 [HTML4.01 规范]()，允许 Web 浏览器以页面不同的字符编码来提交表单。参见用 `mb_http_input()` 来检测浏览器使用的字符编码。

尽管流行的浏览器能够根据给出的 HTML 文档合理猜测正确的编码，但如果能通过 `header()` 函数在 HTTP 的 `Content-Type` 头内或 ini 的 default_charset 里设置适当的 `charset` 参数则会更佳。

**php.ini 设置例子**

```text


; 设置默认语言
mbstring.language        = Neutral; 设置默认语言 Neutral(UTF-8) (默认的值)
mbstring.language        = English; 设置默认语言为 English 
mbstring.language        = Japanese; 设置默认语言为 Japanese

;; 设置内部的默认编码
;; 注意：请确保这个编码能被 PHP 所处理
mbstring.internal_encoding    = UTF-8  ; 设置内部的默认编码为 UTF-8

;; 启用 HTTP 输入编码的转换
mbstring.encoding_translation = On

;; 设置 HTTP 输入的默认编码
;; 注意：脚本不能修改 http_input 的设置
mbstring.http_input           = pass    ; 不转换
mbstring.http_input           = auto    ; 设置 HTTP 输入为 auto
                                ; "auto" 会根据 mbstring.language 自动扩展
mbstring.http_input           = SJIS    ; 设置 HTTP 输入编码为 SJIS
mbstring.http_input           = UTF-8,SJIS,EUC-JP ; 指定顺序

;; 设置 HTTP 输出的默认编码
mbstring.http_output          = pass    ; 不转换
mbstring.http_output          = UTF-8   ; 设置 HTTP 输出编码为 UTF-8

;; 设置字符编码的默认检测顺序
mbstring.detect_order         = auto    ; Set detect order to auto
mbstring.detect_order         = ASCII,JIS,UTF-8,SJIS,EUC-JP ; Specify order

;; 设置默认的替代字符
mbstring.substitute_character = 12307   ; 指定 Unicode 值
mbstring.substitute_character = none    ; 不打印字符
mbstring.substitute_character = long    ; Long 的例子： U+3000,JIS+7E7E

   
```

**php.ini 里 `EUC-JP` 用户的设置**

```text


;; 禁用输出缓冲
output_buffering      = Off

;; 设置 HTTP header 字符编码
default_charset       = EUC-JP    

;; 设置默认语言为 Japanese
mbstring.language = Japanese

;; 启用 HTTP 输入编码的转换
mbstring.encoding_translation = On

;; 启用 HTTP 输入转换的编码为 auto
mbstring.http_input   = auto 

;; 转换 HTTP 输出的编码为 EUC-JP
mbstring.http_output  = EUC-JP    

;; 设置内部编码为 EUC-JP
mbstring.internal_encoding = EUC-JP    

;; 不要打印无效的字符
mbstring.substitute_character = none   

   
```

**php.ini 里 `SJIS` 用户的设置**

```text


;; 启用输出缓冲
output_buffering     = On

;; 设置 mb_output_handler 来启用输出编码的转换
output_handler       = mb_output_handler

;; 设置 HTTP header 的字符编码
default_charset      = Shift_JIS

;; 设置默认语言为 Japanese
mbstring.language = Japanese

;; 设置 http 输入转换的编码为 auto
mbstring.http_input  = auto 

;; 转换成 SJIS
mbstring.http_output = SJIS    

;; 设置内部变量为 EUC-JP
mbstring.internal_encoding = EUC-JP    

;; 不要打印无效的字符
mbstring.substitute_character = none   

   
```
