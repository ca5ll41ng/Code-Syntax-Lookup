---
id: "java-en-function-class-getrecordcomponents"
language: "java"
lang: "en"
category: "function"
name: "Class.getRecordComponents"
signature: "public RecordComponent[] getRecordComponents()"
title: "Class.getRecordComponents"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getRecordComponents

```java
public RecordComponent[] getRecordComponents()
```

Returns an array of `RecordComponent` objects representing all the
 record components of this record class, or `null` if this class is
 not a record class.

 

 The components are returned in the same order that they are declared
 in the record header. The array is empty if this record class has no
 components. If the class is not a record class, that is `isRecord` returns `false`, then this method returns `null`.
 Conversely, if `isRecord` returns `true`, then this method
 returns a non-null value.

 

 The following method can be used to find the record canonical constructor:

 {@snippet lang="java" :
 static  Constructor getCanonicalConstructor(Class cls)
     throws NoSuchMethodException {
   Class<?>[] paramTypes =
     Arrays.stream(cls.getRecordComponents())
           .map(RecordComponent::getType)
           .toArray(Class<?>[]::new);
   return cls.getDeclaredConstructor(paramTypes);
 }}

**返回**

- An array of `RecordComponent` objects representing all the record components of this record class, or `null` if this class is not a record class

> *Since 16*
