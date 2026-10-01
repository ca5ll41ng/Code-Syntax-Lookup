---
id: "java-en-function-objectinputfilter-checkinput"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputFilter.checkInput"
signature: "Status checkInput(FilterInfo filterInfo)"
title: "ObjectInputFilter.checkInput"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputFilter.checkInput

```java
Status checkInput(FilterInfo filterInfo)
```

Check the class, array length, number of object references, depth,
 stream size, and other available filtering information.
 Implementations of this method check the contents of the object graph being created
 during deserialization. The filter returns `ALLOWED Status.ALLOWED`,
 `REJECTED Status.REJECTED`, or `UNDECIDED Status.UNDECIDED`.

 

If `filterInfo.serialClass()` is `non-null`, there is a class to be checked.
 If `serialClass()` is `null`, there is no class and the info contains
 only metrics related to the depth of the graph being deserialized, the number of
 references, and the size of the stream read.

 Returning `null` may result in a `NullPointerException` or other unpredictable behavior.

**参数**

- **filterInfo** — provides information about the current object being deserialized, if any, and the status of the `ObjectInputStream`

**返回**

- `ALLOWED Status.ALLOWED` if accepted, `REJECTED Status.REJECTED` if rejected, `UNDECIDED Status.UNDECIDED` if undecided.
