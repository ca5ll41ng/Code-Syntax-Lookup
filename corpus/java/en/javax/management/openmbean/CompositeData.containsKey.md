---
id: "java-en-function-compositedata-containskey"
language: "java"
lang: "en"
category: "function"
name: "CompositeData.containsKey"
signature: "public boolean containsKey(String key)"
title: "CompositeData.containsKey"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeData.containsKey

```java
public boolean containsKey(String key)
```

Returns `true` if and only if this `CompositeData` instance contains
 an item whose name is `key`.
 If `key` is a null or empty String, this method simply returns false.

**参数**

- **key** — the key to be tested.

**返回**

- true if this `CompositeData` contains the key.
