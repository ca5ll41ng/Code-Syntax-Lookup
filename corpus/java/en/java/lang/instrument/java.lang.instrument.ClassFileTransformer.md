---
id: "java-en-function-java-lang-instrument-classfiletransformer"
language: "java"
lang: "en"
category: "function"
name: "java.lang.instrument.ClassFileTransformer"
title: "ClassFileTransformer"
directive: "type"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/ClassFileTransformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileTransformer

A transformer of class files. An agent registers an implementation of this
 interface using the `addTransformer addTransformer`
 method so that the transformer's `transform(Module,ClassLoader,String,Class,ProtectionDomain,byte[])
 transform` method is invoked when classes are loaded,
 `redefineClasses redefined`, or
 `retransformClasses retransformed`. The implementation
 should override one of the `transform` methods defined here.
 Transformers are invoked before the class is defined by the Java virtual
 machine.

 

 There are two kinds of transformers, determined by the canRetransform
 parameter of
 `addTransformer`:
  
    
- retransformation capable transformers that were added with
        canRetransform as true
    
    
- retransformation incapable transformers that were added with
        canRetransform as false or where added with
        `addTransformer`
    
  

 

 Once a transformer has been registered with
 `addTransformer(ClassFileTransformer,boolean)
 addTransformer`,
 the transformer will be called for every new class definition and every class redefinition.
 Retransformation capable transformers will also be called on every class retransformation.
 The request for a new class definition is made with
 `defineClass ClassLoader.defineClass`
 or its native equivalents.
 The request for a class redefinition is made with
 `redefineClasses Instrumentation.redefineClasses`
 or its native equivalents.
 The request for a class retransformation is made with
 `retransformClasses Instrumentation.retransformClasses`
 or its native equivalents.
 The transformer is called during the processing of the request, before the class file bytes
 have been verified or applied.
 When there are multiple transformers, transformations are composed by chaining the
 transform calls.
 That is, the byte array returned by one call to transform becomes the input
 (via the classfileBuffer parameter) to the next call.

 

 Transformations are applied in the following order:
  
    
- Retransformation incapable transformers
    
    
- Retransformation incapable native transformers
    
    
- Retransformation capable transformers
    
    
- Retransformation capable native transformers
    
  

 

 For retransformations, the retransformation incapable transformers are not
 called, instead the result of the previous transformation is reused.
 In all other cases, this method is called.
 Within each of these groupings, transformers are called in the order registered.
 Native transformers are provided by the ClassFileLoadHook event
 in the Java Virtual Machine Tool Interface).

 

 The input (via the classfileBuffer parameter) to the first
 transformer is:
  
    
- for new class definition,
        the bytes passed to ClassLoader.defineClass
    
    
- for class redefinition,
        definitions.getDefinitionClassFile() where
        definitions is the parameter to
        `redefineClasses
         Instrumentation.redefineClasses`
    
    
- for class retransformation,
         the bytes passed to the new class definition or, if redefined,
         the last redefinition, with all transformations made by retransformation
         incapable transformers reapplied automatically and unaltered;
         for details see
         `retransformClasses
          Instrumentation.retransformClasses`
    
  

 

 If the implementing method determines that no transformations are needed,
 it should return null.
 Otherwise, it should create a new byte[] array,
 copy the input classfileBuffer into it,
 along with all desired transformations, and return the new array.
 The input classfileBuffer must not be modified.

 

 In the retransform and redefine cases,
 the transformer must support the redefinition semantics:
 if a class that the transformer changed during initial definition is later
 retransformed or redefined, the
 transformer must insure that the second class output class file is a legal
 redefinition of the first output class file.

 

 If the transformer throws an exception (which it doesn't catch),
 subsequent transformers will still be called and the load, redefine
 or retransform will still be attempted.
 Thus, throwing an exception has the same effect as returning null.
 To prevent unexpected behavior when unchecked exceptions are generated
 in transformer code, a transformer can catch Throwable.
 If the transformer believes the classFileBuffer does not
 represent a validly formatted class file, it should throw
 an IllegalClassFormatException;
 while this has the same effect as returning null. it facilitates the
 logging or debugging of format corruptions.

 

 Note the term class file is used as defined in chapter {@jvms 4} The
 `class` File Format of The Java Virtual Machine Specification,
 to mean a sequence of bytes in class file format, whether or not they reside in a
 file.

 Great care must be taken when transforming core JDK classes which are at the
 same time required during the transformation process as this can lead to class
 circularity or linkage errors.

 

 If for example the invocation of `transform transform` for a class
 `C` requires loading or resolving the same class `C`,
 an error is thrown that is an instance of `LinkageError` (or a subclass).
 If the `LinkageError` occurs during reference resolution (see section
 {@jvms 5.4.3} Resolution of The Java Virtual Machine Specification)
 for a class `D`, the resolution of the corresponding reference in class
 `D` will permanently fail with the same error at any subsequent attempt.
 This means that a `LinkageError` triggered during transformation of
 `C` in a class `D` not directly related to `C` can repeatedly
 occur later in arbitrary user code which uses `D`.

**参见**

- java.lang.instrument.Instrumentation

> *Since 1.5*
