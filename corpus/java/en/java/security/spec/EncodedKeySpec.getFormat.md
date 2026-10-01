---
id: "java-en-function-encodedkeyspec-getformat"
language: "java"
lang: "en"
category: "function"
name: "EncodedKeySpec.getFormat"
signature: "public abstract String getFormat()"
title: "EncodedKeySpec.getFormat"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncodedKeySpec.getFormat

```java
public abstract String getFormat()
```

Returns the name of the encoding format associated with this
 key specification.

 

If the opaque representation of a key
 (see `java.security.Key Key`) can be transformed
 (see `java.security.KeyFactory KeyFactory`)
 into this key specification (or a subclass of it),
 `getFormat` called
 on the opaque key returns the same value as the
 `getFormat` method
 of this key specification.

**返回**

- a string representation of the encoding format.
