---
id: "java-en-function-abstractselector-begin"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelector.begin"
signature: "protected final void begin()"
title: "AbstractSelector.begin"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector.begin

```java
protected final void begin()
```

Marks the beginning of an I/O operation that might block indefinitely.

 

 This method should be invoked in tandem with the `end end`
 method, using a `try`&nbsp;...&nbsp;`finally` block as
 shown above, in order to implement interruption for
 this selector.

 

 Invoking this method arranges for the selector's `wakeup wakeup` method to be invoked if a thread's `interrupt interrupt` method is invoked while the thread is
 blocked in an I/O operation upon the selector.
