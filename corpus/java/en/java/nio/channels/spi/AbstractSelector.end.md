---
id: "java-en-function-abstractselector-end"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelector.end"
signature: "protected final void end()"
title: "AbstractSelector.end"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector.end

```java
protected final void end()
```

Marks the end of an I/O operation that might block indefinitely.

 

 This method should be invoked in tandem with the `begin begin`
 method, using a `try`&nbsp;...&nbsp;`finally` block as
 shown above, in order to implement interruption for
 this selector.
