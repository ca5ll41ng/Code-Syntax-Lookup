---
id: "java-en-function-callsite-type"
language: "java"
lang: "en"
category: "function"
name: "CallSite.type"
signature: "public MethodType type()"
title: "CallSite.type"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/CallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallSite.type

```java
public MethodType type()
```

Returns the type of this call site's target.
 Although targets may change, any call site's type is permanent, and can never change to an unequal type.
 The `setTarget` method enforces this invariant by refusing any new target that does
 not have the previous target's type.

**返回**

- the type of the current target, which is also the type of any future target
