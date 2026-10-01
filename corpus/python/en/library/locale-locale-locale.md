---
id: "python-en-function-locale-locale"
language: "python"
lang: "en"
category: "function"
name: "locale"
title: "The locale module exposes the C library's gettext interface on systems that"
directive: "module"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#module-locale"
license: "PSF"
updated: "2026-10-01"
---

# The locale module exposes the C library's gettext interface on systems that

The locale module exposes the C library's gettext interface on systems that
provide this interface.  It consists of the functions `gettext`,
`dgettext`, `dcgettext`, `textdomain`, `bindtextdomain`,
and `bind_textdomain_codeset`.  These are similar to the same functions in
the `gettext` module, but use the C library's binary format for message
catalogs, and the C library's search algorithms for locating message catalogs.

Python applications should normally find no need to invoke these functions, and
should use `gettext` instead.  A known exception to this rule are
applications that link with additional C libraries which internally invoke
C functions `gettext` or `dcgettext`.  For these applications, it may be
necessary to bind the text domain, so that the libraries can properly locate
their message catalogs.
