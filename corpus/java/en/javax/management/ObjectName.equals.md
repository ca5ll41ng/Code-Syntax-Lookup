---
id: "java-en-function-objectname-equals"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.equals"
signature: "public boolean equals(Object object)"
title: "ObjectName.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.equals

```java
public boolean equals(Object object)
```

Compares the current object name with another object name.  Two
 ObjectName instances are equal if and only if their canonical
 forms are equal.  The canonical form is the string described
 for `getCanonicalName`.

**参数**

- **object** — The object name that the current object name is to be compared with.

**返回**

- True if object is an ObjectName whose canonical form is equal to that of this ObjectName.
