---
id: "java-en-function-stackwalker-getinstance"
language: "java"
lang: "en"
category: "function"
name: "StackWalker.getInstance"
signature: "public static StackWalker getInstance()"
title: "StackWalker.getInstance"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackWalker.getInstance

```java
public static StackWalker getInstance()
```

Returns a `StackWalker` instance.

 

 This `StackWalker` is configured to skip all
 `SHOW_HIDDEN_FRAMES hidden frames` and
 no `RETAIN_CLASS_REFERENCE class reference` is retained.

**返回**

- a `StackWalker` configured to skip all `SHOW_HIDDEN_FRAMES hidden frames` and no `RETAIN_CLASS_REFERENCE class reference` is retained.
