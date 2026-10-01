---
id: "java-en-function-collator-getinstance"
language: "java"
lang: "en"
category: "function"
name: "Collator.getInstance"
signature: "public static synchronized Collator getInstance()"
title: "Collator.getInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.getInstance

```java
public static synchronized Collator getInstance()
```

Gets the Collator for the current default locale.
 The default locale is determined by `getDefault`.

**返回**

- the Collator for the default locale.(for example, en_US)

**参见**

- java.util.Locale#getDefault
