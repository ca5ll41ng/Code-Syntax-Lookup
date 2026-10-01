---
id: "java-en-function-lookup-tostring"
language: "java"
lang: "en"
category: "function"
name: "Lookup.toString"
signature: "public String toString()"
title: "Lookup.toString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.toString

```java
public String toString()
```

Displays the name of the class from which lookups are to be made,
 followed by "/" and the name of the `previousLookupClass()
 previous lookup class` if present.
 (The name is the one reported by `getName() Class.getName`.)
 If there are restrictions on the access permitted to this lookup,
 this is indicated by adding a suffix to the class name, consisting
 of a slash and a keyword.  The keyword represents the strongest
 allowed access, and is chosen as follows:
 
 
- If no access is allowed, the suffix is "/noaccess".
 
- If only unconditional access is allowed, the suffix is "/publicLookup".
 
- If only public access to types in exported packages is allowed, the suffix is "/public".
 
- If only public and module access are allowed, the suffix is "/module".
 
- If public and package access are allowed, the suffix is "/package".
 
- If public, package, and private access are allowed, the suffix is "/private".
 

 If none of the above cases apply, it is the case that
 `hasFullPrivilegeAccess() full privilege access`
 (public, module, package, private, and protected) is allowed.
 In this case, no suffix is added.
 This is true only of an object obtained originally from
 `lookup MethodHandles.lookup`.
 Objects created by `in Lookup.in`
 always have restricted access, and will display a suffix.
 

 (It may seem strange that protected access should be
 stronger than private access.  Viewed independently from
 package access, protected access is the first to be lost,
 because it requires a direct subclass relationship between
 caller and callee.)

**参见**

- #in
