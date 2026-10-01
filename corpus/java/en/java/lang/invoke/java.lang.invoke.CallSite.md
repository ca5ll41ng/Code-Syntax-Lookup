---
id: "java-en-function-java-lang-invoke-callsite"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.CallSite"
title: "CallSite"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/CallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallSite

A `CallSite` is a holder for a variable `MethodHandle`,
 which is called its `target`.
 An `invokedynamic` instruction linked to a `CallSite` delegates
 all calls to the site's current target.
 A `CallSite` may be associated with several `invokedynamic`
 instructions, or it may be "free floating", associated with none.
 In any case, it may be invoked through an associated method handle
 called its `dynamicInvoker dynamic invoker`.
 

 `CallSite` is an abstract sealed class which does not allow
 direct subclassing by users.  It has three immediate,
 concrete non-sealed subclasses that may be either instantiated or subclassed.
 
 
- If a mutable target is not required, an `invokedynamic` instruction
 may be permanently bound by means of a `ConstantCallSite constant call site`.
 
- If a mutable target is required which has volatile variable semantics,
 because updates to the target must be immediately and reliably witnessed by other threads,
 a `VolatileCallSite volatile call site` may be used.
 
- Otherwise, if a mutable target is required,
 a `MutableCallSite mutable call site` may be used.
 

 

 A non-constant call site may be relinked by changing its target.
 The new target must have the same `type() type`
 as the previous target.
 Thus, though a call site can be relinked to a series of
 successive targets, it cannot change its type.
 

 Here is a sample use of call sites and bootstrap methods which links every
 dynamic call site to print its arguments:

```
`static void test() throws Throwable {
    // THE FOLLOWING LINE IS PSEUDOCODE FOR A JVM INSTRUCTION
    InvokeDynamic[#bootstrapDynamic].baz("baz arg", 2, 3.14);
`
private static void printArgs(Object... args) {
  System.out.println(java.util.Arrays.deepToString(args));
}
private static final MethodHandle printArgs;
static {
  MethodHandles.Lookup lookup = MethodHandles.lookup();
  Class thisClass = lookup.lookupClass();  // (who am I?)
  printArgs = lookup.findStatic(thisClass,
      "printArgs", MethodType.methodType(void.class, Object[].class));
}
private static CallSite bootstrapDynamic(MethodHandles.Lookup caller, String name, MethodType type) {
  // ignore caller and name, but match the type:
  return new ConstantCallSite(printArgs.asType(type));
}
}
```

> *Since 1.7*
