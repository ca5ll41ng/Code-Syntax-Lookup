---
id: "java-en-function-constantgroup-ispresent"
language: "java"
lang: "en"
category: "function"
name: "ConstantGroup.isPresent"
signature: "boolean isPresent(int index)"
title: "ConstantGroup.isPresent"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantGroup.isPresent

```java
boolean isPresent(int index)
```

Returns an indication of whether a constant may be available.
 If it returns `true`, it will always return true in the future,
 and a call to `get` will never throw an exception.
 

 After a normal return from `get` or a present
 value is reported from `get`, this method
 must always return true.
 

 If this method returns `false`, nothing in particular
 can be inferred, since the query only concerns the internal
 logic of the `ConstantGroup` object which ensures that
 a successful query to a constant will always remain successful.
 The only way to force a permanent decision about whether
 a constant is available is to call `get` and
 be ready for an exception if the constant is unavailable.

**参数**

- **index** — the selected constant

**返回**

- `true` if the selected constant is known by this object to be present, `false` if it is known not to be present or
