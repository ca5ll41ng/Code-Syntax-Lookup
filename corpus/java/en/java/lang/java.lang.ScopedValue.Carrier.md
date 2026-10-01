---
id: "java-en-function-java-lang-scopedvalue-carrier"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ScopedValue.Carrier"
title: "Carrier"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ScopedValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Carrier

A mapping of scoped values, as keys, to values.

 

 A `Carrier` is used to accumulate mappings so that an operation (a `Runnable` or `CallableOp`) can be executed with all scoped values in the
 mapping bound to values. The following example runs an operation with `k1`
 bound (or rebound) to `v1`, and `k2` bound (or rebound) to `v2`.
 {@snippet lang=java :
     // @link substring="where" target="#where(ScopedValue, Object)" :
     ScopedValue.where(k1, v1).where(k2, v2).run(() -> ... );
 }

 

 A `Carrier` is immutable and thread-safe. The `where(ScopedValue, Object) where` method returns a new `Carrier` object,
 it does not mutate an existing mapping.

 

 Unless otherwise specified, passing a `null` argument to a method in
 this class will cause a `NullPointerException` to be thrown.

> *Since 25*
