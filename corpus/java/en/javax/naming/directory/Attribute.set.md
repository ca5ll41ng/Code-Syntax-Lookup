---
id: "java-en-function-attribute-set"
language: "java"
lang: "en"
category: "function"
name: "Attribute.set"
signature: "Object set(int ix, Object attrVal)"
title: "Attribute.set"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.set

```java
Object set(int ix, Object attrVal)
```

Sets an attribute value in the ordered list of attribute values.
 This method sets the value at the `ix` index of the list of
 attribute values to be `attrVal`. The old value is removed.
 If the attribute values are unordered,
 this method sets the value that happens to be at that index
 to `attrVal`, unless `attrVal` is already one of the values.
 In that case, `IllegalStateException` is thrown.

**参数**

- **ix** — The index of the value in the ordered list of attribute values. `0 <= ix < size()`.
- **attrVal** — The possibly null attribute value to use. If null, 'null' replaces the old value.

**返回**

- The possibly null attribute value at index ix that was replaced. Null if the attribute value was null.

**异常**

- **IndexOutOfBoundsException** — If `ix` is outside the specified range.
- **IllegalStateException** — If `attrVal` already exists and the attribute values are unordered.
