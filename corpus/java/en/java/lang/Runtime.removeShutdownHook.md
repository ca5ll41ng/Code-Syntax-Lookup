---
id: "java-en-function-runtime-removeshutdownhook"
language: "java"
lang: "en"
category: "function"
name: "Runtime.removeShutdownHook"
signature: "public boolean removeShutdownHook(Thread hook)"
title: "Runtime.removeShutdownHook"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.removeShutdownHook

```java
public boolean removeShutdownHook(Thread hook)
```

De-registers a previously-registered virtual-machine shutdown hook.
 Hooks are compared using `==`.
 Registration and de-registration of shutdown hooks is disallowed
 once the shutdown sequence has begun.

**参数**

- **hook** — the hook to remove

**返回**

- `true` if the specified hook had previously been registered and was successfully de-registered, `false` otherwise.

**异常**

- **IllegalStateException** — If the shutdown sequence has already begun

**参见**

- #addShutdownHook
- #exit(int)

> *Since 1.3*
