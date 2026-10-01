---
id: "java-en-function-charset-newencoder"
language: "java"
lang: "en"
category: "function"
name: "Charset.newEncoder"
signature: "public abstract CharsetEncoder newEncoder()"
title: "Charset.newEncoder"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.newEncoder

```java
public abstract CharsetEncoder newEncoder()
```

Constructs a new encoder for this charset.

**返回**

- A new encoder for this charset

**异常**

- **UnsupportedOperationException** — If this charset does not support encoding
