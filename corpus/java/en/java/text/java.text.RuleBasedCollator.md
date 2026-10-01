---
id: "java-en-function-java-text-rulebasedcollator"
language: "java"
lang: "en"
category: "function"
name: "java.text.RuleBasedCollator"
title: "RuleBasedCollator"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollator

The `RuleBasedCollator` class is a concrete subclass of
 `Collator` that provides a simple, data-driven, table
 collator.  With this class you can create a customized table-based
 `Collator`.  `RuleBasedCollator` maps
 characters to sort keys.

 

 `RuleBasedCollator` has the following restrictions
 for efficiency (other subclasses may be used for more complex languages) :
 
 
- If a special collation rule controlled by a &lt;modifier&gt; is
     specified it applies to the whole collator object.
 
- All non-mentioned characters are at the end of the
     collation order.
 

 

 The collation table is composed of a list of collation rules, where each
 rule is of one of three forms:
 
```

    &lt;modifier&gt;
    &lt;relation&gt; &lt;text-argument&gt;
    &lt;reset&gt; &lt;text-argument&gt;
 
```

 The definitions of the rule elements is as follows:
 
    
- **Text-Argument**: A text-argument is any sequence of
        characters, excluding special characters (that is, common
        whitespace characters [0009-000D, 0020] and rule syntax characters
        [0021-002F, 003A-0040, 005B-0060, 007B-007E]). If those
        characters are desired, you can put them in single quotes
        (e.g. ampersand =&gt; '&amp;'). Note that unquoted white space characters
        are ignored; e.g. `b c` is treated as `bc`.
    
- **Modifier**: There are currently two modifiers that
        turn on special collation rules.
        
            
- '@' : Turns on backwards sorting of accents (secondary
                      differences), as in French.
            
- '!' : Turns on Thai/Lao vowel-consonant swapping.  If this
                      rule is in force when a Thai vowel of the range
                      &#92;U0E40-&#92;U0E44 precedes a Thai consonant of the range
                      &#92;U0E01-&#92;U0E2E OR a Lao vowel of the range &#92;U0EC0-&#92;U0EC4
                      precedes a Lao consonant of the range &#92;U0E81-&#92;U0EAE then
                      the vowel is placed after the consonant for collation
                      purposes.
        

        

'@' : Indicates that accents are sorted backwards, as in French.
    
- **Relation**: The relations are the following:
        
            
- '&lt;' : Greater, as a letter difference (primary)
            
- ';' : Greater, as an accent difference (secondary)
            
- ',' : Greater, as a case difference (tertiary)
            
- '=' : Equal
        

    
- **Reset**: There is a single reset
        which is used primarily for contractions and expansions, but which
        can also be used to add a modification at the end of a set of rules.
        

'&amp;' : Indicates that the next rule follows the position to where
            the reset text-argument would be sorted.
 

 

 This sounds more complicated than it is in practice. For example, the
 following are equivalent ways of expressing the same thing:
 
```

 a &lt; b &lt; c
 a &lt; b &amp; b &lt; c
 a &lt; c &amp; a &lt; b
 
```

 
 Notice that the order is important, as the subsequent item goes immediately
 after the text-argument. The following are not equivalent:
 
```

 a &lt; b &amp; a &lt; c
 a &lt; c &amp; a &lt; b
 
```

 
 Either the text-argument must already be present in the sequence, or some
 initial substring of the text-argument must be present. (e.g. "a &lt; b &amp; ae &lt;
 e" is valid since "a" is present in the sequence before "ae" is reset). In
 this latter case, "ae" is not entered and treated as a single character;
 instead, "e" is sorted as if it were expanded to two characters: "a"
 followed by an "e". This difference appears in natural languages: in
 traditional Spanish "ch" is treated as though it contracts to a single
 character (expressed as "c &lt; ch &lt; d"), while in traditional German
 a-umlaut is treated as though it expanded to two characters
 (expressed as "a,A &lt; b,B ... &amp;ae;&#92;u00e3&amp;AE;&#92;u00c3").
 [&#92;u00e3 and &#92;u00c3 are, of course, the escape sequences for a-umlaut.]
 

 **Ignorable Characters**
 

 For ignorable characters, the first rule must start with a relation (the
 examples we have used above are really fragments; "a &lt; b" really should be
 "&lt; a &lt; b"). If, however, the first relation is not "&lt;", then all the all
 text-arguments up to the first "&lt;" are ignorable. For example, ", - &lt; a &lt; b"
 makes "-" an ignorable character, as we saw earlier in the word
 "black-birds". In the samples for different languages, you see that most
 accents are ignorable.

 

**Normalization and Accents**
 

 `RuleBasedCollator` automatically processes its rule table to
 include both pre-composed and combining-character versions of
 accented characters.  Even if the provided rule string contains only
 base characters and separate combining accent characters, the pre-composed
 accented characters matching all canonical combinations of characters from
 the rule string will be entered in the table.
 

 This allows you to use a RuleBasedCollator to compare accented strings
 even when the collator is set to NO_DECOMPOSITION.  There are two caveats,
 however.  First, if the strings to be collated contain combining
 sequences that may not be in canonical order, you should set the collator to
 CANONICAL_DECOMPOSITION or FULL_DECOMPOSITION to enable sorting of
 combining sequences.  Second, if the strings contain characters with
 compatibility decompositions (such as full-width and half-width forms),
 you must use FULL_DECOMPOSITION, since the rule tables only include
 canonical mappings.

 

**Errors**
 

 The following are errors:
 
     
- A text-argument contains unquoted punctuation symbols
        (e.g. "a &lt; b-c &lt; d").
     
- A relation or reset character not followed by a text-argument
        (e.g. "a &lt; ,b").
     
- A reset where the text-argument (or an initial substring of the
         text-argument) is not already in the sequence.
         (e.g. "a &lt; b &amp; e &lt; f")
 

 If you produce one of these errors, a `RuleBasedCollator` throws
 a `ParseException`.

 

**Examples**
 

Simple:     "&lt; a &lt; b &lt; c &lt; d"
 

Norwegian:  "&lt; a, A &lt; b, B &lt; c, C &lt; d, D &lt; e, E &lt; f, F
                 &lt; g, G &lt; h, H &lt; i, I &lt; j, J &lt; k, K &lt; l, L
                 &lt; m, M &lt; n, N &lt; o, O &lt; p, P &lt; q, Q &lt; r, R
                 &lt; s, S &lt; t, T &lt; u, U &lt; v, V &lt; w, W &lt; x, X
                 &lt; y, Y &lt; z, Z
                 &lt; &#92;u00E6, &#92;u00C6
                 &lt; &#92;u00F8, &#92;u00D8
                 &lt; &#92;u00E5 = a&#92;u030A, &#92;u00C5 = A&#92;u030A;
                      aa, AA"

 

 To create a `RuleBasedCollator` object with specialized
 rules tailored to your needs, you construct the `RuleBasedCollator`
 with the rules contained in a `String` object. For example:
 
```

 String simple = "&lt; a&lt; b&lt; c&lt; d";
 RuleBasedCollator mySimple = new RuleBasedCollator(simple);
 
```

 
 Or:
 
```

 String Norwegian = "&lt; a, A &lt; b, B &lt; c, C &lt; d, D &lt; e, E &lt; f, F &lt; g, G &lt; h, H &lt; i, I" +
                    "&lt; j, J &lt; k, K &lt; l, L &lt; m, M &lt; n, N &lt; o, O &lt; p, P &lt; q, Q &lt; r, R" +
                    "&lt; s, S &lt; t, T &lt; u, U &lt; v, V &lt; w, W &lt; x, X &lt; y, Y &lt; z, Z" +
                    "&lt; &#92;u00E6, &#92;u00C6" +     // Latin letter ae &amp; AE
                    "&lt; &#92;u00F8, &#92;u00D8" +     // Latin letter o &amp; O with stroke
                    "&lt; &#92;u00E5 = a&#92;u030A," +  // Latin letter a with ring above
                    "  &#92;u00C5 = A&#92;u030A;" +  // Latin letter A with ring above
                    "  aa, AA";
 RuleBasedCollator myNorwegian = new RuleBasedCollator(Norwegian);
 
```

 

 

 A new collation rules string can be created by concatenating rules
 strings. For example, the rules returned by `getRules` could
 be concatenated to combine multiple `RuleBasedCollator`s.

 

 The following example demonstrates how to change the order of
 non-spacing accents,
 
```

 // old rule
 String oldRules = "=&#92;u0301;&#92;u0300;&#92;u0302;&#92;u0308"    // main accents
                 + ";&#92;u0327;&#92;u0303;&#92;u0304;&#92;u0305"    // main accents
                 + ";&#92;u0306;&#92;u0307;&#92;u0309;&#92;u030A"    // main accents
                 + ";&#92;u030B;&#92;u030C;&#92;u030D;&#92;u030E"    // main accents
                 + ";&#92;u030F;&#92;u0310;&#92;u0311;&#92;u0312"    // main accents
                 + "&lt; a , A ; ae, AE ; &#92;u00e6 , &#92;u00c6"
                 + "&lt; b , B &lt; c, C &lt; e, E &amp; C &lt; d, D";
 // change the order of accent characters
 String addOn = "&amp; &#92;u0300 ; &#92;u0308 ; &#92;u0302";
 RuleBasedCollator myCollator = new RuleBasedCollator(oldRules + addOn);
 
```

 

 lead to significant thread contention since `synchronized` is employed
 to ensure thread-safety. As such, users of this class should consider creating
 a separate instance for each thread when used in multithreaded environments.

**参见**

- Collator
- CollationElementIterator

> *Since 1.1*
