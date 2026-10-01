---
id: "java-en-function-carrier-run"
language: "java"
lang: "en"
category: "function"
name: "Carrier.run"
signature: "public void run(Runnable op)"
title: "Carrier.run"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ScopedValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Carrier.run

```java
public void run(Runnable op)
```

Runs an operation with each scoped value in this mapping bound to its value
 in the current thread.
 When the operation completes (normally or with an exception), each scoped value
 in the mapping will revert to being unbound, or revert to its previous value
 when previously bound, in the current thread. If `op` completes with an
 exception then it propagated by this method.

 

 Scoped values are intended to be used in a structured manner. If code
 invoked directly or indirectly by the operation creates a `StructuredTaskScope`
 but does not `close() close` it, then it is detected
 as a structure violation when the operation completes (normally or with an
 exception). In that case, the underlying construct of the `StructuredTaskScope`
 is closed and `StructureViolationException` is thrown.

**参数**

- **op** — the operation to run

**异常**

- **StructureViolationException** — if a structure violation is detected
