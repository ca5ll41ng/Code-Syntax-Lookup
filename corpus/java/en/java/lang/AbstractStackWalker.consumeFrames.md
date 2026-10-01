---
id: "java-en-function-abstractstackwalker-consumeframes"
language: "java"
lang: "en"
category: "function"
name: "AbstractStackWalker.consumeFrames"
signature: "protected abstract R consumeFrames()"
title: "AbstractStackWalker.consumeFrames"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackStreamFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStackWalker.consumeFrames

```java
protected abstract R consumeFrames()
```

A callback method to consume the stack frames.  This method is invoked
 once stack walking begins (i.e. it is only invoked when walkFrames is called).

 Each specialized AbstractStackWalker subclass implements the consumeFrames method
 to control the following:
 1. fetch the subsequent batches of stack frames
 2. reuse or expand the allocated buffers
 3. create specialized StackFrame objects

**返回**

- the number of consumed frames
