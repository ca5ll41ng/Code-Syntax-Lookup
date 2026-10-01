---
id: "java-en-function-runtimevisibleparameterannotationsattribute-parameterannotations"
language: "java"
lang: "en"
category: "function"
name: "RuntimeVisibleParameterAnnotationsAttribute.parameterAnnotations"
signature: "List<List<Annotation>> parameterAnnotations()"
title: "RuntimeVisibleParameterAnnotationsAttribute.parameterAnnotations"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeVisibleParameterAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeVisibleParameterAnnotationsAttribute.parameterAnnotations

```java
List<List<Annotation>> parameterAnnotations()
```

{@return the list of run-time visible annotations on the method parameters}
 The element at the i'th index corresponds to the annotations on the i'th
 formal parameter, but note that some synthetic or implicit parameters
 may be omitted by this list.  If a parameter has no annotations, that
 element is left empty, but is not omitted; thus, the list will never be
 truncated because trailing parameters are not annotated.

**参见**

- java.lang.reflect##LanguageJvmModel Java programming language and JVM modeling in core reflection
