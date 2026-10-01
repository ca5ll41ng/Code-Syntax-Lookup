---
id: "java-en-function-simpleimmutableentry-setvalue"
language: "java"
lang: "en"
category: "function"
name: "SimpleImmutableEntry.setValue"
signature: "public V setValue(V value)"
title: "SimpleImmutableEntry.setValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleImmutableEntry.setValue

```java
public V setValue(V value)
```

Replaces the value corresponding to this entry with the specified
 value (optional operation).  This implementation simply throws
 `UnsupportedOperationException`, as this class implements
 an unmodifiable map entry.

 The implementation in this class always throws `UnsupportedOperationException`.

**参数**

- **value** — new value to be stored in this entry

**返回**

- (Does not return)

**异常**

- **UnsupportedOperationException** — always
