---
id: "zh-php-guide-mbstring-ja-basic"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.ja-basic"
title: "日文字符多字节编码基础"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.ja-basic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 日文字符多字节编码基础

日文字符只能使用多字节编码，而且，编码规范取决于平台和字符的使用 目的（text purpose)。跟糟糕的是，编码规范之间还稍有差异。为了开发 出适应日文环境的Web应用，开发人员必须对编码规范有个清晰的认识，确保 使用了合适的编码规范。

- 存储一个日文字符最大需要6个字节空间
- 多数日文多字节字符是单字节字符出现频率的两倍。这些字符被称为 "zen-kaku"，在日文中代表的意思是"full width"。 其它窄一些的字符被称作"han-kaku"，意思是"half width"。 字符实际显示的宽度，取决于显示时使用的字体。
- 有些字符编码采用ISO-2022定义的转码序列（shift sequences) 来转换特殊的编码 空间(`00h` to `7fh`)。
- 在SMTP/NNTP协议应用中 建议 采用ISO-2022-JP编码，并且头部和实体部分，应该按照 RFC要求重新编码。虽然这些并不是强制性要求，但最好还是按这个建议做，因为几款 流行的客户端不支持其他的编码方式。
- 手机服务页面，例如[i-mode]()或者[EZweb]() 应该 使用Shift_JIS编码。
- Emoji 已经可以支持像 [i-mode]() 或者 [EZweb]() 这样的手机服务。
