---
id: "java-en-function-lookup-revealdirect"
language: "java"
lang: "en"
category: "function"
name: "Lookup.revealDirect"
signature: "public MethodHandleInfo revealDirect(MethodHandle target)"
title: "Lookup.revealDirect"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.revealDirect

```java
public MethodHandleInfo revealDirect(MethodHandle target)
```

Cracks a direct method handle
 created by this lookup object or a similar one.
 Security and access checks are performed to ensure that this lookup object
 is capable of reproducing the target method handle.
 This means that the cracking may fail if target is a direct method handle
 but was created by an unrelated lookup object.
 This can happen if the method handle is caller sensitive
 and was created by a lookup object for a different class.

**参数**

- **target** — a direct method handle to crack into symbolic reference components

**返回**

- a symbolic reference which can be used to reconstruct this method handle from this lookup object

**异常**

- **IllegalArgumentException** — if the target is not a direct method handle or if access checking fails
- **NullPointerException** — if the target is `null`

**参见**

- MethodHandleInfo

> *Since 1.8*
