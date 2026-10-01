---
id: "java-en-function-methodhandle-withvarargs"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.withVarargs"
signature: "public MethodHandle withVarargs(boolean makeVarargs)"
title: "MethodHandle.withVarargs"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.withVarargs

```java
public MethodHandle withVarargs(boolean makeVarargs)
```

Adapts this method handle to be `asVarargsCollector variable arity`
 if the boolean flag is true, else `asFixedArity fixed arity`.
 If the method handle is already of the proper arity mode, it is returned
 unchanged.
 

This method is sometimes useful when adapting a method handle that
 may be variable arity, to ensure that the resulting adapter is also
 variable arity if and only if the original handle was.  For example,
 this code changes the first argument of a handle `mh` to `int` without
 disturbing its variable arity property:
 `mh.asType(mh.type().changeParameterType(0,int.class))
     .withVarargs(mh.isVarargsCollector())`
 

 This call is approximately equivalent to the following code:
 {@snippet lang="java" :
 if (makeVarargs == isVarargsCollector())
   return this;
 else if (makeVarargs)
   return asVarargsCollector(type().lastParameterType());
 else
   return asFixedArity();
 }

**参数**

- **makeVarargs** — true if the return method handle should have variable arity behavior

**返回**

- a method handle of the same type, with possibly adjusted variable arity behavior

**异常**

- **IllegalArgumentException** — if `makeVarargs` is true and this method handle does not have a trailing array parameter

**参见**

- #asVarargsCollector
- #asFixedArity

> *Since 9*
