---
id: "java-en-function-java-util-regex-pattern"
language: "java"
lang: "en"
category: "function"
name: "java.util.regex.Pattern"
title: "Pattern"
directive: "type"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern

A compiled representation of a regular expression.

 

 A regular expression, specified as a string, must first be compiled into
 an instance of this class.  The resulting pattern can then be used to create
 a `Matcher` object that can match arbitrary `java.lang.CharSequence character sequences` against the regular
 expression.  All of the state involved in performing a match resides in the
 matcher, so many matchers can share the same pattern.

 

 A typical invocation sequence is thus

 
```

 Pattern p = Pattern.`compile compile`("a*b");
 Matcher m = p.`matcher matcher`("aaaaab");
 boolean b = m.`matches matches`();
```

 

 A `matches matches` method is defined by this class as a
 convenience for when a regular expression is used just once.  This method
 compiles an expression and matches an input sequence against it in a single
 invocation.  The statement

 
```

 boolean b = Pattern.matches("a*b", "aaaaab");
```

 is equivalent to the three statements above, though for repeated matches it
 is less efficient since it does not allow the compiled pattern to be reused.

 

 Instances of this class are immutable and are safe for use by multiple
 concurrent threads.  Instances of the `Matcher` class are not safe for
 such use.

 Summary of regular-expression constructs

 
 Regular expression constructs, and what they match
 
 
 Construct
 Matches
 
 
 

 Characters

 x
     The character x
 `\\`
     The backslash character
 `\0`n
     The character with octal value `0`n
         (0&nbsp;`<=`&nbsp;n&nbsp;`<=`&nbsp;7)
 `\0`nn
     The character with octal value `0`nn
         (0&nbsp;`<=`&nbsp;n&nbsp;`<=`&nbsp;7)
 `\0`mnn
     The character with octal value `0`mnn
         (0&nbsp;`<=`&nbsp;m&nbsp;`<=`&nbsp;3,
         0&nbsp;`<=`&nbsp;n&nbsp;`<=`&nbsp;7)
 `\x`hh
     The character with hexadecimal value `0x`hh
 &#92;uhhhh
     The character with hexadecimal&nbsp;value&nbsp;`0x`hhhh
 &#92;x{h...h}
     The character with hexadecimal value `0x`h...h
         (`MIN_CODE_POINT Character.MIN_CODE_POINT`
         &nbsp;&lt;=&nbsp;`0x`h...h&nbsp;&lt;=&nbsp;
          `MAX_CODE_POINT Character.MAX_CODE_POINT`)
 &#92;N{name}
     The character with Unicode character name 'name'
 `\t`
     The tab character ('&#92;u0009')
 `\n`
     The newline (line feed) character ('&#92;u000A')
 `\r`
     The carriage-return character ('&#92;u000D')
 `\f`
     The form-feed character ('&#92;u000C')
 `\a`
     The alert (bell) character ('&#92;u0007')
 `\e`
     The escape character ('&#92;u001B')
 `\c`x
     The control character corresponding to x

  Character classes

 `[abc]`
     `a`, `b`, or `c` (simple class)
 `[^abc]`
     Any character except `a`, `b`, or `c` (negation)
 `[a-zA-Z]`
     `a` through `z`
         or `A` through `Z`, inclusive (range)
 `[a-d[m-p]]`
     `a` through `d`,
      or `m` through `p`: `[a-dm-p]` (union)
 `[a-z&&[def]]`
     `d`, `e`, or `f` (intersection)
 `[a-z&&[^bc]]`
     `a` through `z`,
         except for `b` and `c`: `[ad-z]` (subtraction)
 `[a-z&&[^m-p]]`
     `a` through `z`,
          and not `m` through `p`: `[a-lq-z]`(subtraction)

 Predefined character classes

 `.`
     Any character (may or may not match line terminators)
 `\d`
     A digit: `[0-9]` if 
          UNICODE_CHARACTER_CLASS is not set. See Unicode Support.
 `\D`
     A non-digit: `[^0-9]`
 `\h`
     A horizontal whitespace character:
     [ \t\xA0&#92;u1680&#92;u180e&#92;u2000-&#92;u200a&#92;u202f&#92;u205f&#92;u3000]
 `\H`
     A non-horizontal whitespace character: `[^\h]`
 `\s`
     A whitespace character: `[ \t\n\x0B\f\r]` if
      UNICODE_CHARACTER_CLASS is not set. See
     Unicode Support.
 `\S`
     A non-whitespace character: `[^\s]`
 `\v`
     A vertical whitespace character: [\n\x0B\f\r\x85&#92;u2028&#92;u2029]
     
 `\V`
     A non-vertical whitespace character: `[^\v]`
 `\w`
     A word character: `[a-zA-Z_0-9]` if 
         UNICODE_CHARACTER_CLASS is not set. See Unicode Support. 
 `\W`
     A non-word character: `[^\w]`

 **POSIX character classes (US-ASCII only)**

 `\p{Lower`}
     A lower-case alphabetic character: `[a-z]`
 `\p{Upper`}
     An upper-case alphabetic character:`[A-Z]`
 `\p{ASCII`}
     All ASCII:`[\x00-\x7F]`
 `\p{Alpha`}
     An alphabetic character:`[\p{Lower`\p{Upper}]}
 `\p{Digit`}
     A decimal digit: `[0-9]`
 `\p{Alnum`}
     An alphanumeric character:`[\p{Alpha`\p{Digit}]}
 `\p{Punct`}
     Punctuation: One of `!"#$%&'()*+,-./:;<=>?@[\]^_`{|`~}
     <!-- `[\!"#\$%&'\(\)\*\+,\-\./:;\<=\>\?@\[\\\]\^_`\{\|\`~]}
          `[\X21-\X2F\X31-\X40\X5B-\X60\X7B-\X7E]` -->
 `\p{Graph`}
     A visible character: `[\p{Alnum`\p{Punct}]}
 `\p{Print`}
     A printable character: `[\p{Graph`\x20]}
 `\p{Blank`}
     A space or a tab: `[ \t]`
 `\p{Cntrl`}
     A control character: `[\x00-\x1F\x7F]`
 `\p{XDigit`}
     A hexadecimal digit: `[0-9a-fA-F]`
 `\p{Space`}
     A whitespace character: `[ \t\n\x0B\f\r]`

 java.lang.Character classes (simple java character type)

 `\p{javaLowerCase`}
     Equivalent to java.lang.Character.isLowerCase()
 `\p{javaUpperCase`}
     Equivalent to java.lang.Character.isUpperCase()
 `\p{javaWhitespace`}
     Equivalent to java.lang.Character.isWhitespace()
 `\p{javaMirrored`}
     Equivalent to java.lang.Character.isMirrored()

 Classes for Unicode scripts, blocks, categories and binary properties

 `\p{IsLatin`}
     A Latin&nbsp;script character (script)
 `\p{InGreek`}
     A character in the Greek&nbsp;block (block)
 `\p{Lu`}
     An uppercase letter (category)
 `\p{IsAlphabetic`}
     An alphabetic character (binary property)
 `\p{Sc`}
     A currency symbol
 `\P{InGreek`}
     Any character except one in the Greek block (negation)
 `[\p{L`&&[^\p{Lu}]]}
     Any letter except an uppercase letter (subtraction)

 Boundary matchers

 `^`
     The beginning of a line
 `$`
     The end of a line
 `\b`
     A word boundary:
     at the beginning or at the end of a line if a word character (`\w`) appears there;
     or between a word (`\w`) and a non-word character (`\W`), in either order.
 `\b{g`}
     A Unicode extended grapheme cluster boundary
 `\B`
     A non-word boundary: `[^\b]`
 `\A`
     The beginning of the input
 `\G`
     The end of the previous match
 `\Z`
     The end of the input but for the final
         terminator, if&nbsp;any
 `\z`
     The end of the input

 Linebreak matcher

 `\R`
     Any Unicode linebreak sequence, is equivalent to
     &#92;u000D&#92;u000A|[&#92;u000A&#92;u000B&#92;u000C&#92;u000D&#92;u0085&#92;u2028&#92;u2029]
     

 Unicode Extended Grapheme matcher

 `\X`
     Any Unicode extended grapheme cluster

 Greedy quantifiers

 X`?`
     X, once or not at all
 X`*`
     X, zero or more times
 X`+`
     X, one or more times
 X{n}
     X, exactly n times
 X{n`,`}
     X, at least n times
 X{n`,`m}
     X, at least n but not more than m times

 Reluctant quantifiers

 X`??`
     X, once or not at all
 X`*?`
     X, zero or more times
 X`+?`
     X, one or more times
 X{n}?
     X, exactly n times
 X{n,}?
     X, at least n times
 X{n`,`m}?
     X, at least n but not more than m times

 Possessive quantifiers

 X`?+`
     X, once or not at all
 X`*+`
     X, zero or more times
 X`++`
     X, one or more times
 X{n}+
     X, exactly n times
 X{n,}+
     X, at least n times
 X{n`,`m}+
     X, at least n but not more than m times

 Logical operators

 XY
     X followed by Y
 X`|`Y
     Either X or Y
 `(`X`)`
     X, as a capturing group

 Back references

 `\`n
     Whatever the nth
     capturing group matched
 `\`k&lt;name&gt;
     Whatever the
     named-capturing group "name" matched

 Quotation

 `\`
     Nothing, but quotes the following character
 `\Q`
     Nothing, but quotes all characters until `\E`
 `\E`
     Nothing, but ends quoting started by `\Q`
     <!-- Metachars: !$()*+.<>?[\]^{|} -->

 Special constructs (named-capturing and non-capturing)

 (?&lt;name&gt;X`)`
     X, as a named-capturing group
 `(?:`X`)`
     X, as a non-capturing group
 (?idmsuxU-idmsuxU)&nbsp;
     Nothing, but turns match flags i
 d m s
 u x U
 on - off
 `(?idmsuxU-idmsuxU:`X`)`&nbsp;&nbsp;
     X, as a non-capturing group with the
         given flags i d
 m s u
 x U on - off
 `(?=`X`)`
     X, via zero-width positive lookahead
 `(?!`X`)`
     X, via zero-width negative lookahead
 `(?<=`X`)`
     X, via zero-width positive lookbehind
 `(?<!`X`)`
     X, via zero-width negative lookbehind
 `(?>`X`)`
     X, as an independent, non-capturing group

 
 

 

 Backslashes, escapes, and quoting

 

 The backslash character (`'\'`) serves to introduce escaped
 constructs, as defined in the table above, as well as to quote characters
 that otherwise would be interpreted as unescaped constructs.  Thus the
 expression `\\` matches a single backslash and \{ matches a
 left brace.

 

 It is an error to use a backslash prior to any alphabetic character that
 does not denote an escaped construct; these are reserved for future
 extensions to the regular-expression language.  A backslash may be used
 prior to a non-alphabetic character regardless of whether that character is
 part of an unescaped construct.

 

 Backslashes within string literals in Java source code are interpreted
 as required by
 The Java Language Specification
 as either Unicode escapes (section {@jls 3.3}) or other character escapes (section {@jls 3.10.6}).
 It is therefore necessary to double backslashes in string
 literals that represent regular expressions to protect them from
 interpretation by the Java bytecode compiler.  The string literal
 "&#92;b", for example, matches a single backspace character when
 interpreted as a regular expression, while `"\\b"` matches a
 word boundary.  The string literal `"\(hello\)"` is illegal
 and leads to a compile-time error; in order to match the string
 `(hello)` the string literal `"\\(hello\\)"`
 must be used.

 Character Classes

    

 Character classes may appear within other character classes, and
    may be composed by the union operator (implicit) and the intersection
    operator (`&&`).
    The union operator denotes a class that contains every character that is
    in at least one of its operand classes.  The intersection operator
    denotes a class that contains every character that is in both of its
    operand classes.

    

 The precedence of character-class operators is as follows, from
    highest to lowest:

    
      Precedence of character class operators.
      
      PrecedenceNameExample
      
      
      1
        Literal escape&nbsp;&nbsp;&nbsp;&nbsp;
        `\x`
     2
        Grouping
        `[...]`
     3
        Range
        `a-z`
      4
        Union
        `[a-e][i-u]`
      5
        Intersection
        `[a-z&&[aeiou]]`
      
    

    

 Note that a different set of metacharacters are in effect inside
    a character class than outside a character class. For instance, the
    regular expression `.` loses its special meaning inside a
    character class, while the expression `-` becomes a range
    forming metacharacter.

 Line terminators

 

 A line terminator is a one- or two-character sequence that marks
 the end of a line of the input character sequence.  The following are
 recognized as line terminators:

 

   
-  A newline (line feed) character (`'\n'`),

   
-  A carriage-return character followed immediately by a newline
   character (`"\r\n"`),

   
-  A standalone carriage-return character (`'\r'`),

   
-  A next-line character ('&#92;u0085'),

   
-  A line-separator character ('&#92;u2028'), or

   
-  A paragraph-separator character ('&#92;u2029').

 

 

If `UNIX_LINES` mode is activated, then the only line terminators
 recognized are newline characters.

 

 The regular expression `.` matches any character except a line
 terminator unless the `DOTALL` flag is specified.

 

 If `MULTILINE` mode is not activated, the regular expression
 `^` ignores line terminators and only matches at the beginning of
 the entire input sequence. The regular expression `$` matches at the
 end of the entire input sequence, but also matches just before the last line
 terminator if this is not followed by any other input character. Other line
 terminators are ignored, including the last one if it is followed by other
 input characters.

 

 If `MULTILINE` mode is activated then
 `^` matches at the beginning of input and after any line terminator
 except at the end of input. When in `MULTILINE` mode `$`
 matches just before a line terminator or the end of the input sequence.

 Groups and capturing

 Group number
 

 Capturing groups are numbered by counting their opening parentheses from
 left to right.  In the expression `((A)(B(C)))`, for example, there
 are four such groups: 

 
   
-  `((A)(B(C)))`
   
-  `(A)`
   
-  `(B(C))`
   
-  `(C)`
 

 

 Group zero always stands for the entire expression.

 

 Capturing groups are so named because, during a match, each subsequence
 of the input sequence that matches such a group is saved.  The captured
 subsequence may be used later in the expression, via a back reference, and
 may also be retrieved from the matcher once the match operation is complete.

 Group name
 

A capturing group can also be assigned a "name", a `named-capturing group`,
 and then be back-referenced later by the "name". Group names are composed of
 the following characters. The first character must be a `letter`.

 
   
-  The uppercase letters `'A'` through `'Z'`
        ('&#92;u0041'&nbsp;through&nbsp;'&#92;u005a'),
   
-  The lowercase letters `'a'` through `'z'`
        ('&#92;u0061'&nbsp;through&nbsp;'&#92;u007a'),
   
-  The digits `'0'` through `'9'`
        ('&#92;u0030'&nbsp;through&nbsp;'&#92;u0039'),
 

 

 A `named-capturing group` is still numbered as described in
 Group number.

 

 The captured input associated with a group is always the subsequence
 that the group most recently matched.  If a group is evaluated a second time
 because of quantification then its previously-captured value, if any, will
 be retained if the second evaluation fails.  Matching the string
 `"aba"` against the expression `(a(b)?)+`, for example, leaves
 group two set to `"b"`.  All captured input is discarded at the
 beginning of each match.

 

 Groups beginning with `(?` are either pure, non-capturing groups
 that do not capture text and do not count towards the group total, or
 named-capturing group.

  Unicode support 

 

 This class is in conformance with Level 1 of Unicode Technical
 Standard #18: Unicode Regular Expressions, plus RL2.1
 Canonical Equivalents and RL2.2 Extended Grapheme Clusters.
 

 **Unicode escape sequences** such as &#92;u2014 in Java source code
 are processed as described in section {@jls 3.3} of
 The Java Language Specification.
 Such escape sequences are also implemented directly by the regular-expression
 parser so that Unicode escapes can be used in expressions that are read from
 files or from the keyboard.  Thus the strings "&#92;u2014" and
 `"\\u2014"`, while not equal, compile into the same pattern, which
 matches the character with hexadecimal value `0x2014`.
 

 A Unicode character can also be represented by using its **Hex notation**
 (hexadecimal code point value) directly as described in construct
 &#92;x{...}, for example a supplementary character U+2011F can be
 specified as &#92;x{2011F}, instead of two consecutive Unicode escape
 sequences of the surrogate pair &#92;uD840&#92;uDD1F.
 

 **Unicode character names** are supported by the named character construct
 \N{...}, for example, \N{WHITE SMILING FACE}
 specifies character &#92;u263A. The character names supported
 by this class are the valid Unicode character names matched by
 `codePointOf`.
 

 
 **Unicode extended grapheme clusters** are supported by the grapheme
 cluster matcher `\X` and the corresponding boundary matcher `\b{g`}.
 

 Unicode scripts, blocks, categories and binary properties are written with
 the `\p` and `\P` constructs as in Perl.
 \p{prop} matches if
 the input has the property prop, while \P{prop}
 does not match if the input has that property.
 

 Scripts, blocks, categories and binary properties can be used both inside
 and outside of a character class.

 

 **Scripts** are specified either with the prefix `Is`, as in
 `IsHiragana`, or by using  the `script` keyword (or its short
 form `sc`) as in `script=Hiragana` or `sc=Hiragana`.
 

 The script names supported by `Pattern` are the valid script names
 accepted and defined by
 `forName(String) UnicodeScript.forName`.

 

 **Blocks** are specified with the prefix `In`, as in
 `InMongolian`, or by using the keyword `block` (or its short
 form `blk`) as in `block=Mongolian` or `blk=Mongolian`.
 

 The block names supported by `Pattern` are the valid block names
 accepted and defined by
 `forName(String) UnicodeBlock.forName`.
 

 **Categories** may be specified with the optional prefix `Is`:
 Both `\p{L`} and `\p{IsL`} denote the category of Unicode
 letters. Same as scripts and blocks, categories can also be specified
 by using the keyword `general_category` (or its short form
 `gc`) as in `general_category=Lu` or `gc=Lu`.
 

 The supported categories are those of
 
 The Unicode Standard in the version specified by the
 `java.lang.Character Character` class. The category names are those
 defined in the Standard, both normative and informative.
 

 **Binary properties** are specified with the prefix `Is`, as in
 `IsAlphabetic`. The supported binary properties by `Pattern`
 are
 
   
-  Alphabetic
   
-  Ideographic
   
-  Letter
   
-  Lowercase
   
-  Uppercase
   
-  Titlecase
   
-  Punctuation
   
-  Control
   
-  White_Space
   
-  Digit
   
-  Hex_Digit
   
-  Join_Control
   
-  Noncharacter_Code_Point
   
-  Assigned
   
-  Emoji
   
-  Emoji_Presentation
   
-  Emoji_Modifier
   
-  Emoji_Modifier_Base
   
-  Emoji_Component
   
-  Extended_Pictographic
 

 

 The following **Predefined Character classes** and **POSIX character classes**
 are in conformance with the recommendation of Annex C: Compatibility Properties
 of Unicode Technical Standard #18:
 Unicode Regular Expressions, when `UNICODE_CHARACTER_CLASS` flag is specified.

 
 predefined and posix character classes in Unicode mode
 
 
 Classes
 Matches
 
 
 
 `\p{Lower`}
     A lowercase character:`\p{IsLowercase`}
 `\p{Upper`}
     An uppercase character:`\p{IsUppercase`}
 `\p{ASCII`}
     All ASCII:`[\x00-\x7F]`
 `\p{Alpha`}
     An alphabetic character:`\p{IsAlphabetic`}
 `\p{Digit`}
     A decimal digit character:`\p{IsDigit`}
 `\p{Alnum`}
     An alphanumeric character:`[\p{IsAlphabetic`\p{IsDigit}]}
 `\p{Punct`}
     A punctuation character:`\p{IsPunctuation`}
 `\p{Graph`}
     A visible character: `[^\p{IsWhite_Space`\p{gc=Cc}\p{gc=Cs}\p{gc=Cn}]}
 `\p{Print`}
     A printable character: `[\p{Graph`\p{Blank}&&[^\p{Cntrl}]]}
 `\p{Blank`}
     A space or a tab: `[\p{IsWhite_Space`&&[^\p{gc=Zl}\p{gc=Zp}\x0a\x0b\x0c\x0d\x85]]}
 `\p{Cntrl`}
     A control character: `\p{gc=Cc`}
 `\p{XDigit`}
     A hexadecimal digit: `[\p{gc=Nd`\p{IsHex_Digit}]}
 `\p{Space`}
     A whitespace character:`\p{IsWhite_Space`}
 `\d`
     A digit: `\p{IsDigit`}
 `\D`
     A non-digit: `[^\d]`
 `\s`
     A whitespace character: `\p{IsWhite_Space`}
 `\S`
     A non-whitespace character: `[^\s]`
 `\w`
     A word character: `[\p{Alpha`\p{gc=Mn}\p{gc=Me}\p{gc=Mc}\p{Digit}\p{gc=Pc}\p{IsJoin_Control}]}
 `\W`
     A non-word character: `[^\w]`
 
 
 

 
 Categories that behave like the java.lang.Character
 boolean ismethodname methods (except for the deprecated ones) are
 available through the same \p{prop} syntax where
 the specified property has the name javamethodname.

  Comparison to Perl 5 

 

The `Pattern` engine performs traditional NFA-based matching
 with ordered alternation as occurs in Perl 5.

 

 Perl constructs not supported by this class: 

 
    
- 

 The backreference constructs, \g{n} for
    the nthcapturing group and
    \g{name} for
    named-capturing group.
    

    
- 

 The conditional constructs
    `(?(`condition`)`X`)` and
    `(?(`condition`)`X`|`Y`)`,
    

    
- 

 The embedded code constructs (?{code})
    and (??{code}),

    
- 

 The embedded comment syntax `(?#comment)`, and 

    
- 

 The preprocessing operations `\l` &#92;u,
    `\L`, and `\U`.  

 

 

 Constructs supported by this class but not by Perl: 

 

    
- 

 Character-class union and intersection as described
    above.

 

 

 Notable differences from Perl: 

 

    
- 

 In Perl, `\1` through `\9` are always interpreted
    as back references; a backslash-escaped number greater than `9` is
    treated as a back reference if at least that many subexpressions exist,
    otherwise it is interpreted, if possible, as an octal escape.  In this
    class octal escapes must always begin with a zero. In this class,
    `\1` through `\9` are always interpreted as back
    references, and a larger number is accepted as a back reference if at
    least that many subexpressions exist at that point in the regular
    expression, otherwise the parser will drop digits until the number is
    smaller or equal to the existing number of groups or it is one digit.
    

    
- 

 Perl uses the `g` flag to request a match that resumes
    where the last match left off.  This functionality is provided implicitly
    by the `Matcher` class: Repeated invocations of the `find find` method will resume where the last match left off,
    unless the matcher is reset.  

    
- 

 In Perl, embedded flags at the top level of an expression affect
    the whole expression.  In this class, embedded flags always take effect
    at the point at which they appear, whether they are at the top level or
    within a group; in the latter case, flags are restored at the end of the
    group just as in Perl.  

    
- 

Free-spacing mode in Perl (called comments
    mode in this class) denoted by `(?x)` in the regular
    expression (or by the `COMMENTS` flag when compiling
    the expression) will not ignore whitespace inside of character classes. In
    this class, whitespace inside of character classes must be escaped to be
    considered as part of the regular expression when in comments mode.
    

 

 

 For a more precise description of the behavior of regular expression
 constructs, please see 
 Mastering Regular Expressions, 3rd Edition, Jeffrey E. F. Friedl,
 O'Reilly and Associates, 2006.

**参见**

- java.lang.String#split(String, int)
- java.lang.String#split(String)

> *Since 1.4*
