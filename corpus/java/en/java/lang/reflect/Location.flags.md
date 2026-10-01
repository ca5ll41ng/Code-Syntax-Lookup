---
id: "java-en-function-location-flags"
language: "java"
lang: "en"
category: "function"
name: "Location.flags"
signature: "public Set<AccessFlag> flags()"
title: "Location.flags"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessFlag.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Location.flags

```java
public Set<AccessFlag> flags()
```

{@return the set of access flags defined for this location in the
 current class file format version}  The set is immutable.
 

 This method returns an empty set if this location does not exist
 in the current class file format version.

> *Since 25*
