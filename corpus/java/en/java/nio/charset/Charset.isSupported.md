---
id: "java-en-function-charset-issupported"
language: "java"
lang: "en"
category: "function"
name: "Charset.isSupported"
signature: "public static boolean isSupported(String charsetName)"
title: "Charset.isSupported"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.isSupported

```java
public static boolean isSupported(String charsetName)
```

Tells whether the named charset is supported.

**参数**

- **charsetName** — The name of the requested charset; may be either a canonical name or an alias

**返回**

- `true` if, and only if, support for the named charset is available in the current Java virtual machine

**异常**

- **IllegalCharsetNameException** — If the given charset name is illegal
- **IllegalArgumentException** — If the given `charsetName` is null
