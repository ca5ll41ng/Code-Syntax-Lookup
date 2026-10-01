---
id: "java-en-function-membername-asconstructor"
language: "java"
lang: "en"
category: "function"
name: "MemberName.asConstructor"
signature: "public MemberName asConstructor()"
title: "MemberName.asConstructor"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemberName.asConstructor

```java
public MemberName asConstructor()
```

If this MN is not REF_newInvokeSpecial, return a clone with that ref. kind.
  In that case it must already be REF_invokeSpecial.
