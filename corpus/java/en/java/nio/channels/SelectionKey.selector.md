---
id: "java-en-function-selectionkey-selector"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.selector"
signature: "public abstract Selector selector()"
title: "SelectionKey.selector"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.selector

```java
public abstract Selector selector()
```

Returns the selector for which this key was created.  This method will
 continue to return the selector even after the key is cancelled.

**返回**

- This key's selector
