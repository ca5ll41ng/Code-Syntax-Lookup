---
id: "java-en-function-field-setaccessible"
language: "java"
lang: "en"
category: "function"
name: "Field.setAccessible"
signature: "public void setAccessible(boolean flag)"
title: "Field.setAccessible"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Field.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.setAccessible

```java
public void setAccessible(boolean flag)
```

{@inheritDoc}

 

If this reflected object represents a non-final field, and this method is
 used to enable access, then both `get(Object) read`
 and `set(Object, Object) write` access to the field
 are enabled.

 

If this reflected object represents a non-modifiable final field
 then enabling access only enables read access. Any attempt to `set(Object, Object) set` the field value throws an `IllegalAccessException`. The following fields are non-modifiable:
 
 
- static final fields declared in any class or interface
 
- final fields declared in a `isRecord() record`
 
- final fields declared in a `isHidden() hidden class`
 
- fields declared in a `isValue() value class`
 
- `isStrictInit() strictly-initialized` final fields
 

 

Final fields that are not covered by this list may be modifiable.
 Enabling access will enable read access. Whether write access is allowed is
 checked when attempting to `set(Object, Object) set` the field value.

**异常**

- **InaccessibleObjectException** — {@inheritDoc}
