---
id: "java-en-function-accessflags-has"
language: "java"
lang: "en"
category: "function"
name: "AccessFlags.has"
signature: "boolean has(AccessFlag flag)"
title: "AccessFlags.has"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AccessFlags.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessFlags.has

```java
boolean has(AccessFlag flag)
```

{@return whether the specified flag is set}  If the specified flag
 is not available to this `location() location`, returns
 `false`.

**参数**

- **flag** — the flag to test

**参见**

- #location()
