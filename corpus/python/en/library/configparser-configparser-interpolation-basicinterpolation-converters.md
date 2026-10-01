---
id: "python-en-function-configparser-interpolation-basicinterpolation-converters"
language: "python"
lang: "en"
category: "function"
name: "interpolation=BasicInterpolation(), converters={}, \\"
directive: "class"
module: "configparser"
source_url: "https://docs.python.org/3/library/configparser.html#configparser.interpolation=BasicInterpolation(), converters={}, \\"
license: "PSF"
updated: "2026-10-01"
---

# interpolation=BasicInterpolation(), converters={}, \

The main configuration parser.  When *defaults* is given, it is initialized
into the dictionary of intrinsic defaults.  When *dict_type* is given, it
will be used to create the dictionary objects for the list of sections, for
the options within a section, and for the default values.

When *delimiters* is given, it is used as the set of substrings that
divide keys from values.  When *comment_prefixes* is given, it will be used
as the set of substrings that prefix comments in otherwise empty lines.
Comments can be indented.  When *inline_comment_prefixes* is given, it will
be used as the set of substrings that prefix comments in non-empty lines.

When *strict* is `True` (the default), the parser won't allow for
any section or option duplicates while reading from a single source (file,
string or dictionary), raising `DuplicateSectionError` or
`DuplicateOptionError`.  When *empty_lines_in_values* is `False`
(default: `True`), each empty line marks the end of an option.  Otherwise,
internal empty lines of a multiline option are kept as part of the value.
When *allow_no_value* is `True` (default: `False`), options without
values are accepted; the value held for these is `None` and they are
serialized without the trailing delimiter.

When *default_section* is given, it specifies the name for the special
section holding default values for other sections and interpolation purposes
(normally named `"DEFAULT"`).  This value can be retrieved and changed at
runtime using the `default_section` instance attribute. This won't
re-evaluate an already parsed config file, but will be used when writing
parsed settings to a new config file.

Interpolation behaviour may be customized by providing a custom handler
through the *interpolation* argument. `None` can be used to turn off
interpolation completely, `ExtendedInterpolation()` provides a more
advanced variant inspired by `zc.buildout`.  More on the subject in the
`dedicated documentation section <#interpolation-of-values>`_.

All option names used in interpolation will be passed through the
`optionxform` method just like any other option name reference.  For
example, using the default implementation of `optionxform` (which
converts option names to lower case), the values `foo %(bar)s` and `foo
%(BAR)s` are equivalent.

When *converters* is given, it should be a dictionary where each key
represents the name of a type converter and each value is a callable
implementing the conversion from string to the desired datatype.  Every
converter gets its own corresponding `get*` method on the parser
object and section proxies.

When *allow_unnamed_section* is `True` (default: `False`),
the first section name can be omitted. See the
`"Unnamed Sections" section <#unnamed-sections>`_.

It is possible to read several configurations into a single
`ConfigParser`, where the most recently added configuration has the
highest priority. Any conflicting keys are taken from the more recent
configuration while the previously existing keys are retained. The example
below reads in an `override.ini` file, which will override any conflicting
keys from the `example.ini` file.

```ini

[DEFAULT]
ServerAliveInterval = -1
```

```python

>>> config_override = configparser.ConfigParser()
>>> config_override['DEFAULT'] = {'ServerAliveInterval': '-1'}
>>> with open('override.ini', 'w') as configfile:
...     config_override.write(configfile)
...
>>> config_override = configparser.ConfigParser()
>>> config_override.read(['example.ini', 'override.ini'])
['example.ini', 'override.ini']
>>> print(config_override.get('DEFAULT', 'ServerAliveInterval'))
-1
```

> *Changed in 3.1*: The default *dict_type* is :class:`collections.OrderedDict`.

> *Changed in 3.2*: *allow_no_value*, *delimiters*, *comment_prefixes*, *strict*, *empty_lines_in_values*, *default_section* and *interpolation* were added.

> *Changed in 3.5*: The *converters* argument was added.

> *Changed in 3.7*: The *defaults* argument is read with :meth:`read_dict`, providing consistent behavior across the parser: non-string keys and values are implicitly converted to strings.

> *Changed in 3.8*: The default *dict_type* is :class:`dict`, since it now preserves insertion order.

> *Changed in 3.13*: Raise a :exc:`MultilineContinuationError` when *allow_no_value* is ``True``, and a key without a value is continued with an indented line.

> *Changed in 3.13*: The *allow_unnamed_section* argument was added.

method:: defaults()

method:: sections()

method:: add_section(section)

method:: has_section(section)

method:: options(section)

method:: has_option(section, option)

method:: read(filenames, encoding=None)

method:: read_file(f, source=None)

method:: read_string(string, source='<string>')

method:: read_dict(dictionary, source='<dict>')

method:: get(section, option, *, raw=False, vars=None[, fallback])

method:: getint(section, option, *, raw=False, vars=None[, fallback])

method:: getfloat(section, option, *, raw=False, vars=None[, fallback])

method:: getboolean(section, option, *, raw=False, vars=None[, fallback])

method:: items(raw=False, vars=None)

method:: set(section, option, value)

method:: write(fileobject, space_around_delimiters=True)

> **Note**
>
> Comments in the original configuration file are not preserved when
> writing the configuration back.
> What is considered a comment, depends on the given values for
> *comment_prefix* and *inline_comment_prefix*.
>

method:: remove_option(section, option)

method:: remove_section(section)

method:: optionxform(option)
