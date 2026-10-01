---
id: "java-en-function-immutabledescriptor-setfield"
language: "java"
lang: "en"
category: "function"
name: "ImmutableDescriptor.setField"
signature: "public final void setField(String fieldName, Object fieldValue) throws RuntimeOperationsException"
title: "ImmutableDescriptor.setField"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ImmutableDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableDescriptor.setField

```java
public final void setField(String fieldName, Object fieldValue) throws RuntimeOperationsException
```

This operation is unsupported since this class is immutable.  If
 this call would change a mutable descriptor with the same contents,
 then a `RuntimeOperationsException` wrapping an
 `UnsupportedOperationException` is thrown.  Otherwise,
 the behavior is the same as it would be for a mutable descriptor:
 either an exception is thrown because of illegal parameters, or
 there is no effect.
