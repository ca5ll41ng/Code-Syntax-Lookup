---
id: "java-en-function-immutabledescriptor-setfields"
language: "java"
lang: "en"
category: "function"
name: "ImmutableDescriptor.setFields"
signature: "public final void setFields(String[] fieldNames, Object[] fieldValues) throws RuntimeOperationsException"
title: "ImmutableDescriptor.setFields"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ImmutableDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableDescriptor.setFields

```java
public final void setFields(String[] fieldNames, Object[] fieldValues) throws RuntimeOperationsException
```

This operation is unsupported since this class is immutable.  If
 this call would change a mutable descriptor with the same contents,
 then a `RuntimeOperationsException` wrapping an
 `UnsupportedOperationException` is thrown.  Otherwise,
 the behavior is the same as it would be for a mutable descriptor:
 either an exception is thrown because of illegal parameters, or
 there is no effect.
