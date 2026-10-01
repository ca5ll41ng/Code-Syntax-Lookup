---
id: "java-en-function-scopedvalue-orelse"
language: "java"
lang: "en"
category: "function"
name: "ScopedValue.orElse"
signature: "public T orElse(T other)"
title: "ScopedValue.orElse"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ScopedValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScopedValue.orElse

```java
public T orElse(T other)
```

Returns the value of this scoped value if bound in the current thread, otherwise
 returns `other`.

**参数**

- **other** — the value to return if not bound

**返回**

- the value of the scoped value if bound, otherwise `other`
