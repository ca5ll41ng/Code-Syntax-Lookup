---
id: "java-en-function-collator-equals"
language: "java"
lang: "en"
category: "function"
name: "Collator.equals"
signature: "public boolean equals(String source, String target)"
title: "Collator.equals"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.equals

```java
public boolean equals(String source, String target)
```

Convenience method for comparing the equality of two strings based on
 this Collator's collation rules.

**参数**

- **source** — the source string to be compared with.
- **target** — the target string to be compared with.

**返回**

- true if the strings are equal according to the collation rules.  false, otherwise.

**参见**

- java.text.Collator#compare
