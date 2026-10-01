---
id: "java-en-function-abstractselector-register"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelector.register"
signature: "protected abstract SelectionKey register(AbstractSelectableChannel ch, int ops, Object att)"
title: "AbstractSelector.register"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector.register

```java
protected abstract SelectionKey register(AbstractSelectableChannel ch, int ops, Object att)
```

Registers the given channel with this selector.

 

 This method is invoked by a channel's `register register` method in order to perform
 the actual work of registering the channel with this selector.

**参数**

- **ch** — The channel to be registered
- **ops** — The initial interest set, which must be valid
- **att** — The initial attachment for the resulting key

**返回**

- A new key representing the registration of the given channel with this selector
