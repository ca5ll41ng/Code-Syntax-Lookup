---
id: "java-en-function-compositedatasupport-get"
language: "java"
lang: "en"
category: "function"
name: "CompositeDataSupport.get"
signature: "public Object get(String key)"
title: "CompositeDataSupport.get"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeDataSupport.get

```java
public Object get(String key)
```

Returns the value of the item whose name is `key`.

**异常**

- **IllegalArgumentException** — if `key` is a null or empty String.
- **InvalidKeyException** — if `key` is not an existing item name for this `CompositeData` instance.
