---
id: "java-en-function-compositedatainvocationhandler-compositedatainvocationhandler"
language: "java"
lang: "en"
category: "function"
name: "CompositeDataInvocationHandler.CompositeDataInvocationHandler"
signature: "public CompositeDataInvocationHandler(CompositeData compositeData)"
title: "CompositeDataInvocationHandler.CompositeDataInvocationHandler"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeDataInvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeDataInvocationHandler.CompositeDataInvocationHandler

```java
public CompositeDataInvocationHandler(CompositeData compositeData)
```

Construct a handler backed by the given `CompositeData`.

**参数**

- **compositeData** — the `CompositeData` that will supply information to getters.

**异常**

- **IllegalArgumentException** — if `compositeData` is null.
