---
id: "java-en-function-selectionkey-attach"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.attach"
signature: "public final Object attach(Object ob)"
title: "SelectionKey.attach"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.attach

```java
public final Object attach(Object ob)
```

Attaches the given object to this key.

 

 An attached object may later be retrieved via the `attachment()
 attachment` method.  Only one object may be attached at a time; invoking
 this method causes any previous attachment to be discarded.  The current
 attachment may be discarded by attaching `null`.

**参数**

- **ob** — The object to be attached; may be `null`

**返回**

- The previously-attached object, if any, otherwise `null`
