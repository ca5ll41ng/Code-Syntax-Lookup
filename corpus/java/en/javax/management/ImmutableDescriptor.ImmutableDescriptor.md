---
id: "java-en-function-immutabledescriptor-immutabledescriptor"
language: "java"
lang: "en"
category: "function"
name: "ImmutableDescriptor.ImmutableDescriptor"
signature: "public ImmutableDescriptor(String[] fieldNames, Object[] fieldValues)"
title: "ImmutableDescriptor.ImmutableDescriptor"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ImmutableDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableDescriptor.ImmutableDescriptor

```java
public ImmutableDescriptor(String[] fieldNames, Object[] fieldValues)
```

Construct a descriptor containing the given fields and values.

**参数**

- **fieldNames** — the field names
- **fieldValues** — the field values

**异常**

- **IllegalArgumentException** — if either array is null, or if the arrays have different sizes, or if a field name is null or empty, or if the same field name appears more than once.
