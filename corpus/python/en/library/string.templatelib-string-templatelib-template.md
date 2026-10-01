---
id: "python-en-function-string-templatelib-template"
language: "python"
lang: "en"
category: "function"
name: "Template"
directive: "class"
module: "string.templatelib"
source_url: "https://docs.python.org/3/library/string.templatelib.html#string.templatelib.Template"
license: "PSF"
updated: "2026-10-01"
---

# Template

The `Template` class describes the contents of a template string.
It is immutable, meaning that attributes of a template cannot be reassigned.

The most common way to create a `Template` instance is to use the
`template string literal syntax`.
This syntax is identical to that of `f-strings`,
except that it uses a `t` prefix in place of an `f`:

>>> cheese = 'Red Leicester'
>>> template = t"We're fresh out of {cheese}, sir."
>>> type(template)
<class 'string.templatelib.Template'>

Templates are stored as sequences of literal `~Template.strings`
and dynamic `~Template.interpolations`.
A `~Template.values` attribute holds the values of the interpolations:

>>> cheese = 'Camembert'
>>> template = t'Ah! We do have {cheese}.'
>>> template.strings
('Ah! We do have ', '.')
>>> template.interpolations
(Interpolation('Camembert', ...),)
>>> template.values
('Camembert',)

The `strings` tuple has one more element than `interpolations`
and `values`; the interpolations “belong” between the strings.
This may be easier to understand when tuples are aligned

```python

template.strings:  ('Ah! We do have ',              '.')
template.values:   (                   'Camembert',    )
```

#### Attributes

attribute:: strings

attribute:: interpolations

attribute:: values

#### Methods

method:: __new__(*args: str | Interpolation)

describe:: iter(template)

describe:: template + other
