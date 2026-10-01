---
id: "java-en-function-characterrangeinfo-flags"
language: "java"
lang: "en"
category: "function"
name: "CharacterRangeInfo.flags"
signature: "int flags()"
title: "CharacterRangeInfo.flags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CharacterRangeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRangeInfo.flags

```java
int flags()
```

{@return the flags of this character range entry}
 

 The value of the flags item describes the kind of range. Multiple flags
 may be set within flags.
 
 
- `FLAG_STATEMENT` Range is a Statement
 (except ExpressionStatement), StatementExpression (JLS {@jls 14.8}), as
 well as each `VariableDeclaratorId = VariableInitializer` of
 LocalVariableDeclarationStatement (JLS {@jls 14.4}) or FieldDeclaration
 (JLS {@jls 8.3}) in the grammar.
 
- `FLAG_BLOCK` Range is a Block in the grammar.
 
- `FLAG_ASSIGNMENT` Range is an assignment
 expression - `Expression1 AssignmentOperator Expression1` in the
 grammar as well as increment and decrement expressions (both prefix and
 postfix).
 
- `FLAG_FLOW_CONTROLLER` An expression
 whose value will affect control flow. `Flowcon` in the following:
 
```

 if ( Flowcon ) Statement [else Statement]
 for ( ForInitOpt ; [Flowcon] ; ForUpdateOpt ) Statement
 while ( Flowcon ) Statement
 do Statement while ( Flowcon ) ;
 switch ( Flowcon ) { SwitchBlockStatementGroups }
 Flowcon || Expression3
 Flowcon &amp;&amp; Expression3
 Flowcon ? Expression : Expression1
 
```

 
- `FLAG_FLOW_TARGET` Statement or
 expression effected by a CRT_FLOW_CONTROLLER. `Flowtarg` in the following:
 
```

 if ( Flowcon ) Flowtarg [else Flowtarg]
 for ( ForInitOpt ; [Flowcon] ; ForUpdateOpt ) Flowtarg
 while ( Flowcon ) Flowtarg
 do Flowtarg while ( Flowcon ) ;
 Flowcon || Flowtarg
 Flowcon &amp;&amp; Flowtarg
 Flowcon ? Flowtarg : Flowtarg
 
```

 
- `FLAG_INVOKE` Method invocation. For
 example: Identifier Arguments.
 
- `FLAG_CREATE` New object creation. For
 example: new Creator.
 
- `FLAG_BRANCH_TRUE` A condition encoded
 in the branch instruction immediately contained in the code range for
 this item is not inverted towards the corresponding branch condition in
 the source code. I.e. actual jump occurs if and only if the source
 code branch condition evaluates to true. Entries of this type are
 produced only for conditions that are listed in the description of
 CRT_FLOW_CONTROLLER flag. The source range for the entry contains flow
 controlling expression. start_pc field for an entry of this type must
 point to a branch instruction: if_acmp&lt;cond&gt;, if_icmp&lt;cond&gt;,
 if&lt;cond&gt;, ifnonull, ifnull or goto. CRT_BRANCH_TRUE and
 CRT_BRANCH_FALSE are special kinds of entries that can be used to
 determine what branch of a condition was chosen during the runtime.
 
- `FLAG_BRANCH_FALSE` A condition encoded
 in the branch instruction immediately contained in the code range for
 this item is inverted towards the corresponding branch condition in the
 source code. I.e. actual jump occurs if and only if the source code
 branch condition evaluates to false. Entries of this type are produced
 only for conditions that are listed in the description of
 CRT_FLOW_CONTROLLER flag. The source range for the entry contains flow
 controlling expression. start_pc field for an entry of this type must
 point to a branch instruction: if_acmp&lt;cond&gt;, if_icmp&lt;cond&gt;,
 if&lt;cond&gt;, ifnonull, ifnull or goto.
 

 

 All bits of the flags item not assigned above are reserved for future use.
 They should be set to zero in generated class files and should be ignored
 by Java virtual machine implementations.

**参见**

- CharacterRange#flags()
