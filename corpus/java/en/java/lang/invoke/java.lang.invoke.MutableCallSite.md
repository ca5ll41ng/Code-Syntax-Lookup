---
id: "java-en-function-java-lang-invoke-mutablecallsite"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.MutableCallSite"
title: "MutableCallSite"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MutableCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MutableCallSite

A `MutableCallSite` is a `CallSite` whose target variable
 behaves like an ordinary field.
 An `invokedynamic` instruction linked to a `MutableCallSite` delegates
 all calls to the site's current target.
 The `dynamicInvoker dynamic invoker` of a mutable call site
 also delegates each call to the site's current target.
 

 Here is an example of a mutable call site which introduces a
 state variable into a method handle chain.
 <!-- JavaDocExamplesTest.testMutableCallSite -->
 
```
`MutableCallSite name = new MutableCallSite(MethodType.methodType(String.class));
MethodHandle MH_name = name.dynamicInvoker();
MethodType MT_str1 = MethodType.methodType(String.class);
MethodHandle MH_upcase = MethodHandles.lookup()
    .findVirtual(String.class, "toUpperCase", MT_str1);
MethodHandle worker1 = MethodHandles.filterReturnValue(MH_name, MH_upcase);
name.setTarget(MethodHandles.constant(String.class, "Rocky"));
assertEquals("ROCKY", (String) worker1.invokeExact());
name.setTarget(MethodHandles.constant(String.class, "Fred"));
assertEquals("FRED", (String) worker1.invokeExact());
// (mutation can be continued indefinitely)
 `
```

 

 The same call site may be used in several places at once.
 
```
`MethodType MT_str2 = MethodType.methodType(String.class, String.class);
MethodHandle MH_cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle MH_dear = MethodHandles.insertArguments(MH_cat, 1, ", dear?");
MethodHandle worker2 = MethodHandles.filterReturnValue(MH_name, MH_dear);
assertEquals("Fred, dear?", (String) worker2.invokeExact());
name.setTarget(MethodHandles.constant(String.class, "Wilma"));
assertEquals("WILMA", (String) worker1.invokeExact());
assertEquals("Wilma, dear?", (String) worker2.invokeExact());
 `
```

 

 Non-synchronization of target values:
 A write to a mutable call site's target does not force other threads
 to become aware of the updated value.  Threads which do not perform
 suitable synchronization actions relative to the updated call site
 may cache the old target value and delay their use of the new target
 value indefinitely.
 (This is a normal consequence of the Java Memory Model as applied
 to object fields.)
 

 The `syncAll syncAll` operation provides a way to force threads
 to accept a new target value, even if there is no other synchronization.
 

 For target values which will be frequently updated, consider using
 a `VolatileCallSite volatile call site` instead.

> *Since 1.7*
