---
id: "java-en-function-abstractselector-cancelledkeys"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelector.cancelledKeys"
signature: "protected final Set<SelectionKey> cancelledKeys()"
title: "AbstractSelector.cancelledKeys"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector.cancelledKeys

```java
protected final Set<SelectionKey> cancelledKeys()
```

Retrieves this selector's cancelled-key set.

 

 This set should only be used while synchronized upon it.

**返回**

- The cancelled-key set
