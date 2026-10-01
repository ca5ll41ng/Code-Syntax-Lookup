---
id: "java-en-function-selector-keys"
language: "java"
lang: "en"
category: "function"
name: "Selector.keys"
signature: "public abstract Set<SelectionKey> keys()"
title: "Selector.keys"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector.keys

```java
public abstract Set<SelectionKey> keys()
```

Returns this selector's key set.

 

 The key set is not directly modifiable.  A key is removed only after
 it has been cancelled and its channel has been deregistered.  Any
 attempt to modify the key set will cause an `UnsupportedOperationException` to be thrown.

 

 The set is safe for use by multiple concurrent
 threads.

**返回**

- This selector's key set

**异常**

- **ClosedSelectorException** — If this selector is closed
