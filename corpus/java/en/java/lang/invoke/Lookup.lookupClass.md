---
id: "java-en-function-lookup-lookupclass"
language: "java"
lang: "en"
category: "function"
name: "Lookup.lookupClass"
signature: "public Class<?> lookupClass()"
title: "Lookup.lookupClass"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.lookupClass

```java
public Class<?> lookupClass()
```

Tells which class is performing the lookup.  It is this class against
  which checks are performed for visibility and access permissions.
  

  If this lookup object has a `previousLookupClass() previous lookup class`,
  access checks are performed against both the lookup class and the previous lookup class.
  

  The class implies a maximum level of access permission,
  but the permissions may be additionally limited by the bitmask
  `lookupModes lookupModes`, which controls whether non-public members
  can be accessed.

**返回**

- the lookup class, on behalf of which this lookup object finds members

**参见**

- Cross-module lookups
