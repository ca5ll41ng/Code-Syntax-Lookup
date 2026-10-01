---
id: "java-en-function-charset-forname"
language: "java"
lang: "en"
category: "function"
name: "Charset.forName"
signature: "public static Charset forName(String charsetName)"
title: "Charset.forName"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.forName

```java
public static Charset forName(String charsetName)
```

Returns a charset object for the named charset.

**参数**

- **charsetName** — The name of the requested charset; may be either a canonical name or an alias

**返回**

- A charset object for the named charset

**异常**

- **IllegalCharsetNameException** — If the given charset name is illegal
- **IllegalArgumentException** — If the given `charsetName` is null
- **UnsupportedCharsetException** — If no support for the named charset is available in this instance of the Java virtual machine
