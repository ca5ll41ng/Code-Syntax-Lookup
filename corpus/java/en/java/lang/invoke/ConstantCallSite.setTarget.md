---
id: "java-en-function-constantcallsite-settarget"
language: "java"
lang: "en"
category: "function"
name: "ConstantCallSite.setTarget"
signature: "@Override public final void setTarget(MethodHandle ignore)"
title: "ConstantCallSite.setTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantCallSite.setTarget

```java
@Override public final void setTarget(MethodHandle ignore)
```

Always throws an `UnsupportedOperationException`.
 This kind of call site cannot change its target.

**参数**

- **ignore** — a new target proposed for the call site, which is ignored

**异常**

- **UnsupportedOperationException** — because this kind of call site cannot change its target
