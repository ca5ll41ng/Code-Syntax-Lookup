---
id: "en-php-guide-intl-collator-constants"
language: "php"
lang: "en"
category: "guide"
name: "intl.collator-constants"
title: "Predefined Constants"
module: "intl"
source_url: "https://www.php.net/manual/en/intl.collator-constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

- **`Collator::FRENCH_COLLATION` `int`** — Sort strings with different accents from the back of the string. This attribute is automatically set to *On* for the French locales and a few others. Users normally would not need to explicitly set this attribute. There is a string comparison performance cost when it is set *On*, but sort key length is unaffected. Possible values are: `Collator::ON` `Collator::OFF`(default) `Collator::DEFAULT_VALUE` — **FRENCH_COLLATION rules** F=OFF cote < coté < côte < côté F=ON cote < côte < coté < côté
- **`Collator::ALTERNATE_HANDLING`** — The Alternate attribute is used to control the handling of the so called variable characters in the UCA: whitespace, punctuation and symbols. If Alternate is set to *NonIgnorable* (N), then differences among these characters are of the same importance as differences among letters. If Alternate is set to *Shifted* (S), then these characters are of only minor importance. The *Shifted* value is often used in combination with *Strength* set to Quaternary. In such a case, whitespace, punctuation, and symbols are considered when comparing strings, but only if all other aspects of the strings (base letters, accents, and case) are identical. If Alternate is not set to Shifted, then there is no difference between a Strength of 3 and a Strength of 4. For more information and examples, see Variable_Weighting in the [UCA](). The reason the Alternate values are not simply *On* and *Off* is that additional Alternate values may be added in the future. The UCA option Blanked is expressed with Strength set to 3, and Alternate set to Shifted. The default for most locales is NonIgnorable. If Shifted is selected, it may be slower if there are many strings that are the same except for punctuation; sort key length will not be affected unless the strength level is also increased. — Possible values are: `Collator::NON_IGNORABLE`(default) `Collator::SHIFTED` `Collator::DEFAULT_VALUE` — **ALTERNATE_HANDLING rules** S=3, A=N di Silva < Di Silva < diSilva < U.S.A. < USA S=3, A=S di Silva = diSilva < Di Silva < U.S.A. = USA S=4, A=S di Silva < diSilva < Di Silva < U.S.A. < USA
- **`Collator::CASE_FIRST` `int`** — The Case_First attribute is used to control whether uppercase letters come before lowercase letters or vice versa, in the absence of other differences in the strings. The possible values are *Uppercase_First* (U) and *Lowercase_First* (L), plus the standard *Default* and *Off*. There is almost no difference between the Off and Lowercase_First options in terms of results, so typically users will not use Lowercase_First: only Off or Uppercase_First. (People interested in the detailed differences between X and L should consult the `Collation Customization`). Specifying either L or U won't affect string comparison performance, but will affect the sort key length. — Possible values are: `Collator::OFF`(default) `Collator::LOWER_FIRST` `Collator::UPPER_FIRST` `Collator:DEFAULT` — **CASE_FIRST rules** C=X or C=L "china" < "China" < "denmark" < "Denmark" C=U "China" < "china" < "Denmark" < "denmark"
- **`Collator::CASE_LEVEL` `int`** — The Case_Level attribute is used when ignoring accents but not case. In such a situation, set Strength to be *Primary*, and Case_Level to be *On*. In most locales, this setting is Off by default. There is a small string comparison performance and sort key impact if this attribute is set to be *On*. — Possible values are: `Collator::OFF`(default) `Collator::ON` `Collator::DEFAULT_VALUE` — **CASE_LEVEL rules** S=1, E=X role = Role = rôle S=1, E=O role = rôle < Role
- **`Collator::NORMALIZATION_MODE` `int`** — The Normalization setting determines whether text is thoroughly normalized or not in comparison. Even if the setting is off (which is the default for many locales), text as represented in common usage will compare correctly (for details, see UTN #5). Only if the accent marks are in noncanonical order will there be a problem. If the setting is *On*, then the best results are guaranteed for all possible text input. There is a medium string comparison performance cost if this attribute is *On*, depending on the frequency of sequences that require normalization. There is no significant effect on sort key length. If the input text is known to be in NFD or NFKD normalization forms, there is no need to enable this Normalization option. — Possible values are: `Collator::OFF`(default) `Collator::ON` `Collator::DEFAULT_VALUE`
- **`Collator::STRENGTH` `int`** — The ICU Collation Service supports many levels of comparison (named "Levels", but also known as "Strengths"). Having these categories enables ICU to sort strings precisely according to local conventions. However, by allowing the levels to be selectively employed, searching for a string in text can be performed with various matching conditions. For more detailed information, see `collator_set_strength()` chapter. — Possible values are: `Collator::PRIMARY` `Collator::SECONDARY` `Collator::TERTIARY`(default) `Collator::QUATERNARY` `Collator::IDENTICAL` `Collator::DEFAULT_VALUE`
- **`Collator::HIRAGANA_QUATERNARY_MODE` `int`** — Compatibility with JIS x 4061 requires the introduction of an additional level to distinguish Hiragana and Katakana characters. If compatibility with that standard is required, then this attribute should be set *On*, and the strength set to Quaternary. This will affect sort key length and string comparison string comparison performance. — Possible values are: `Collator::OFF`(default) `Collator::ON` `Collator::DEFAULT_VALUE`
- **`Collator::NUMERIC_COLLATION` `int`** — When turned on, this attribute generates a collation key for the numeric value of substrings of digits. This is a way to get '100' to sort AFTER '2'. — Possible values are: `Collator::OFF`(default) `Collator::ON` `Collator::DEFAULT_VALUE`
- **`Collator::DEFAULT_VALUE` `int`**
- **`Collator::PRIMARY` `int`**
- **`Collator::SECONDARY` `int`**
- **`Collator::TERTIARY` `int`**
- **`Collator::DEFAULT_STRENGTH` `int`**
- **`Collator::QUATERNARY` `int`**
- **`Collator::IDENTICAL` `int`**
- **`Collator::OFF` `int`**
- **`Collator::ON` `int`**
- **`Collator::SHIFTED` `int`**
- **`Collator::NON_IGNORABLE` `int`**
- **`Collator::LOWER_FIRST` `int`**
- **`Collator::UPPER_FIRST` `int`**
- **`Collator::SORT_REGULAR` `int`**
- **`Collator::SORT_STRING` `int`**
- **`Collator::SORT_NUMERIC` `int`**
