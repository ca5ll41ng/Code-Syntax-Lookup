---
id: "java-en-function-attribute-remove"
language: "java"
lang: "en"
category: "function"
name: "Attribute.remove"
signature: "boolean remove(Object attrval)"
title: "Attribute.remove"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.remove

```java
boolean remove(Object attrval)
```

Removes a specified value from the attribute.
 If `attrval` is not in the attribute, this method does nothing.
 If the attribute values are ordered, the first occurrence of
 `attrVal` is removed and attribute values at indices greater
 than the removed
 value are shifted up towards the head of the list (and their indices
 decremented by one).

 Equality is determined by the implementation, which may use
 `Object.equals()` or schema information to determine equality.

**参数**

- **attrval** — The possibly null value to remove from this attribute. If null, remove the attribute value that is null.

**返回**

- true if the value was removed; false otherwise.
