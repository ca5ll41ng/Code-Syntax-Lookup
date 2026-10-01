---
id: "java-en-function-tabulardatasupport-containskey"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.containsKey"
signature: "public boolean containsKey(Object key)"
title: "TabularDataSupport.containsKey"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.containsKey

```java
public boolean containsKey(Object key)
```

Returns `true` if and only if this `TabularData` instance contains a `CompositeData` value
 (ie a row) whose index is the specified key. If key cannot be cast to a one dimension array
 of Object instances, this method simply returns `false`; otherwise it returns the result of the call to
 `this.containsKey((Object[]) key)`.

**参数**

- **key** — the index value whose presence in this `TabularData` instance is to be tested.

**返回**

- `true` if this `TabularData` indexes a row value with the specified key.
