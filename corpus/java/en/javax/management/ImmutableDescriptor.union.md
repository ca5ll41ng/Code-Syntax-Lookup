---
id: "java-en-function-immutabledescriptor-union"
language: "java"
lang: "en"
category: "function"
name: "ImmutableDescriptor.union"
signature: "public static ImmutableDescriptor union(Descriptor... descriptors)"
title: "ImmutableDescriptor.union"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ImmutableDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableDescriptor.union

```java
public static ImmutableDescriptor union(Descriptor... descriptors)
```

Return an `ImmutableDescriptor` whose contents are the union of
 the given descriptors.  Every field name that appears in any of
 the descriptors will appear in the result with the
 value that it has when the method is called.  Subsequent changes
 to any of the descriptors do not affect the ImmutableDescriptor
 returned here.

 

In the simplest case, there is only one descriptor and the
 returned `ImmutableDescriptor` is a copy of its fields at the
 time this method is called:

 
```

 Descriptor d = something();
 ImmutableDescriptor copy = ImmutableDescriptor.union(d);
 
```

**参数**

- **descriptors** — the descriptors to be combined.  Any of the descriptors can be null, in which case it is skipped.

**返回**

- an `ImmutableDescriptor` that is the union of the given descriptors.  The returned object may be identical to one of the input descriptors if it is an ImmutableDescriptor that contains all of the required fields.

**异常**

- **IllegalArgumentException** — if two Descriptors contain the same field name with different associated values.  Primitive array values are considered the same if they are of the same type with the same elements.  Object array values are considered the same if `deepEquals` returns true.
