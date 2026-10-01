---
id: "java-en-function-abstractselector-deregister"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelector.deregister"
signature: "protected final void deregister(AbstractSelectionKey key)"
title: "AbstractSelector.deregister"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector.deregister

```java
protected final void deregister(AbstractSelectionKey key)
```

Removes the given key from its channel's key set.

 

 This method must be invoked by the selector for each channel that it
 deregisters.

**参数**

- **key** — The selection key to be removed
