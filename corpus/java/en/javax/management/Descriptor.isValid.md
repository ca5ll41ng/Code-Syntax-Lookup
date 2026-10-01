---
id: "java-en-function-descriptor-isvalid"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.isValid"
signature: "public boolean isValid() throws RuntimeOperationsException"
title: "Descriptor.isValid"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.isValid

```java
public boolean isValid() throws RuntimeOperationsException
```

Returns true if all of the fields have legal values given their
 names.

**返回**

- true if the values are legal.

**异常**

- **RuntimeOperationsException** — If the validity checking fails for any reason, this exception will be thrown. The method returns false if the descriptor is not valid, but throws this exception if the attempt to determine validity fails.
