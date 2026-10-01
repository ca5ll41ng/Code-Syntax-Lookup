---
id: "java-en-function-charset-defaultcharset"
language: "java"
lang: "en"
category: "function"
name: "Charset.defaultCharset"
signature: "public static Charset defaultCharset()"
title: "Charset.defaultCharset"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.defaultCharset

```java
public static Charset defaultCharset()
```

Returns the default charset of this Java virtual machine.

 

 The default charset is `UTF-8`, unless changed in an
 implementation specific manner.

 the system property `file.encoding` on the command line. If the
 value is `COMPAT`, the default charset is derived from
 the `native.encoding` system property, which typically depends
 upon the locale and charset of the underlying operating system.

**返回**

- A charset object for the default charset

**参见**

- System##file.encoding file.encoding
- System##native.encoding native.encoding

> *Since 1.5*
