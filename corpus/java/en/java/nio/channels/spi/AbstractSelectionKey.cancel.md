---
id: "java-en-function-abstractselectionkey-cancel"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelectionKey.cancel"
signature: "public final void cancel()"
title: "AbstractSelectionKey.cancel"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelectionKey.cancel

```java
public final void cancel()
```

Cancels this key.

 

 If this key has not yet been cancelled then it is added to its
 selector's cancelled-key set while synchronized on that set.
