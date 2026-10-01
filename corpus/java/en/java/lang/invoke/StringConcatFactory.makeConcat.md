---
id: "java-en-function-stringconcatfactory-makeconcat"
language: "java"
lang: "en"
category: "function"
name: "StringConcatFactory.makeConcat"
signature: "public static CallSite makeConcat(MethodHandles.Lookup lookup, String name, MethodType concatType) throws StringConcatException"
title: "StringConcatFactory.makeConcat"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/StringConcatFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringConcatFactory.makeConcat

```java
public static CallSite makeConcat(MethodHandles.Lookup lookup, String name, MethodType concatType) throws StringConcatException
```

Facilitates the creation of optimized String concatenation methods, that
 can be used to efficiently concatenate a known number of arguments of
 known types, possibly after type adaptation and partial evaluation of
 arguments. Typically used as a bootstrap method for `invokedynamic` call sites, to support the string concatenation
 feature of the Java Programming Language.

 

When the target of the `CallSite` returned from this method is
 invoked, it returns the result of String concatenation, taking all
 function arguments passed to the linkage method as inputs for
 concatenation. The target signature is given by `concatType`.
 For a target accepting:
 
     
- zero inputs, concatenation results in an empty string;
     
- one input, concatenation results in the single
     input converted as per JLS {@jls 5.1.11} "String Conversion"; otherwise
     
- two or more inputs, the inputs are concatenated as per
     requirements stated in JLS {@jls 15.18.1} "String Concatenation Operator +".
     The inputs are converted as per JLS {@jls 5.1.11} "String Conversion",
     and combined from left to right.
 

 

Assume the linkage arguments are as follows:

 
     
- `concatType`, describing the `CallSite` signature
 

 

Then the following linkage invariants must hold:

 
     
- The number of parameter slots in `concatType` is
         less than or equal to 200
     
- The return type in `concatType` is assignable from `java.lang.String`

**参数**

- **lookup** — Represents a lookup context with the accessibility privileges of the caller. Specifically, the lookup context must have `hasFullPrivilegeAccess() full privilege access`. When used with `invokedynamic`, this is stacked automatically by the VM.
- **name** — The name of the method to implement. This name is arbitrary, and has no meaning for this linkage method. When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.
- **concatType** — The expected signature of the `CallSite`.  The parameter types represent the types of concatenation arguments; the return type is always assignable from `java.lang.String`.  When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.

**返回**

- a CallSite whose target can be used to perform String concatenation, with dynamic concatenation arguments described by the given `concatType`.

**异常**

- **StringConcatException** — If any of the linkage invariants described here are violated, or the lookup context does not have private access privileges.
- **NullPointerException** — If any of the incoming arguments is null. This will never happen when a bootstrap method is called with invokedynamic.
