---
id: "java-en-function-selectionkey-isvalid"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.isValid"
signature: "public abstract boolean isValid()"
title: "SelectionKey.isValid"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.isValid

```java
public abstract boolean isValid()
```

Tells whether or not this key is valid.

 

 A key is valid upon creation and remains so until it is cancelled,
 its channel is closed, or its selector is closed.

**返回**

- `true` if, and only if, this key is valid
