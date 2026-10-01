---
id: "java-en-function-immutabledescriptor-isvalid"
language: "java"
lang: "en"
category: "function"
name: "ImmutableDescriptor.isValid"
signature: "public boolean isValid()"
title: "ImmutableDescriptor.isValid"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ImmutableDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableDescriptor.isValid

```java
public boolean isValid()
```

Returns true if all of the fields have legal values given their
 names.  This method always returns true, but a subclass can
 override it to return false when appropriate.

**返回**

- true if the values are legal.

**异常**

- **RuntimeOperationsException** — if the validity checking fails. The method returns false if the descriptor is not valid, but throws this exception if the attempt to determine validity fails.
