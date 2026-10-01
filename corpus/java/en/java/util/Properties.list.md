---
id: "java-en-function-properties-list"
language: "java"
lang: "en"
category: "function"
name: "Properties.list"
signature: "public void list(PrintStream out)"
title: "Properties.list"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.list

```java
public void list(PrintStream out)
```

Prints this property list out to the specified output stream.
 This method is useful for debugging.

**参数**

- **out** — an output stream.

**异常**

- **ClassCastException** — if either a key or a value in this property list is not a string.
