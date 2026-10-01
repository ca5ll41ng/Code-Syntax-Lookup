---
id: "java-en-function-string-transform"
language: "java"
lang: "en"
category: "function"
name: "String.transform"
signature: "public <R> R transform(Function<? super String, ? extends R> f)"
title: "String.transform"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.transform

```java
public <R> R transform(Function<? super String, ? extends R> f)
```

This method allows the application of a function to `this`
 string. The function should expect a single String argument
 and produce an `R` result.
 

 Any exception thrown by `f.apply()` will be propagated to the
 caller.

**参数**

- **f** — a function to apply
- **the** — type of the result

**返回**

- the result of applying the function to this string

**参见**

- java.util.function.Function

> *Since 12*
