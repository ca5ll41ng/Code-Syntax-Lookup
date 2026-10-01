---
id: "java-en-function-field-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Field.hashCode"
signature: "public int hashCode()"
title: "Field.hashCode"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Field.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.hashCode

```java
public int hashCode()
```

Returns a hashcode for this `Field`.  This is computed as the
 exclusive-or of the hashcodes for the underlying field's
 declaring class name and its name.
