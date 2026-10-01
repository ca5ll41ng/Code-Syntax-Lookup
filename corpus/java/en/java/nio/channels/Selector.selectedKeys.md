---
id: "java-en-function-selector-selectedkeys"
language: "java"
lang: "en"
category: "function"
name: "Selector.selectedKeys"
signature: "public abstract Set<SelectionKey> selectedKeys()"
title: "Selector.selectedKeys"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector.selectedKeys

```java
public abstract Set<SelectionKey> selectedKeys()
```

Returns this selector's selected-key set.

 

 Keys may be removed from, but not directly added to, the
 selected-key set.  Any attempt to add an object to the key set will
 cause an `UnsupportedOperationException` to be thrown.

 

 The selected-key set is not thread-safe.

**返回**

- This selector's selected-key set

**异常**

- **ClosedSelectorException** — If this selector is closed
