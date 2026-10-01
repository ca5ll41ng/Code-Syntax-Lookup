---
id: "java-en-function-inflater-needsinput"
language: "java"
lang: "en"
category: "function"
name: "Inflater.needsInput"
signature: "public boolean needsInput()"
title: "Inflater.needsInput"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Inflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inflater.needsInput

```java
public boolean needsInput()
```

Returns true if no data remains in the input buffer. This can
 be used to determine if one of the `setInput()` methods should be
 called in order to provide more input.

**返回**

- true if no data remains in the input buffer
