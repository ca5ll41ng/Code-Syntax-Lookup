---
id: "java-en-function-constantbootstraps-explicitcast"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.explicitCast"
signature: "public static Object explicitCast(MethodHandles.Lookup lookup, String name, Class<?> dstType, Object value) throws ClassCastException"
title: "ConstantBootstraps.explicitCast"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.explicitCast

```java
public static Object explicitCast(MethodHandles.Lookup lookup, String name, Class<?> dstType, Object value) throws ClassCastException
```

Applies a conversion from a source type to a destination type.
 

 Given a destination type `dstType` and an input
 value `value`, one of the following will happen:
 
 
- If `dstType` is `void.class`,
     a `ClassCastException` is thrown.
 
- If `dstType` is `Object.class`, `value` is returned as is.
 

 

 Otherwise one of the following conversions is applied to `value`:
 
 
- If `dstType` is a reference type, a reference cast is applied
     to `value` as if by calling `cast(Object)
     dstType.cast`.
 
- Otherwise, `dstType` is a primitive type:
     
     
- If `value` is null, the default value (JVMS {@jvms 2.3})
         of `dstType` is returned.
     
- If the runtime type of `value` is a primitive wrapper type
         (such as `Integer`), a Java unboxing conversion is applied
         (JLS {@jls 5.1.8}).
         
         
- If the runtime type is `Boolean`, the unboxing result
             is then converted to `int`, where `true` becomes
             `1` and `false` becomes `0`.
         

         Followed by a Java casting conversion (JLS {@jls 5.5}):
         
         
- If `dstType` is not `boolean`, the cast converts
             directly to `dstType`.
         
- If `dstType` is `boolean`, the cast converts to
             `int`, and the resulting `boolean` is produced
             by testing whether the least significant bit of the cast
             `int` is 1.
         

     
- Otherwise, a `ClassCastException` is thrown.
     

 

 

 The result is the same as when using the following code:
 
```
`MethodHandle id = MethodHandles.identity(dstType);
 MethodType mt = MethodType.methodType(dstType, Object.class);
 MethodHandle conv = MethodHandles.explicitCastArguments(id, mt);
 return conv.invoke(value);
 `
```

**参数**

- **lookup** — unused
- **name** — unused
- **dstType** — the destination type of the conversion
- **value** — the value to be converted, may be null

**返回**

- the converted value

**异常**

- **ClassCastException** — when `dstType` is `void`; when `dstType` is a reference type, and the reference cast fails; or when `dstType` is primitive, and `value` is an instance of a reference type that is not a wrapper class

> *Since 15*
