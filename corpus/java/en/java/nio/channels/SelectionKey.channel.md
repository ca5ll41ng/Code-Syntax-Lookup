---
id: "java-en-function-selectionkey-channel"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.channel"
signature: "public abstract SelectableChannel channel()"
title: "SelectionKey.channel"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.channel

```java
public abstract SelectableChannel channel()
```

Returns the channel for which this key was created.  This method will
 continue to return the channel even after the key is cancelled.

**返回**

- This key's channel
