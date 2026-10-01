---
id: "java-en-function-tabulardatasupport-get"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.get"
signature: "public Object get(Object key)"
title: "TabularDataSupport.get"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.get

```java
public Object get(Object key)
```

This method simply calls `get((Object[]) key)`.

**异常**

- **NullPointerException** — if the key is `null`
- **ClassCastException** — if the key is not of the type `Object[]`
- **InvalidKeyException** — if the key does not conform to this `TabularData` instance's `TabularType` definition
