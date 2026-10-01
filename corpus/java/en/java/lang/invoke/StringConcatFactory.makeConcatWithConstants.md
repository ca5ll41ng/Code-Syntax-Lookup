---
id: "java-en-function-stringconcatfactory-makeconcatwithconstants"
language: "java"
lang: "en"
category: "function"
name: "StringConcatFactory.makeConcatWithConstants"
signature: "public static CallSite makeConcatWithConstants(MethodHandles.Lookup lookup, String name, MethodType concatType, String recipe, Object... constants) throws StringConcatException"
title: "StringConcatFactory.makeConcatWithConstants"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/StringConcatFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringConcatFactory.makeConcatWithConstants

```java
public static CallSite makeConcatWithConstants(MethodHandles.Lookup lookup, String name, MethodType concatType, String recipe, Object... constants) throws StringConcatException
```

Facilitates the creation of optimized String concatenation methods, that
 can be used to efficiently concatenate a known number of arguments of
 known types, possibly after type adaptation and partial evaluation of
 arguments. Typically used as a bootstrap method for `invokedynamic` call sites, to support the string concatenation
 feature of the Java Programming Language.

 

When the target of the `CallSite` returned from this method is
 invoked, it returns the result of String concatenation, taking all
 function arguments and constants passed to the linkage method as inputs for
 concatenation. The target signature is given by `concatType`, and
 does not include constants.
 For a target accepting:
 
     
- zero inputs, concatenation results in an empty string;
     
- one input, concatenation results in the single
     input converted as per JLS {@jls 5.1.11} "String Conversion"; otherwise
     
- two or more inputs, the inputs are concatenated as per
     requirements stated in JLS {@jls 15.18.1} "String Concatenation Operator +".
     The inputs are converted as per JLS {@jls 5.1.11} "String Conversion",
     and combined from left to right.
 

 

The concatenation recipe is a String description for the way to
 construct a concatenated String from the arguments and constants. The
 recipe is processed from left to right, and each character represents an
 input to concatenation. Recipe characters mean:

 

   
- \1 (Unicode point 0001): an ordinary argument. This
   input is passed through dynamic argument, and is provided during the
   concatenation method invocation. This input can be null.

   
- \2 (Unicode point 0002): a constant. This input passed
   through static bootstrap argument. This constant can be any value
   representable in constant pool. If necessary, the factory would call
   `toString` to perform a one-time String conversion.

   
- Any other char value: a single character constant.
 

 

Assume the linkage arguments are as follows:

 
   
- `concatType`, describing the `CallSite` signature
   
- `recipe`, describing the String recipe
   
- `constants`, the vararg array of constants
 

 

Then the following linkage invariants must hold:

 
   
- The number of parameter slots in `concatType` is less than
       or equal to 200

   
- The parameter count in `concatType` is equal to number of \1 tags
   in `recipe`

   
- The return type in `concatType` is assignable
   from `java.lang.String`, and matches the return type of the
   returned `MethodHandle`

   
- The number of elements in `constants` is equal to number of \2
   tags in `recipe`
 

 string operand S in a string concatenation expression.  First, S can be
 materialized as a reference (using ldc) and passed as an ordinary argument
 (recipe '\1'). Or, S can be stored in the constant pool and passed as a
 constant (recipe '\2') . Finally, if S contains neither of the recipe
 tag characters ('\1', '\2') then S can be interpolated into the recipe
 itself, causing its characters to be inserted into the result.

**参数**

- **lookup** — Represents a lookup context with the accessibility privileges of the caller. Specifically, the lookup context must have `hasFullPrivilegeAccess() full privilege access`. When used with `invokedynamic`, this is stacked automatically by the VM.
- **name** — The name of the method to implement. This name is arbitrary, and has no meaning for this linkage method. When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.
- **concatType** — The expected signature of the `CallSite`.  The parameter types represent the types of dynamic concatenation arguments; the return type is always assignable from `java.lang.String`.  When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.
- **recipe** — Concatenation recipe, described above.
- **constants** — A vararg parameter representing the constants passed to the linkage method.

**返回**

- a CallSite whose target can be used to perform String concatenation, with dynamic concatenation arguments described by the given `concatType`.

**异常**

- **StringConcatException** — If any of the linkage invariants described here are violated, or the lookup context does not have private access privileges.
- **NullPointerException** — If any of the incoming arguments is null, or any constant in `recipe` is null. This will never happen when a bootstrap method is called with invokedynamic.
