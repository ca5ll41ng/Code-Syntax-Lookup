---
id: "java-en-function-arena-close"
language: "java"
lang: "en"
category: "function"
name: "Arena.close"
signature: "void close()"
title: "Arena.close"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Arena.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arena.close

```java
void close()
```

Closes this arena. If this method completes normally, the arena scope is no longer
 `isAlive() alive`, and all the memory segments associated with it
 can no longer be accessed. Furthermore, any off-heap region of memory backing the
 segments obtained from this arena are also released.

          always results in an exception being thrown. This reflects a
          deliberate design choice: failure to close an arena might reveal a bug
          in the underlying application logic.

           `this.scope().isAlive() == false`.
           Implementations are allowed to throw `UnsupportedOperationException`
           if an explicit close operation is not supported.

**异常**

- **IllegalStateException** — if the arena has already been closed
- **IllegalStateException** — if a segment associated with this arena is being accessed concurrently, e.g. by a `downcallHandle(FunctionDescriptor, Linker.Option...) downcall method handle`
- **WrongThreadException** — if this arena is confined, and this method is called from a thread other than the arena's owner thread
- **UnsupportedOperationException** — if this arena cannot be closed explicitly
- **RuntimeException** — if an exception is thrown while executing a custom cleanup action associated with this arena (e.g. as a result of calling `reinterpret` or `reinterpret`).

**参见**

- Scope#isAlive()
