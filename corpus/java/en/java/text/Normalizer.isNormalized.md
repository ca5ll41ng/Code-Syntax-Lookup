---
id: "java-en-function-normalizer-isnormalized"
language: "java"
lang: "en"
category: "function"
name: "Normalizer.isNormalized"
signature: "public static boolean isNormalized(CharSequence src, Form form)"
title: "Normalizer.isNormalized"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Normalizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Normalizer.isNormalized

```java
public static boolean isNormalized(CharSequence src, Form form)
```

Determines if the given sequence of char values is normalized.

**参数**

- **src** — The sequence of char values to be checked.
- **form** — The normalization form; one of `NFC`, `NFD`, `NFKC`, `NFKD`

**返回**

- true if the sequence of char values is normalized; false otherwise.

**异常**

- **NullPointerException** — If `src` or `form` is null.
