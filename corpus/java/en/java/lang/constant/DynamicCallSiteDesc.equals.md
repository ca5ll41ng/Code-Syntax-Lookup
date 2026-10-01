---
id: "java-en-function-dynamiccallsitedesc-equals"
language: "java"
lang: "en"
category: "function"
name: "DynamicCallSiteDesc.equals"
signature: "public final boolean equals(Object o)"
title: "DynamicCallSiteDesc.equals"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DynamicCallSiteDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicCallSiteDesc.equals

```java
public final boolean equals(Object o)
```

Compares the specified object with this descriptor for equality.  Returns
 `true` if and only if the specified object is also a
 `DynamicCallSiteDesc`, and both descriptors have equal
 bootstrap methods, bootstrap argument lists, invocation name, and
 invocation type.

**参数**

- **o** — the `DynamicCallSiteDesc` to compare to this `DynamicCallSiteDesc`

**返回**

- `true` if the specified `DynamicCallSiteDesc` is equal to this `DynamicCallSiteDesc`.
