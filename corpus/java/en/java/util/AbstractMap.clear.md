---
id: "java-en-function-abstractmap-clear"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.clear"
signature: "public void clear()"
title: "AbstractMap.clear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.clear

```java
public void clear()
```

{@inheritDoc}

 This implementation calls `entrySet().clear()`.

 

Note that this implementation throws an
 `UnsupportedOperationException` if the `entrySet`
 does not support the `clear` operation.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
