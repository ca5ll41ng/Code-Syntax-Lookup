---
id: "java-en-function-classfiletransformer-transform"
language: "java"
lang: "en"
category: "function"
name: "ClassFileTransformer.transform"
signature: "default byte[] transform( ClassLoader loader, String className, Class<?> classBeingRedefined, ProtectionDomain protectionDomain, byte[] classfileBuffer) throws IllegalClassFormatException"
title: "ClassFileTransformer.transform"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/ClassFileTransformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileTransformer.transform

```java
default byte[] transform( ClassLoader loader, String className, Class<?> classBeingRedefined, ProtectionDomain protectionDomain, byte[] classfileBuffer) throws IllegalClassFormatException
```

Transforms the given class file and returns a new replacement class file.
 This method is invoked when the `Module Module` bearing `transform(Module,ClassLoader,String,Class,ProtectionDomain,byte[])
 transform` is not overridden.

**参数**

- **loader** — the defining loader of the class to be transformed, may be `null` if the bootstrap loader
- **className** — the name of the class in the internal form of fully qualified class and interface names as defined in The Java Virtual Machine Specification. For example, "java/util/List".
- **classBeingRedefined** — if this is triggered by a redefine or retransform, the class being redefined or retransformed; if this is a class load, `null`
- **protectionDomain** — the protection domain of the class being defined or redefined
- **classfileBuffer** — the input byte buffer in class file format - must not be modified

**返回**

- a well-formed class file buffer (the result of the transform), or `null` if no transform is performed

**异常**

- **IllegalClassFormatException** — if the input does not represent a well-formed class file
