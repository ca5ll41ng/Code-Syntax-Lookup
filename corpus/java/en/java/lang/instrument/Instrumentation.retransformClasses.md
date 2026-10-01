---
id: "java-en-function-instrumentation-retransformclasses"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.retransformClasses"
signature: "void retransformClasses(Class<?>... classes) throws UnmodifiableClassException"
title: "Instrumentation.retransformClasses"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.retransformClasses

```java
void retransformClasses(Class<?>... classes) throws UnmodifiableClassException
```

Retransform the supplied set of classes.

 

 This function facilitates the instrumentation
 of already loaded classes.
 When classes are initially loaded or when they are
 `redefineClasses redefined`,
 the initial class file bytes can be transformed with the
 `java.lang.instrument.ClassFileTransformer ClassFileTransformer`.
 This function reruns the transformation process
 (whether or not a transformation has previously occurred).
 This retransformation follows these steps:
  
    
- starting from the initial class file bytes
    
    
- for each transformer that was added with canRetransform
      false, the bytes returned by
      `transform(Module,ClassLoader,String,Class,ProtectionDomain,byte[])
      transform` during the last class load or redefine are
      reused as the output of the transformation; note that this is
      equivalent to reapplying the previous transformation, unaltered;
      except that `transform` method is not called.
    
    
- for each transformer that was added with canRetransform
      true, the
      `transform(Module,ClassLoader,String,Class,ProtectionDomain,byte[])
      transform` method is called in these transformers
    
    
- the transformed class file bytes are installed as the new
      definition of the class
    
  

 

 The order of transformation is described in `ClassFileTransformer`.
 This same order is used in the automatic reapplication of
 retransformation incapable transforms.
 

 The initial class file bytes represent the bytes passed to
 `defineClass ClassLoader.defineClass` or
 `redefineClasses redefineClasses`
 (before any transformations
  were applied), however they might not exactly match them.
  The constant pool might not have the same layout or contents.
  The constant pool may have more or fewer entries.
  Constant pool entries may be in a different order; however,
  constant pool indices in the bytecodes of methods will correspond.
  Some attributes may not be present.
  Where order is not meaningful, for example the order of methods,
  order might not be preserved.

 

 This method operates on
 a set in order to allow interdependent changes to more than one class at the same time
 (a retransformation of class A can require a retransformation of class B).

 

 If a retransformed method has active stack frames, those active frames continue to
 run the bytecodes of the original method.
 The retransformed method will be used on new invokes.

 

 This method does not cause any initialization except that which would occur
 under the customary JVM semantics. In other words, redefining a class
 does not cause its initializers to be run. The values of static variables
 will remain as they were prior to the call.

 

 Instances of the retransformed class are not affected.

 

 The supported class file changes are described in
 JVM TI RetransformClasses.
 The class file bytes are not checked, verified and installed
 until after the transformations have been applied, if the resultant bytes are in
 error this method will throw an exception.

 

 If this method throws an exception, no classes have been retransformed.
 

 This method is intended for use in instrumentation, as described in the
 `Instrumentation class specification`.

**参数**

- **classes** — array of classes to retransform; a zero-length array is allowed, in this case, this method does nothing

**异常**

- **java.lang.instrument.UnmodifiableClassException** — if a specified class cannot be modified (`isModifiableClass` would return false)
- **java.lang.UnsupportedOperationException** — if the current configuration of the JVM does not allow retransformation (`isRetransformClassesSupported` is false) or the retransformation attempted to make unsupported changes
- **java.lang.ClassFormatError** — if the data did not contain a valid class
- **java.lang.NoClassDefFoundError** — if the name in the class file is not equal to the name of the class
- **java.lang.UnsupportedClassVersionError** — if the class file version numbers are not supported
- **java.lang.ClassCircularityError** — if the new classes contain a circularity
- **java.lang.LinkageError** — if a linkage error occurs
- **java.lang.NullPointerException** — if the supplied classes  array or any of its components is null.

**参见**

- #isRetransformClassesSupported
- #addTransformer
- java.lang.instrument.ClassFileTransformer

> *Since 1.6*
