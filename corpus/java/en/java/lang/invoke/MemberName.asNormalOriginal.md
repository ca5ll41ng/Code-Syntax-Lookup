---
id: "java-en-function-membername-asnormaloriginal"
language: "java"
lang: "en"
category: "function"
name: "MemberName.asNormalOriginal"
signature: "public MemberName asNormalOriginal()"
title: "MemberName.asNormalOriginal"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemberName.asNormalOriginal

```java
public MemberName asNormalOriginal()
```

If this MN is a REF_invokeSpecial, return a clone with the "normal" kind
  REF_invokeVirtual; also switch either to REF_invokeInterface if clazz.isInterface.
  The end result is to get a fully virtualized version of the MN.
  (Note that resolving in the JVM will sometimes devirtualize, changing
  REF_invokeVirtual of a final to REF_invokeSpecial, and REF_invokeInterface
  in some corner cases to either of the previous two; this transform
  undoes that change under the assumption that it occurred.)
