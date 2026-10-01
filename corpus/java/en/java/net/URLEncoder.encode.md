---
id: "java-en-function-urlencoder-encode"
language: "java"
lang: "en"
category: "function"
name: "URLEncoder.encode"
signature: "public static String encode(String s)"
title: "URLEncoder.encode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLEncoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLEncoder.encode

```java
public static String encode(String s)
```

Translates a string into `x-www-form-urlencoded`
 format. This method uses the default charset
 as the encoding scheme to obtain the bytes for unsafe characters.

**参数**

- **s** — `String` to be translated.

**返回**

- the translated `String`.

> **⚠ Deprecated** — The resulting string may vary depending on the default charset. Instead, use the encode(String,String) method to specify the encoding.
