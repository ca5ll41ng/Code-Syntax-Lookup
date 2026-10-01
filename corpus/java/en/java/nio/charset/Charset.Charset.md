---
id: "java-en-function-charset-charset"
language: "java"
lang: "en"
category: "function"
name: "Charset.Charset"
signature: "protected Charset(String canonicalName, String[] aliases)"
title: "Charset.Charset"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.Charset

```java
protected Charset(String canonicalName, String[] aliases)
```

Initializes a new charset with the given canonical name and alias
 set.

**参数**

- **canonicalName** — The canonical name of this charset
- **aliases** — An array of this charset's aliases, or null if it has no aliases

**异常**

- **IllegalCharsetNameException** — If the canonical name or any of the aliases are illegal
