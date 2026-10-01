---
id: "java-en-function-locale-getextension"
language: "java"
lang: "en"
category: "function"
name: "Locale.getExtension"
signature: "public String getExtension(char key)"
title: "Locale.getExtension"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getExtension

```java
public String getExtension(char key)
```

Returns the extension (or private use) value associated with
 the specified key, or null if there is no extension
 associated with the key. To be well-formed, the key must be one
 of `[0-9A-Za-z]`. Keys are case-insensitive, so
 for example 'z' and 'Z' represent the same extension.

**参数**

- **key** — the extension key

**返回**

- The extension, or null if this locale defines no extension for the specified key.

**异常**

- **IllegalArgumentException** — if key is not well-formed

**参见**

- #PRIVATE_USE_EXTENSION
- #UNICODE_LOCALE_EXTENSION

> *Since 1.7*
