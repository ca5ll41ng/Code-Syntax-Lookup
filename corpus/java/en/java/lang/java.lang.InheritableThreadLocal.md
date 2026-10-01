---
id: "java-en-function-java-lang-inheritablethreadlocal"
language: "java"
lang: "en"
category: "function"
name: "java.lang.InheritableThreadLocal"
title: "InheritableThreadLocal"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/InheritableThreadLocal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InheritableThreadLocal

This class extends `ThreadLocal` to provide inheritance of values
 from parent thread to child thread: when a child thread is created, the
 child receives initial values for all inheritable thread-local variables
 for which the parent has values.  Normally the child's values will be
 identical to the parent's; however, the child's value can be made an
 arbitrary function of the parent's by overriding the `childValue`
 method in this class.

 

Inheritable thread-local variables are used in preference to
 ordinary thread-local variables when the per-thread-attribute being
 maintained in the variable (e.g., User ID, Transaction ID) must be
 automatically transmitted to any child threads that are created.

 

Note: During the creation of a new `Thread(ThreadGroup,Runnable,String,long,boolean) thread`, it is
 possible to opt out of receiving initial values for inheritable
 thread-local variables.

**参数**

- **the** — type of the inheritable thread local's value

**参见**

- ThreadLocal
- Thread.Builder#inheritInheritableThreadLocals(boolean)

> *Since 1.2*
