---
id: "java-en-function-lookup-lookupmodes"
language: "java"
lang: "en"
category: "function"
name: "Lookup.lookupModes"
signature: "public int lookupModes()"
title: "Lookup.lookupModes"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.lookupModes

```java
public int lookupModes()
```

Tells which access-protection classes of members this lookup object can produce.
  The result is a bit-mask of the bits
  `PUBLIC PUBLIC`,
  `PRIVATE PRIVATE`,
  `PROTECTED PROTECTED`,
  `PACKAGE PACKAGE`,
  `MODULE MODULE`,
  `UNCONDITIONAL UNCONDITIONAL`,
  and `ORIGINAL ORIGINAL`.
  

  A freshly-created lookup object
  on the `lookup() caller's class` has
  all possible bits set, except `UNCONDITIONAL`.
  A lookup object on a new lookup class
  `in created from a previous lookup object`
  may have some mode bits set to zero.
  Mode bits can also be
  `dropLookupMode directly cleared`.
  Once cleared, mode bits cannot be restored from the downgraded lookup object.
  The purpose of this is to restrict access via the new lookup object,
  so that it can access only names which can be reached by the original
  lookup object, and also by the new lookup class.

**返回**

- the lookup modes, which limit the kinds of access performed by this lookup object

**参见**

- #in
- #dropLookupMode
