---
id: "python-en-function-locale-nl_langinfo"
language: "python"
lang: "en"
category: "function"
name: "nl_langinfo"
signature: "nl_langinfo(option)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.nl_langinfo"
license: "PSF"
updated: "2026-10-01"
---

# nl_langinfo

Return some locale-specific information as a string.  This function is not
available on all systems, and the set of possible options might also vary
across platforms.  The possible argument values are numbers, for which
symbolic constants are available in the locale module.

The `nl_langinfo` function accepts one of the following keys.  Most
descriptions are taken from the corresponding description in the GNU C
library.

data:: CODESET

data:: D_T_FMT

data:: D_FMT

data:: T_FMT

data:: T_FMT_AMPM

data:: DAY_1

data:: ABDAY_1

data:: MON_1

data:: ABMON_1

data:: RADIXCHAR

data:: THOUSEP

data:: YESEXPR

data:: NOEXPR

data:: CRNCYSTR

data:: ERA

data:: ERA_D_T_FMT

data:: ERA_D_FMT

data:: ERA_T_FMT

data:: ALT_DIGITS

The function temporarily sets the `LC_CTYPE` locale to the locale
of the category that determines the requested value (`LC_TIME`,
`LC_NUMERIC`, `LC_MONETARY` or `LC_MESSAGES`) if locales are
different and the resulting string is non-ASCII.
This temporary change affects other threads.

> *Changed in 3.14*: The function now temporarily sets the ``LC_CTYPE`` locale in some cases.

> *Changed in next*: On glibc, the ``LC_TIME`` items (except ``ERA``) are now decoded independently of the ``LC_CTYPE`` encoding.
