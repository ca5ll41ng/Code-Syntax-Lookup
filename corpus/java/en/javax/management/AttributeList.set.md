---
id: "java-en-function-attributelist-set"
language: "java"
lang: "en"
category: "function"
name: "AttributeList.set"
signature: "public void set(int index, Attribute object)"
title: "AttributeList.set"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList.set

```java
public void set(int index, Attribute object)
```

Sets the element at the position specified to be the attribute specified.
 The previous element at that position is discarded. If the index is
 out of range (index < 0 || index > size()) a RuntimeOperationsException
 should be raised, wrapping the java.lang.IndexOutOfBoundsException thrown.

**参数**

- **index** — The position specified.
- **object** — The value to which the attribute element should be set.
