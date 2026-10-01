---
id: "java-en-function-idn-toascii"
language: "java"
lang: "en"
category: "function"
name: "IDN.toASCII"
signature: "public static String toASCII(String input, int flag)"
title: "IDN.toASCII"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/IDN.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IDN.toASCII

```java
public static String toASCII(String input, int flag)
```

Translates a string from Unicode to ASCII Compatible Encoding (ACE),
 as defined by the ToASCII operation of RFC 3490.

 

ToASCII operation can fail. ToASCII fails if any step of it fails.
 If ToASCII operation fails, an IllegalArgumentException will be thrown.
 In this case, the input string should not be used in an internationalized domain name.

 

 A label is an individual part of a domain name. The original ToASCII operation,
 as defined in RFC 3490, only operates on a single label. This method can handle
 both label and entire domain name, by assuming that labels in a domain name are
 always separated by dots. The following characters are recognized as dots:
 &#0092;u002E (full stop), &#0092;u3002 (ideographic full stop), &#0092;uFF0E (fullwidth full stop),
 and &#0092;uFF61 (halfwidth ideographic full stop). if dots are
 used as label separators, this method also changes all of them to &#0092;u002E (full stop)
 in output translated string.

      RFC 3490: Internationalizing Domain Names in Applications (IDNA)

**参数**

- **input** — the string to be processed
- **flag** — process flag; can be 0 or any logical OR of possible flags

**返回**

- the translated `String`

**异常**

- **IllegalArgumentException** — if the input string doesn't conform to RFC 3490 specification
