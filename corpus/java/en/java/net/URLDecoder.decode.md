---
id: "java-en-function-urldecoder-decode"
language: "java"
lang: "en"
category: "function"
name: "URLDecoder.decode"
signature: "public static String decode(String s)"
title: "URLDecoder.decode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLDecoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLDecoder.decode

```java
public static String decode(String s)
```

Decodes a `x-www-form-urlencoded` string.
 The default charset is used to determine what characters
 are represented by any consecutive sequences of the form
 "`%xy`".

**参数**

- **s** — the `String` to decode

**返回**

- the newly decoded `String`

**异常**

- **IllegalArgumentException** — if the implementation encounters malformed escape sequences

> **⚠ Deprecated** — The resulting string may vary depending on the default charset. Instead, use the decode(String,String) method to specify the encoding.
