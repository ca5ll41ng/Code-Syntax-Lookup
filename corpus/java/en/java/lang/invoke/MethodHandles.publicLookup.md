---
id: "java-en-function-methodhandles-publiclookup"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.publicLookup"
signature: "public static Lookup publicLookup()"
title: "MethodHandles.publicLookup"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.publicLookup

```java
public static Lookup publicLookup()
```

Returns a `Lookup lookup object` which is trusted minimally.
 The lookup has the `UNCONDITIONAL` mode.
 It can only be used to create method handles to public members of
 public classes in packages that are exported unconditionally.
 

 As a matter of pure convention, the `lookupClass() lookup class`
 of this lookup object will be `java.lang.Object`.

 limited, there is no special access provided to the internals of Object, its package
 or its module.  This public lookup object or other lookup object with
 `UNCONDITIONAL` mode assumes readability. Consequently, the lookup class
 is not used to determine the lookup context.

 
 Discussion:
 The lookup class can be changed to any other class `C` using an expression of the form
 `in publicLookup`.
 Also, it cannot access
 caller sensitive methods.

**返回**

- a lookup object which is trusted minimally
