---
id: "java-en-function-idn-tounicode"
language: "java"
lang: "en"
category: "function"
name: "IDN.toUnicode"
signature: "public static String toUnicode(String input, int flag)"
title: "IDN.toUnicode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/IDN.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IDN.toUnicode

```java
public static String toUnicode(String input, int flag)
```

Translates a string from ASCII Compatible Encoding (ACE) to Unicode,
 as defined by the ToUnicode operation of RFC 3490.

 

ToUnicode never fails. In case of any error, the input string is returned unmodified.

 

 A label is an individual part of a domain name. The original ToUnicode operation,
 as defined in RFC 3490, only operates on a single label. This method can handle
 both label and entire domain name, by assuming that labels in a domain name are
 always separated by dots. The following characters are recognized as dots:
 &#0092;u002E (full stop), &#0092;u3002 (ideographic full stop), &#0092;uFF0E (fullwidth full stop),
 and &#0092;uFF61 (halfwidth ideographic full stop).

      RFC 3490: Internationalizing Domain Names in Applications (IDNA)

**参数**

- **input** — the string to be processed
- **flag** — process flag; can be 0 or any logical OR of possible flags

**返回**

- the translated `String`
