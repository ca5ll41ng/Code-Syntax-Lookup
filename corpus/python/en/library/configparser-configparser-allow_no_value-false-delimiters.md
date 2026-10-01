---
id: "python-en-function-configparser-allow_no_value-false-delimiters"
language: "python"
lang: "en"
category: "function"
name: "allow_no_value=False, *, delimiters=('=', ':'), \\"
directive: "class"
module: "configparser"
source_url: "https://docs.python.org/3/library/configparser.html#configparser.allow_no_value=False, *, delimiters=('=', ':'), \\"
license: "PSF"
updated: "2026-10-01"
---

# allow_no_value=False, *, delimiters=('=', ':'), \

Legacy variant of the `ConfigParser`.  It has interpolation
disabled by default and allows for non-string section names, option
names, and values via its unsafe `add_section` and `set` methods,
as well as the legacy `defaults=` keyword argument handling.

> *Changed in 3.2*: *allow_no_value*, *delimiters*, *comment_prefixes*, *strict*, *empty_lines_in_values*, *default_section* and *interpolation* were added.

> *Changed in 3.5*: The *converters* argument was added.

> *Changed in 3.8*: The default *dict_type* is :class:`dict`, since it now preserves insertion order.

> *Changed in 3.13*: The *allow_unnamed_section* argument was added.

> **Note**
>
> Consider using `ConfigParser` instead which checks types of
> the values to be stored internally.  If you don't want interpolation, you
> can use `ConfigParser(interpolation=None)`.
>

method:: add_section(section)

> *Changed in 3.14*: Added support for :const:`UNNAMED_SECTION`.

method:: set(section, option, value)
