---
id: "java-en-function-lookup-droplookupmode"
language: "java"
lang: "en"
category: "function"
name: "Lookup.dropLookupMode"
signature: "public Lookup dropLookupMode(int modeToDrop)"
title: "Lookup.dropLookupMode"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.dropLookupMode

```java
public Lookup dropLookupMode(int modeToDrop)
```

Creates a lookup on the same lookup class which this lookup object
 finds members, but with a lookup mode that has lost the given lookup mode.
 The lookup mode to drop is one of `PUBLIC PUBLIC`, `MODULE
 MODULE`, `PACKAGE PACKAGE`, `PROTECTED PROTECTED`,
 `PRIVATE PRIVATE`, `ORIGINAL ORIGINAL`, or
 `UNCONDITIONAL UNCONDITIONAL`.

 

 If this lookup is a `publicLookup() public lookup`,
 this lookup has `UNCONDITIONAL` mode set and it has no other mode set.
 When dropping `UNCONDITIONAL` on a public lookup then the resulting
 lookup has no access.

 

 If this lookup is not a public lookup, then the following applies
 regardless of its `lookupModes() lookup modes`.
 `PROTECTED PROTECTED` and `ORIGINAL ORIGINAL` are always
 dropped and so the resulting lookup mode will never have these access
 capabilities. When dropping `PACKAGE`
 then the resulting lookup will not have `PACKAGE` or `PRIVATE`
 access. When dropping `MODULE` then the resulting lookup will not
 have `MODULE`, `PACKAGE`, or `PRIVATE` access.
 When dropping `PUBLIC` then the resulting lookup has no access.

 A lookup with `PACKAGE` but not `PRIVATE` mode can safely
 delegate non-public access within the package of the lookup class without
 conferring  private access.
 A lookup with `MODULE` but not
 `PACKAGE` mode can safely delegate `PUBLIC` access within
 the module of the lookup class without conferring package access.
 A lookup with a `previousLookupClass() previous lookup class`
 (and `PUBLIC` but not `MODULE` mode) can safely delegate access
 to public classes accessible to both the module of the lookup class
 and the module of the previous lookup class.

**参数**

- **modeToDrop** — the lookup mode to drop

**返回**

- a lookup object which lacks the indicated mode, or the same object if there is no change

**异常**

- **IllegalArgumentException** — if `modeToDrop` is not one of `PUBLIC`, `MODULE`, `PACKAGE`, `PROTECTED`, `PRIVATE`, `ORIGINAL` or `UNCONDITIONAL`

**参见**

- MethodHandles#privateLookupIn

> *Since 9*
