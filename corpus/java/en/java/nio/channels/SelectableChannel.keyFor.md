---
id: "java-en-function-selectablechannel-keyfor"
language: "java"
lang: "en"
category: "function"
name: "SelectableChannel.keyFor"
signature: "public abstract SelectionKey keyFor(Selector sel)"
title: "SelectableChannel.keyFor"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectableChannel.keyFor

```java
public abstract SelectionKey keyFor(Selector sel)
```

Retrieves the key representing the channel's registration with the given
 selector.

**参数**

- **sel** — The selector

**返回**

- The key returned when this channel was last registered with the given selector, or `null` if this channel is not currently registered with that selector
