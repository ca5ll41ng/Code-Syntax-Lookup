---
id: "java-en-function-normalizer-normalize"
language: "java"
lang: "en"
category: "function"
name: "Normalizer.normalize"
signature: "public static String normalize(CharSequence src, Form form)"
title: "Normalizer.normalize"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Normalizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Normalizer.normalize

```java
public static String normalize(CharSequence src, Form form)
```

Normalize a sequence of char values.
 The sequence will be normalized according to the specified normalization
 form.

**参数**

- **src** — The sequence of char values to normalize.
- **form** — The normalization form; one of `NFC`, `NFD`, `NFKC`, `NFKD`

**返回**

- The normalized String

**异常**

- **NullPointerException** — If `src` or `form` is null.
