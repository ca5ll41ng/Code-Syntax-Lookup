---
id: "java-en-function-methodhandle-asfixedarity"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.asFixedArity"
signature: "public MethodHandle asFixedArity()"
title: "MethodHandle.asFixedArity"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.asFixedArity

```java
public MethodHandle asFixedArity()
```

Makes a fixed arity method handle which is otherwise
 equivalent to the current method handle.
 

 If the current method handle is not of
 `asVarargsCollector variable arity`,
 the current method handle is returned.
 This is true even if the current method handle
 could not be a valid input to `asVarargsCollector`.
 

 Otherwise, the resulting fixed-arity method handle has the same
 type and behavior of the current method handle,
 except that `isVarargsCollector isVarargsCollector`
 will be false.
 The fixed-arity method handle may (or may not) be the
 previous argument to `asVarargsCollector`.
 

 Here is an example, of a list-making variable arity method handle:
 {@snippet lang="java" :
MethodHandle asListVar = publicLookup()
  .findStatic(Arrays.class, "asList", methodType(List.class, Object[].class))
  .asVarargsCollector(Object[].class);
MethodHandle asListFix = asListVar.asFixedArity();
assertEquals("[1]", asListVar.invoke(1).toString());
Exception caught = null;
try { asListFix.invoke((Object)1); }
catch (Exception ex) { caught = ex; }
assert(caught instanceof ClassCastException);
assertEquals("[two, too]", asListVar.invoke("two", "too").toString());
try { asListFix.invoke("two", "too"); }
catch (Exception ex) { caught = ex; }
assert(caught instanceof WrongMethodTypeException);
Object[] argv = { "three", "thee", "tee" };
assertEquals("[three, thee, tee]", asListVar.invoke(argv).toString());
assertEquals("[three, thee, tee]", asListFix.invoke(argv).toString());
assertEquals(1, ((List) asListVar.invoke((Object)argv)).size());
assertEquals("[three, thee, tee]", asListFix.invoke((Object)argv).toString());
 }

**返回**

- a new method handle which accepts only a fixed number of arguments

**参见**

- #asVarargsCollector
- #isVarargsCollector
- #withVarargs
